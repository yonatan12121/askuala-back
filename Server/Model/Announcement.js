const mongoose= require("mongoose");

const AnnounceSchema = new mongoose.Schema({
    AnnouncementTitle:String,
    Announcement:String,
    AnonouncerName:String,
    ClassId:String,
    ClassLink:String,
    Time:String,

},{timestamps:true},
{
    collation:"Announcement"
}
)
const Announcements =mongoose.model("Announcement",AnnounceSchema);
module.exports =Announcements;