/**
 * 게시 시간을 상대적인 시간 형식으로 변환하는 함수
 * @param timestamp 변환할 타임스탬프 (Date 객체 또는 ISO 문자열)
 * @returns 상대적 시간 문자열 (예: '3시간 전', '2일 전', '1주 전' 등)
 */
export function formatRelativeTime(timestamp: Date | string): string {
  const date = typeof timestamp === 'string' ? new Date(timestamp) : timestamp;
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInSec = Math.floor(diffInMs / 1000);
  const diffInMin = Math.floor(diffInSec / 60);
  const diffInHour = Math.floor(diffInMin / 60);
  const diffInDay = Math.floor(diffInHour / 24);
  const diffInWeek = Math.floor(diffInDay / 7);
  const diffInMonth = Math.floor(diffInDay / 30);
  const diffInYear = Math.floor(diffInDay / 365);

  if (diffInYear > 0) {
    return `${diffInYear}년 전`;
  } else if (diffInMonth > 0) {
    return `${diffInMonth}달 전`;
  } else if (diffInWeek > 0) {
    return `${diffInWeek}주 전`;
  } else if (diffInDay > 0) {
    return `${diffInDay}일 전`;
  } else if (diffInHour > 0) {
    return `${diffInHour}시간 전`;
  } else if (diffInMin > 3) {
    return `${diffInMin}분 전`;
  } else {
    return '방금 전';
  }
}
