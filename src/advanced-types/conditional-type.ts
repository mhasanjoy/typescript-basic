type a1 = number;
type a2 = a1 extends string ? string : null;

type a3 = undefined;
type a4 = number;
type d = a1 extends null ? null : a3 extends number ? number : a4 extends null ? null : never;

interface Sheikh {
  wife1: string;
  wife2: string;
}
type CheckProperty<T, K> = K extends keyof T ? true : false;
type CheckWife1 = CheckProperty<Sheikh, "wife1">;

type friends = "Monica" | "Rachel" | "Phoebe";
type RemoveFriend<T, K> = T extends K ? never : T;
type CurrentFriends = RemoveFriend<friends, "Rachel">;
