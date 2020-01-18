export const LOAD_JOB_POSTINGS = 'jobsearch:loadJobPostings';
export const loadJobPostings = (postings) => ({
  type: LOAD_JOB_POSTINGS,
  payload: postings
})