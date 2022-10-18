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

export const readRecruitNoticeByKeyword = async (keyword) => {
  const data = await prismaClient.recruit_notice.findMany({
    include:{
      company:{
        select:{
          company_name:true
        }
      }
    },
    where:{
      OR:[
        {
          tech:{
          contains:keyword
          }
        },
        {
          position:{
          contains:keyword
          }
        }
      ]
    }
  });
  return data;
}

export const readRecruitNoticeByNoticeId = async (noticeId) => {
  const data = await prismaClient.$queryRaw`
    SELECT recruit_notice.id,nation,area,position,compensation,tech,content,c.company_name,(SELECT JSON_ARRAYAGG(id) FROM recruit_notice WHERE company_id=c.id AND id != ${noticeId}) other_notice
    FROM recruit_notice left join company c on recruit_notice.company_id = c.id
    WHERE recruit_notice.id=${noticeId}
  `;

  return data;
}

export const createApplyRaw = async (userId,noticeId) => {
  return await prismaClient.apply_list.create({
    data:{
      user_id:userId,
      notice_id:noticeId
    }
  })
}