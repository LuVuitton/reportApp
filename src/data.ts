export const reportRadioOptions: ReportRadioOption[] = [
  { id: 1, value: "social_engineering", label: "Social Engineering" },
  { id: 2, value: "child_abuse", label: "Child Abuse" },
  { id: 3, value: "spam", label: "SPAM" },
  { id: 4, value: "illegal_goods", label: "Illegal Goods and Services" },
  { id: 5, value: "malware", label: "Malicious Software" },
  { id: 6, value: "ip_infrigement", label: "IP Infrigement (DMCA report)" },
  { id: 7, value: "gambling", label: "Gambling, Casino" },
  { id: 8, value: "hate_speech", label: "Hate Speech" },
  { id: 9, value: "terrorism", label: "Terrorism" },
  { id: 10, value: "i_dont_like_this", label: "I don't like this content" },
];

export type ReportRadioOption = { id: number; value: string; label: string };
