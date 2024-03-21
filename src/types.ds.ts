export enum Active {
  discussion = "discussion",
  market = "market",
}
export type SideBarProps = {
  showSideBar: boolean;
  setShowSideBar: (val: boolean) => void;
};
export type DiscussionProps = {
  showSideBar: boolean;
  activeScreen: Active;
};