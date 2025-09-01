export function get_title(content) {
  return content?.id?.split('/')?.at(-1)?.split('.')[0];
}

export function get_frontmatter(content) {
  return content.data?.frontmatter;
}

export function format_say_date(dateStr) {
  const date = new Date(dateStr);
  const year = date.getFullYear()
  const month = date.getMonth() + 1;
  const day = date.getDay();
  return `${year}/${month}/${day}`
}

export function sticky_sort(posts) {
  return posts.sort((a, b) =>  {
    const x = a.data?.sticky || 0;
    const y = b.data?.sticky || 0;
    return y - x;
  });
}

export function date_sort(posts) {
  return posts.sort((a, b) =>  {
    const x = new Date(a.data?.date);
    const y = new Date(b.data?.date);
    return y - x;
  });
}