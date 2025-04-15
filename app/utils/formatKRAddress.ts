export function formatKRAddress(raw: string): { address: string; name: string } {
  const parts = raw.trim().split(/\s+/);
  if (parts.length < 2) return { address: raw, name: "" };

  const isAddressWord = (word: string) => {
    return (
      word.endsWith("시") ||
      word.endsWith("구") ||
      word.endsWith("동") ||
      word.endsWith("읍") ||
      word.endsWith("면") ||
      word.endsWith("리") ||
      word.endsWith("로") ||
      word.endsWith("도")
    );
  };

  // 주소 파트와 업체명을 나눔
  const addressParts: string[] = [];
  let nameStartIndex = parts.length;

  for (let i = 0; i < parts.length; i++) {
    if (isAddressWord(parts[i])) {
      addressParts.push(parts[i]);
    } else {
      nameStartIndex = i;
      break;
    }
  }

  const nameParts = parts.slice(nameStartIndex);
  const formattedAddress = addressParts.join(" ");
  const formattedName = nameParts.join(" ");

  return {
    address: formattedAddress,
    name: formattedName,
  };
}
