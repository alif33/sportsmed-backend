const Tag = require("../../models/Tag");
const Watch = require("../../models/Watch");

exports.getVideos = async(req, res) => {
    const videos = await Watch.find({});
    res.send(videos.reverse());
};

exports.addVideo = async(req, res) => {
    const { tagName } = req.body;
    if(tagName){
        const tag = await Tag.findOne({tagName});
  
        if(tag){
          res.send({
                success: true,
                message: 'Tag already exists'
          })
        }else{
          const _tag = new Tag({
            tagName
          });
  
          if(await _tag.save()){
            res.send({
                success: true,
                message: 'Tag added successfully'
            })
          }
        }
    }
};


exports.removeVideo = async(req, res) => {
    const { _id }= req.query;
    if(_id){
        Watch
        .find({ _id })
        .deleteOne(()=>{
            res.send({
                success: true,
                message: 'Video deleted successfully'
            });
        });
    }
};
