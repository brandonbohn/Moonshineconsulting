// Utility function to format dates for blog posts
export const formatBlogDate = (date: Date): string => {
  return date.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// Function to create posting dates for blog entries
export const createPostingDate = (daysAgo: number = 0): string => {
  const postDate = new Date();
  postDate.setDate(postDate.getDate() - daysAgo);
  return formatBlogDate(postDate);
};

// Pre-defined posting dates for existing blog entries
export const blogPostingDates = {
  moonshinesBlog: createPostingDate(7), // Posted 7 days ago
  seniorPolicyBeat: createPostingDate(5), // Posted 5 days ago
  voicesInCare: createPostingDate(3), // Posted 3 days ago
  estatePreparation: createPostingDate(2), // Posted 2 days ago
  oldSchoolNurse: createPostingDate(1), // Posted 1 day ago
};
