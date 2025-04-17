export function formatKRAddress(raw: string): { address: string } {
  const parts = raw.trim().split(/\s+/);
  if (parts.length < 2) return { address: raw };

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

  const addressParts: string[] = [];

  for (let i = 0; i < 2; i++) {
    if (isAddressWord(parts[i])) {
      addressParts.push(parts[i]);
    }
  }

  const formattedAddress = addressParts.join(" ");

  return {
    address: formattedAddress,
  };
}
