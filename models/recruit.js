import prismaClient from './prisma_client.js';

export const createRecruitNotice = async (companyId, position,nation,area,compensation,tech,content) => {
  return await prismaClient.recruit_notice.create({
    data:{
      company_id:companyId,
      position,
      nation,
      area,
      compensation,
      tech,
      content
    }
  })
}