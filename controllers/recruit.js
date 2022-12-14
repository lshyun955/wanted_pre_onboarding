import * as recruitService from '../services/recruit.js';

export const registerRecruitNotice = async (req, res) => {
  try {
    const { companyId, position, nation, area, compensation, tech, content } =
      req.body;
    await recruitService.createRecruitNotice(
      companyId,
      position,
      nation,
      area,
      compensation,
      tech,
      content
    );

    res.status(200).json({ message: 'Create Success' });
  } catch (error) {
    res.status(error.statusCode || 400).json({ message: error.message });
  }
};

export const updateRecruitNotice = async (req, res) => {
  try {
    const { noticeId, position, nation, area, compensation, tech, content } =
      req.body;
    await recruitService.updateRecruitNotice(
      noticeId,
      position,
      nation,
      area,
      compensation,
      tech,
      content
    );
    res.status(200).json({ message: 'Update Success' });
  } catch (error) {
    res.status(error.statusCode || 400).json({ message: error.message });
  }
};

export const deleteRecruitNotice = async (req, res) => {
  try {
    const noticeId = req.params.id;
    await recruitService.deleteRecruitNotice(Number(noticeId));
    res.status(200).json({ message: 'Delete Success' });
  } catch (error) {
    res.status(error.statusCode || 400).json({ message: error.message });
  }
};

export const readAllRecruitNotice = async (req, res) => {
  try {
    const result = await recruitService.readAllRecruitNotice();
    const data = JSON.parse(
      JSON.stringify(result, (_, value) =>
        typeof value === 'bigint' ? Number(value.toString()) : value
      )
    );
    res.status(200).json({ data });
  } catch (error) {
    res.status(error.statusCode || 400).json({ message: error.message });
  }
};

export const readRecruitNoticeByKeyword = async (req, res) => {
  try {
    const { keyword } = req.query;
    const result = await recruitService.readRecruitNoticeByKeyword(keyword);
    const data = JSON.parse(
      JSON.stringify(result, (_, value) =>
        typeof value === 'bigint' ? Number(value.toString()) : value
      )
    );
    res.status(200).json(data);
  } catch (error) {
    res.status(error.statusCode || 400).json({ message: error.message });
  }
};

export const readRecruitNoticeByNoticeId = async (req, res) => {
  try {
    const noticeId = req.params.id;
    const result = await recruitService.readRecruitNoticeByNoticeId(
      Number(noticeId)
    );
    const data = JSON.parse(
      JSON.stringify(result, (_, value) =>
        typeof value === 'bigint' ? Number(value.toString()) : value
      )
    );
    res.status(200).json(data);
  } catch (error) {
    res.status(error.statusCode || 400).json({ message: error.message });
  }
};

export const createApplyRaw = async (req, res) => {
  try {
    const { user_id, notice_id } = req.body;
    await recruitService.createApplyRaw(user_id, notice_id);
    res.status(200).json({ message: 'Apply Success' });
  } catch (error) {
    res.status(error.statusCode || 400).json({ message: error.message });
  }
};
