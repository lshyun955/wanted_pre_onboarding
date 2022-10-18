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

export const updateRecruitNotice = async (noticeId, position,nation,area,compensation,tech,content) => {
  return await prismaClient.recruit_notice.update({
    where:{
      id:noticeId
    },
    data:{
      position,
      nation,
      area,
      compensation,
      tech,
      content
    }
  })
}

export const deleteRecruitNotice = async (noticeId) => {
  return await prismaClient.recruit_notice.delete({
    where:{
      id:noticeId
    }
  })
}

export const readAllRecruitNotice = async () => {
  return await prismaClient.recruit_notice.findMany({
    select:{
      id:true,
      nation:true,
      area:true,
      position:true,
      compensation:true,
      tech:true,
      company:{
        select:{
          company_name:true
        }
      }
    }
  });

}