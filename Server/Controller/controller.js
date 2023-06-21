const express = require("express");
const app = express();
app.use(express.json());
const bcrypt = require("bcryptjs");

const cors = require("cors");
app.use(cors());
var User = require("../Model/UserModel");
var Book = require("../Model/Book");
var Announcements = require("../Model/Announcement");
var Todo = require("../Model/Todo");
var Courses = require("../Model/Course");
var Class = require("../Model/Class");
var Questions = require("../Model/Question");

const jwt = require("jsonwebtoken");

const JWT_SECRET =
  "nhjndshnbhsiduy78q3ye3yhrewhriewopfew[fpe-fpe-pf[df[s;f[ds;f[ds;f[ds;f[ds;,fld,s.mdnshbgvcarfdtwygyqgygdhsabjbcnvgawqrr6t8siahjdvdgvds()!@#$%^&*";

exports.register = async (req, res) => {
  const { data } = req.body;
  console.log(data);
  // const role = "student";
  // const Creator =email;
  const Id = data.id;
  const fullName = data.FullName;
  const email = data.email;
  const password = data.password;
  const gender = data.gender;
  const phoneNumber = data.phoneNumber;
  const role = data.role;
  const department = data.department;

  const encreptedPassword = await bcrypt.hash(password, 10);

  console.log("hello");

  try {
    await User.create({
      Id,
      fullName,
      phoneNumber,
      gender,
      department,
      email,
      password: encreptedPassword,
      role,

      verified: false,
    });

    console.log("success");

    // this is where email verification is done

    // upto here verifcation
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ error });
    console.log(error.message);
  }
};
exports.loginUser = async (req, res) => {
  const { data } = req.body;
  console.log(data);
  var Id = data.email;
  var password = data.password;
  const user = await User.findOne({ Id });
  if (!user) {
    return res.json({ error: "User Not found" });
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ email: user.email }, JWT_SECRET, {
      expiresIn: "15m",
    });

    if (res.status(201)) {
      const id = user.Id;
      const password = user.password;
      const role = user.role;
      const fullName = user.fullName;
      const department = user.department;
      const gender = user.gender;
      if (role == "Student") {
        console.log("check");
        return res.json({
          status: "ok",
          role,
          id,
          password,
          fullName,
          department,
          data: token,
        });
      }
      if (role == "Admin") {
        return res.json({
          status: "ok",
          role,
          id,
          password,
          fullName,
          department,
          data: token,
        });
      }
      if (role == "SuperVisor") {
        return res.json({
          status: "ok",
          role,
          id,
          password,
          fullName,
          department,
          data: token,
        });
      }
      if (role == "Teacher") {
        return res.json({
          status: "ok",
          role,
          id,
          password,
          fullName,
          department,
          data: token,
        });
      }
    } else {
      return res.json({ error: "error" });
    }
  }
  res.json({ status: "error", error: "InvAlid Password" });
};

exports.storeTodo = (req, res) => {
  const { data } = req.body;
  console.log(data.data);
  var todo = data.data.getTodo;
  var studentId = data.data.id;
  console.log(data);
  try {
    Todo.create({ todo, studentId });
    res.send({ status: "ok" });
    console.log("todolist updated successfully");
  } catch (error) {
    res.send({ status: "error" });
    console.log(error);
  }
};

exports.storebook = (req, res) => {
  const { data } = req.body;
  var BookName = data.BookName;
  var BookAuthor = data.BookAuthor;
  var Books = data.fileInput;
  var BookDepratment = data.BookDepratmen;
  try {
    Book.create({ BookName, BookAuthor, Books, BookDepratment });
    res.send({ status: "ok" });
    console.log("Book created successfully");
  } catch (error) {
    res.send({ status: "error" });
    console.log(error);
  }
};

exports.storeQuestion = (req, res) => {
  const { data } = req.body;
  var Question = data.questions;
  var QuestionAsker = data.Username;
  var Department = data.department;
  try {
    Questions.create({ Question, QuestionAsker, Department });
    res.send({ status: "ok" });
    console.log("Question created successfully");
  } catch (error) {
    res.send({ status: "error" });
    console.log(error);
  }
};
exports.storeAnswers = (req, res) => {
  const { data } = req.body;
  var Answer = data.answer;
  var Name = data.Username;
  var Count = "0";
  var QuestionId = data.id;
  console.log(Answer, Name, Count, QuestionId);

  Questions.updateOne(
    { _id: QuestionId },
    {
      $push: {
        Answer: [{ Answer: Answer, Name: Name, QuestionId, QuestionId }],
      },
    },
    (err, doc) => {
      if (err) {
        res.status(500).send(err);
        console.log("hellp", err);
      } else {
        console.log("hellp", doc);
        res.status(200).send(doc);
      }
    }
  );
};

exports.storecourse = (req, res) => {
  const { data } = req.body;
  (CourseId = data.courseId),
    (CourseName = data.courseName),
    (Ects = data.ETCS),
    (CreaditHour = data.creaditHours),
    (lectureID = data.teacherId),
    (courseDept = data.courseDept),
    (CourseCreator = data.CourseCreator);
  try {
    Courses.create({
      CourseId,
      CourseName,
      Ects,
      CreaditHour,
      lectureID,
      courseDept,
      CourseCreator,
    });
    res.send({ status: "ok" });
    console.log("Course created successfully");
  } catch (error) {
    res.send({ status: "error" });
    console.log(error);
  }
};
exports.storeClass = (req, res) => {
  const { data } = req.body;
  CourseId = data.courseId;
  CourseName = data.courseName;
  Ects = data.ETCS;
  CreaditHour = data.creaditHours;
  lectureID = data.classCreator;
  courseDept = data.courseDept;
  StartDay = data.startedDay;
  EndDay = data.endDay;
  Description = data.description;
  try {
    Class.create({
      CourseId,
      CourseName,
      Ects,
      CreaditHour,
      lectureID,
      courseDept,
      StartDay,
      EndDay,
      Description,
    });
    res.send({ status: "ok" });
    console.log("Class created successfully");
  } catch (error) {
    res.send({ status: "error" });
    console.log(error);
  }
};

// exports.storeMaterials = (req, res) => {
//   const { data } = req.body;
//   CourseId = data.courseId;

//   try {
//     Class.create({ CourseId });
//     res.send({ status: "ok" });
//     console.log("Class created successfully");
//   } catch (error) {
//     res.send({ status: "error" });
//     console.log(error);
//   }
// };

exports.storeannouce = (req, res) => {
  const { data } = req.body;
  console.log(data);

  (AnnouncementTitle = data.title),
    (Announcement = data.message),
    (AnonouncerName = data.anonouncerName),
    (ClassId = data.classId),
    (ClassLink = data.URL),
    (Time = data.startedTime);
  try {
    Announcements.create({
      AnnouncementTitle,
      Announcement,
      AnonouncerName,
      ClassId,
      ClassLink,
      Time,
    });
    res.send({ status: "ok" });
    console.log("announcemnet created successfully");
  } catch (error) {
    res.send({ status: "error" });
    console.log(error);
  }
};

exports.fetchbook = (req, res) => {
  // const {username,department} = req.body;
  Book.find({}, (err, data) => {
    if (err) {
      res.status(500).send(err);
      console.log("hellp", data);
    } else {
      console.log("hellp", data);
      res.status(200).send(data);
    }
  }).sort({ createdAt: -1 });
};
exports.fetchUsers = (req, res) => {
  // const {username,department} = req.body;
  console.log("fetch");
  User.find({}, (err, data) => {
    if (err) {
      res.status(500).send(err);
      console.log("hellp", data);
    } else {
      console.log("hello", data);
      res.status(200).send(data);
    }
  }).sort({ createdAt: -1 });
};

exports.fetchQuestion = (req, res) => {
  // const {username,department} = req.body;
  Questions.find({}, (err, data) => {
    if (err) {
      res.status(500).send(err);
      console.log("The is error in fetching Question", data);
    } else {
      console.log("The Question are the following", data);
      res.status(200).send(data);
    }
  }).sort({ createdAt: -1 });
};

exports.fetchCourse = (req, res) => {
  // const {username,department} = req.body;
  Courses.find({}, (err, data) => {
    if (err) {
      res.status(500).send(err);
      console.log("the is error in fetching courses", data);
    } else {
      console.log("The courses are the following ", data);
      res.status(200).send(data);
    }
  }).sort({ createdAt: -1 });
};

exports.fetchClass = (req, res) => {
  // const {username,department} = req.body;
  Class.find({}, (err, data) => {
    if (err) {
      res.status(500).send(err);
      console.log("the is error in fetching Class", data);
    } else {
      console.log("The class are the following ", data);
      res.status(200).send(data);
    }
  }).sort({ createdAt: -1 });
};

exports.fetchTodo = (req, res) => {
  // const {username,department} = req.body;
  Todo.find({}, (err, data) => {
    if (err) {
      res.status(500).send(err);
      console.log("the is error in fetching Todolist", data);
    } else {
      console.log("The Todolist are the following ", data);
      res.status(200).send(data);
    }
  }).sort({ createdAt: -1 });
};

exports.fetchAnswer = (req, res) => {
  const { data } = req.body;
  QuestionId = data.QuestionId;
  Questions.find({ _id: QuestionId }, (err, data) => {
    if (err) {
      res.status(500).send(err);
      console.log("The is error in fetching Answer", data);
    } else {
      console.log("The Answer are the following", data);
      res.status(200).send(data);
    }
  }).sort({ createdAt: -1 });
};

exports.fetchAnnouncement = (req, res) => {
  // const {username,department} = req.body;
  Announcements.find({}, (err, data) => {
    if (err) {
      res.status(500).send(err);
      console.log(data);
    } else {
      console.log(data);
      res.status(200).send(data);
    }
  }).sort({ createdAt: -1 });
};

exports.JoinClass = async (req, res) => {
  const { data } = req.body;
  var ClassId = data._id;
  var StudentId = data.id;
  var StudentName = data.Username;
  var StudentDept = data.department;
  var lectureID = data.lectureID;
  //   console.log(ClassId,StudentId,StudentName,StudentDept);
  Class.updateOne(
    { _id: ClassId },
    {
      $push: {
        Member: [
          {
            StudentId: StudentId,
            StudentName: StudentName,
            StudentDept: StudentDept,
          },
        ],
      },
    },
    (err, doc) => {
      if (err) return console.log(err);
      User.updateOne(
        { Id: lectureID },
        {
          $push: {
            Notification: [
              {
                text: StudentName + " wants to join your class",
                name: StudentName,
              },
            ],
          },
        },
        (err, doc) => {
          if (err) return console.log(err);
          console.log("NOtified");
        }
      );
      res.json(doc);
    }
  );
};

exports.storeMaterials = async (req, res) => {
  const { data } = req.body;
  console.log(data);
  var ClassId = data.Classid;
  var Title = data.title;
  var File = data.fileInput;

  //   console.log(ClassId,StudentId,StudentName,StudentDept);
  Class.updateOne(
    { _id: ClassId },
    { $push: { Material: [{ Title: Title, ClassId: ClassId, File: File }] } },
    (err, doc) => {
      if (err) return console.log(err);

      res.json(doc);
    }
  );
};

exports.removeUser = async (req, res) => {
  const { data } = req.body;
  var id = data.data;
  console.log(data);
  try {
    // Find the user by ID and remove them
    const result = await User.findByIdAndRemove(id);

    if (result) {
      console.log("User removed successfully:", result);
      res.status(200).send(result);
    } else {
      console.log("User not found");
    }
  } catch (error) {
    console.error("Error removing user:", error);
    res.status(500).send(error);
  }
};

exports.removeTodo = async (req, res) => {
  const { data } = req.body;
  console.log(data);
  var id = data.data;
  try {
    // Find the user by ID and remove them
    const result = await Todo.findByIdAndRemove(id);

    if (result) {
      console.log("Todo removed successfully:", result);
      res.status(200).send(result);
    } else {
      console.log("todo not found");
    }
  } catch (error) {
    console.error("Error removing todo:", error);
    res.status(500).send(error);
  }
};

exports.removeClass = async (req, res) => {
  const { data } = req.body;
  console.log(data);
  var id = data.data;
  try {
    // Find the user by ID and remove them
    const result = await Class.findByIdAndRemove(id);

    if (result) {
      console.log("class removed successfully:", result);
      res.status(200).send(result);
    } else {
      console.log("class not found");
    }
  } catch (error) {
    console.error("Error removing todo:", error);
    res.status(500).send(error);
  }
};

exports.removeCourse = async (req, res) => {
  const { data } = req.body;
  console.log(data);
  var id = data.data;
  try {
    // Find the user by ID and remove them
    const result = await Courses.findByIdAndRemove(id);

    if (result) {
      console.log("Courses removed successfully:", result);
      res.status(200).send(result);
    } else {
      console.log("Courses not found");
    }
  } catch (error) {
    console.error("Error removing Courses:", error);
    res.status(500).send(error);
  }
};

exports.removeAnnouncement = async (req, res) => {
  const { data } = req.body;
  console.log(data);
  var id = data.data;
  try {
    // Find the user by ID and remove them
    const result = await Announcements.findByIdAndRemove(id);

    if (result) {
      console.log("Announcement removed successfully:", result);
      res.status(200).send(result);
    } else {
      console.log("Announcement not found");
    }
  } catch (error) {
    console.error("Error removing Announcement:", error);
    res.status(500).send(error);
  }
};

exports.removeQA = async (req, res) => {
  const { data } = req.body;
  console.log(data);
  var id = data.data;
  try {
    // Find the user by ID and remove them
    const result = await Questions.findByIdAndRemove(id);

    if (result) {
      console.log("Questions removed successfully:", result);
      res.status(200).send(result);
    } else {
      console.log("Questions not found");
    }
  } catch (error) {
    console.error("Error removing Questions:", error);
    res.status(500).send(error);
  }
};

exports.forgotPassword = async (req, res) => {
  var email = req.query.email;
  console.log(email);
  const user = await User.findOne({ email });
  if (!user) {
    console.log("User Not found");
    return res.json({ error: "User Not found" });
  }

  console.log("forget password");
  var nodemailer = require("nodemailer");
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "refugee823@gmail.com",
      pass: "kulwwmpybuhcvfeq",
    },
  });
  console.log("hello", req.query.email);
  if (req.query.email) {
    console.log(req.query.email);
    // const forgotPasswordToken = jwt.sign({},
    //   { userEmail: req.query.email },
    //   "Wintu-Yoni@2022",
    //   {
    //     expiresIn: "4h",
    //   }
    // );

    var forgotPasswordLink = "http://localhost:3000/reset-password/?token=";
    var mailOptions = {
      from: "Askuala@gmail.com",
      to: req.query.email,
      subject: "Reset Password",
      html:
        '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">' +
        '<html xmlns="http://www.w3.org/1999/xhtml"><head>' +
        '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />' +
        "<title>Forgot Password</title>" +
        "<style> body {background-color: #FFFFFF; padding: 0; margin: 0;}</style></head>" +
        '<body style="background-color: #FFFFFF; padding: 0; margin: 0;">' +
        '<table style="max-width: 650px; background-color: #2F6296; color: #ffffff;" id="bodyTable">' +
        '<tr><td align="center" valign="top">' +
        '<table id="emailContainer" style="font-family: Arial; color: #FFFFFF; text-align: center;">' +
        '<tr><td align="left" valign="top" colspan="2" style="border-bottom: 1px solid #CCCCCC; padding-  bottom: 10px;">' +
        "</td></tr><tr>" +
        '<td align="left" valign="top" colspan="2" style="border-bottom: 1px solid #FFFFFF; padding: 20px 0 10px 0;">' +
        '<span style="font-size: 24px; font-weight: normal;color: #FFFFFF">FORGOT PASSWORD</span></td></tr><tr>' +
        '<td align="left" valign="top" colspan="2" style="padding-top: 10px;">' +
        '<span style="font-size: 18px; line-height: 1.5; color: #333333;">' +
        " We have sent you this email in response to your request to reset your password on <a href='http://localhost:3000'>Askula Management System</a><br/><br/>" +
        'To reset your password for, please follow the link below: <button style="font:inherit; cursor: pointer; border: #272727 2px solid; background-color: transparent; border-radius: 5px;"><a href="' +
        forgotPasswordLink +
        '"style="color: #272727; text-decoration: none;">Reset Password</a></button><br/><br/>' +
        "We recommend that you keep your password secure and not share it with anyone.If you didn't request to this message, simply ignore this message.<br/><br/>" +
        "Ethiopian Askula Management System </span> </td> </tr> </table> </td> </tr> </table> </body></html>",
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        return res.json({
          ErrorMessage: error,
        });
      } else {
        console.log("succcesssss");
        return res.json({
          SuccessMessage: "email successfully sent!",
        });
      }
    });
  } else {
    return res.json({
      ErrorMessage: "Email can't be none!",
    });
  }
};
exports.ResetPassword = async (req, res) => {
  const { newPassword, email } = req.body;
  console.log(newPassword, email);
  // Edirs.updateOne({ "NameOfeDirr": edirrName }, { $set: { "Members.$[].Payment": "Payed" } }, (err, doc) => {
  const encreptedPassword = await bcrypt.hash(newPassword, 10);
  User.updateOne(
    { email: email },
    { $set: { password: encreptedPassword } },
    (err, doc) => {
      if (err) return console.log(err);
      return res.json({ doc });
    }
  );
  // $elemMatch: { "Creator": email }
};
exports.UpdateCourse = async (req, res) => {
  const { data } = req.body;
  var id = data.data._id;
   var CourseId = data.data.courseId;
    var CourseName = data.data.courseName;
    var Ects = data.data.ETCS;
    var CreaditHour = data.data.creaditHours;
    var lectureID = data.data.teacherId;rs
    var courseDept = data.data.courseDept;
    var CourseCreator = data.data.CourseCreator;
  console.log(
    id,
    CourseId,
    CourseName,
    Ects,
    CreaditHour,
    lectureID,
    courseDept,
    CourseCreator
  );
  // console.log(postImage);
  Courses.updateMany(
    { _id: id },
    {
      $set: {
        CourseId: CourseId,
        CourseName: CourseName,
        Ects: Ects,
        CreaditHour: CreaditHour,
        lectureID: lectureID,
        courseDept: courseDept,
        CourseCreator: CourseCreator,
      },
    },
    (err, doc) => {
      if (err) return console.log(err);
      res.json(doc);
    }
  );
};
exports.UpdateAccount = async (req, res) => {
  const { data } = req.body;
  console.log(data);
  var _id = data.data._id;
  var Id = data.data.id;
  var fullName = data.data.FullName;
  var email = data.data.email;
  var gender = data.data.gender;
  var phoneNumber = data.data.phoneNumber;
  var role = data.data.role;
  var department = data.data.department;

  // console.log("update", data);
  console.log("update", data.data.FullName,
    email,
    gender,
    phoneNumber,
    role,
    department);

  User.findOneAndUpdate(
    { _id: _id },
    {
      $set: {
        Id: Id,
        fullName: fullName,
        email: email,
        gender: gender,
        phoneNumber: phoneNumber,
        role: role,
        department: department
      }
    },
    { new: true },
    (err, doc) => {
      if (err) return console.log(err);
      return res.json({ doc });
    }
  );
  // console.log(da);
  // User.findOneAndUpdate(
  //   { _id: "6492f18f98f1bed2c6dcc3aa" },
  //   {
  //     $set: {
  //       Id: Id,
  //       fullName: data.FullName,
  //       email: email,
  //       gender: gender,
  //       phoneNumber: phoneNumber,
  //       role: role,
  //       department: department,
  //     },
  //   },
  //   { new: true }, // This option returns the updated document
  //   (err, doc) => {
  //     if (err) return console.log(err);
  //     res.json(doc);
  //     console.log(doc);
  //   }
  // );
};


// exports.UpdateAccount = async (req, res) => {
//   const { data } = req.body;
//   console.log(data);
//   // const role = "student";
//   // const Creator =email;
//   const _id = data._id;
//   const Id = data.id;
//   const fullName = data.FullName;
//   const email = data.email;
//   const gender = data.gender;
//   const phoneNumber = data.phoneNumber;
//   const role = data.role;
//   const department = data.department;

//   console.log("update",data);
//   // const da = User.findById({_id:_id})
//   // console.log(da);
//   // (err, doc) => {
//   //         if (err) return console.log(err);
//   //         res.json(doc);
//   //         console.log(da);
//   //       }
//  const da = User.findOneAndUpdate(
//     { _id: _id },
//     {
//       $set: {
//         Id: Id,
//         fullName: fullName,
//         email: email,
//         gender: gender,
//         phoneNumber: phoneNumber,
//         role: role,
//         department: department,
//       },
//     },
//     (err, doc) => {
//       if (err) return console.log(err);
//       res.json(doc);
//       console.log(da);
//     }
//   );

// };
exports.Updateannouncement = async (req, res) => {
  const { data } = req.body;
  console.log(data);
    var id = data.data._id;
    var AnnouncementTitle = data.data.title;
    var Announcement = data.data.message;
    var AnonouncerName = data.data.anonouncerName;
    var ClassId = data.data.classId;
    var ClassLink = data.data.URL;
    var Time = data.data.startedTime;
  Announcements.updateMany(
    { _id: id },
    {
      $set: {
        AnnouncementTitle: AnnouncementTitle,
        Announcement: Announcement,
        AnonouncerName: AnonouncerName,
        ClassId: ClassId,
        ClassLink: ClassLink,
        Time: Time,
      },
    },
    (err, doc) => {
      if (err) return console.log(err);
      res.json(doc);
    }
  );
};
