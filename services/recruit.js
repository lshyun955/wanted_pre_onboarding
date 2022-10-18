import * as recruitRepository from '../models/recruit.js';

export const createRecruitNotice = async (companyId, position,nation,area,compensation,tech,content) =>{
  return await recruitRepository.createRecruitNotice(companyId, position,nation,area,compensation,tech,content);
}

export const updateRecruitNotice = async (companyId, position,nation,area,compensation,tech,content) =>{
  return await recruitRepository.updateRecruitNotice(companyId, position,nation,area,compensation,tech,content);
}

export const deleteRecruitNotice = async (noticeId) =>{
  return await recruitRepository.deleteRecruitNotice(noticeId);
}

export const readAllRecruitNotice = async () => {
  const result = await recruitRepository.readAllRecruitNotice();
  const data = result.map(notice=>{
    return {
      id:notice.id,
      nation:notice.nation,
      area:notice.area,
      position:notice.position,
      compensation:notice.compensation,
      tech:notice.tech,
      company_name:notice.company.company_name
    }
  });
  return data;
}

export const readRecruitNoticeByKeyword = async (keyword) => {
  const result = await recruitRepository.readRecruitNoticeByKeyword(keyword);
  const data = result.map(notice=>{
    return {
      id:notice.id,
      nation:notice.nation,
      area:notice.area,
      position:notice.position,
      compensation:notice.compensation,
      tech:notice.tech,
      company_name:notice.company.company_name
    }
  });
  return data;
}

export const readRecruitNoticeByNoticeId = async (noticeId) => {
  return await recruitRepository.readRecruitNoticeByNoticeId(noticeId);
}

export const createApplyRaw = async (userId,noticeId) => {
  return await recruitRepository.createApplyRaw(userId,noticeId);
}