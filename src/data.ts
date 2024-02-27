export const reportTypes: Record<string, { id: number; label: string }> = {
  social_engineering: { id: 1, label: "Social Engineering" },
  child_abuse: { id: 2, label: "Child Abuse" },
  spam: { id: 3, label: "SPAM" },
  illegal_goods: { id: 4, label: "Illegal Goods and Services" },
  malware: { id: 5, label: "Malicious Software" },
  ip_infrigement: { id: 6, label: "IP Infrigement (DMCA report)" },
  gambling: { id: 7, label: "Gambling, Casino" },
  hate_speech: { id: 8, label: "Hate Speech" },
  terrorism: { id: 9, label: "Terrorism" },
  i_dont_like_this: { id: 10, label: "I don't like this content" },
};

export const reportRadioOptions: ReportRadioOption[] = Object.keys(
  reportTypes
).map((key, index) => ({
  id: index + 1,
  value: key,
  label: reportTypes[key].label,
}));

export type ReportRadioOption = {
  id: number;
  value: string;
  label: string;
};
