import * as recruitRepository from '../models/recruit.js';

export const createRecruitNotice = async (companyId, position,nation,area,compensation,tech,content) =>{
  return await recruitRepository.createRecruitNotice(companyId, position,nation,area,compensation,tech,content);
}