export function get_title(content) {
  return content?.id.split('/')?.at(-1)?.split('.')[0];
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