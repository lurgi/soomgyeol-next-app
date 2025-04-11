/**
 * 날짜를 'MM.DD' 형식으로 변환
 * @param date 변환할 Date 객체
 * @returns 'MM.DD' 형식의 문자열
 */
export function formatDateToMMDD(date: Date): string {
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${month}.${day}`;
}

/**
 * 날짜를 'YY.MM.DD' 형식으로 변환
 * @param date 변환할 Date 객체
 * @returns 'YY.MM.DD' 형식의 문자열
 */
export function formatDateToYYMMDD(date: Date): string {
  const year = String(date.getFullYear()).slice(2);
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}.${month}.${day}`;
}

/**
 * 시간을 '오전/오후 H시 M분' 형식으로 변환
 * 0분일 경우 분을 표시하지 않음
 * @param date 변환할 Date 객체
 * @returns '오전/오후 H시' 또는 '오전/오후 H시 M분' 형식의 문자열
 */
export function formatTimeToKorean(date: Date): string {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours < 12 ? '오전' : '오후';
  const displayHours = hours % 12 || 12;
  
  if (minutes === 0) {
    return `${ampm} ${displayHours}시`;
  }
  
  return `${ampm} ${displayHours}시 ${minutes}분`;
}

/**
 * 요일을 한글로 변환
 * @param date 변환할 Date 객체
 * @returns 한글 요일 (월, 화, 수, 목, 금, 토, 일)
 */
export function getDayOfWeekKorean(date: Date): string {
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  return days[date.getDay()];
}

/**
 * 날짜 범위를 'MM.DD~MM.DD 요일1, 요일2' 형식으로 변환
 * @param startDate 시작 날짜
 * @param endDate 종료 날짜
 * @param daysOfWeek 요일 배열 (선택적)
 * @returns 포맷된 날짜 범위 문자열
 */
export function formatDateRange(startDate: Date, endDate: Date, daysOfWeek?: string[]): string {
  const startFormatted = formatDateToMMDD(startDate);
  const endFormatted = formatDateToMMDD(endDate);
  
  if (daysOfWeek && daysOfWeek.length > 0) {
    return `${startFormatted}~${endFormatted} ${daysOfWeek.join(', ')}`;
  }
  
  return `${startFormatted}~${endFormatted}`;
}
