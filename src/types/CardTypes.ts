// <Remark>
// Do not use CardsType. Just export CardType and use CardType[] in the code
export type CardsType = OneCardType[];

// <Remark>
// Rename it to CardType. CardType already means singular
export type OneCardType = {
  id: number;
  title: string;
  userName: string;
  date: string;
  status: string | null;
};
