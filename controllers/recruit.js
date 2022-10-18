import * as recruitService from "../services/recruit.js"

export const registerRecruitNotice = async (req,res) => {
  try{
    const {companyId, position,nation,area,compensation,tech,content} = req.body;
    await recruitService.createRecruitNotice(companyId, position,nation,area,compensation,tech,content);

    res.status(200).json({message:"Create Success"});
  }catch(error){
    res.status(error.statusCode || 400).json({ message: error.message });
  }
}

export const updateRecruitNotice = async (req,res) => {
  try{
    const {noticeId, position,nation,area,compensation,tech,content} = req.body;
    await recruitService.updateRecruitNotice(noticeId, position,nation,area,compensation,tech,content);
    res.status(200).json({message:"Update Success"});
  }catch(error) {
    res.status(error.statusCode || 400).json({ message: error.message });
  }
}
