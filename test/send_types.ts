export interface RootObject {
  GetLocalizationTable: string[];
  OnWebUILoad: OnWebUILoad;
  StopOverworldMusic: OnWebUILoad;
  StopAmbientSound: OnWebUILoad;
  ScreenTransitionInfo: ScreenTransitionInfo;
  LoginDoorClose: OnWebUILoad;
  PlayAmbientSound: PlayAmbientSound;
  InitializeNetProvider: OnWebUILoad;
  GetAgeRatingRequired: OnWebUILoad;
  GetHotkeyDefinitionsIds: OnWebUILoad;
  RatingSplashScreenDone: OnWebUILoad;
  PlaySound: PlaySound;
  SetInReplayMenu: SetInReplayMenu;
  OnCustomCampaignToggle: OnCustomCampaignToggle;
  GetAuthInfo: OnWebUILoad;
  GetGameModeFromPrefs: OnWebUILoad;
  GetMapVetosFromGameMode: GetMapVetosFromGameMode;
  GetMapListFromGameMode: GetMapVetosFromGameMode;
  PlayOverworldMusic: PlaySound;
  ClanGetClanInfo: OnWebUILoad;
  ClanGetMembers: OnWebUILoad;
  GetPlayerLeaderboardTournamentPage: GetPlayerLeaderboardTournamentPage;
  FriendsGetInvitations: OnWebUILoad;
  FriendsGetFriends: OnWebUILoad;
  GetChatMemberStats: GetChatMemberStats;
  CancelMatchResultsSearch: OnWebUILoad;
  GetIsUnrankedFromPrefs: OnWebUILoad;
  SetGameMode: SetGameMode;
  SendGameListing: OnWebUILoad;
  MultiplayerGetGameFilters: OnWebUILoad;
  ClearGameListing: OnWebUILoad;
  GetGameList: OnWebUILoad;
  SetIMEEnabled: SetIMEEnabled;
  GetMapList: GetMapList;
  CreateLobby: CreateLobby;
  SendGameLobbySetup: OnWebUILoad;
  LobbyStart: OnWebUILoad;
  LobbyCancel: OnWebUILoad;
  SetComputerSlot: SetComputerSlot;
  CloseSlot: CloseSlot;
  OpenSlot: CloseSlot;
  SetTeam: SetTeam;
  StopGameAdvertisements: OnWebUILoad;
  LeaveGame: OnWebUILoad;
  JoinGame: JoinGame;
  SendGameChatMessage: SendGameChatMessage;
  GetOptions: OnWebUILoad;
  SetOptionSingle: SetOptionSingle;
  SetAndSaveOptionAll: SetAndSaveOptionAll;
  MultiplayerSendRecentPlayers: OnWebUILoad;
  ExitGame: OnWebUILoad;
}
interface SetAndSaveOptionAll {
  general: General;
  gameplay: Gameplay;
  input: Input;
  video: Video;
  sound: Sound;
  hotkeys: Hotkeys;
  reforged: General;
  isRefresh: boolean;
}
interface Hotkeys {
  definitions: Definition[];
}
interface Definition {
  id: string;
  name: string;
  race: string;
  category: string;
  hotkey: number;
  defaultHotkey: number;
  buttonPos: ButtonPos;
  researchButtonPos: ButtonPos;
  relatedStrIds: string[];
  buildStrIds: string[];
}
interface ButtonPos {
  x: number;
  y: number;
}
interface Sound {
  preferences: Preference[];
  audioDeviceList: MonitorList[];
  audioDeviceIndex: number;
  PREF_SOUND_MUSIC_OVERRIDE: string;
  locales: string[];
  musicOverrideIndex: number;
}
interface Video {
  monitorList: MonitorList[];
  monitorSelected: number;
  displayModes: DisplayMode[];
  displayMode: number;
  preferences: Preference[];
}
interface DisplayMode {
  bpp: number;
  height: number;
  refreshRate: number;
  width: number;
  id: number;
}
interface MonitorList {
  name: string;
  id: number;
}
interface Input {
  preferences: Preference[];
  customKeys: string;
}
interface Gameplay {
  preferences: Preference[];
  zoomOptionsHd: number[];
  zoomOptionsSd: number[];
  currentSelectedZoom: number;
}
interface General {
  preferences: Preference[];
}
interface Preference {
  preferenceName: string;
  preferenceValue: number;
  preferenceForced: boolean;
  preferenceState: string;
}
interface SetOptionSingle {
  name: string;
  value: number;
}
interface SendGameChatMessage {
  content: string;
}
interface JoinGame {
  gameId: number;
  password: string;
  mapFile: string;
}
interface SetTeam {
  slot: number;
  team: number;
}
interface CloseSlot {
  slot: number;
}
interface SetComputerSlot {
  slot: number;
  difficulty: number;
}
interface CreateLobby {
  filename: string;
  gameName: string;
  gameSpeed: number;
  privateGame: boolean;
  mapSettings: MapSettings;
}
interface MapSettings {
  flagLockTeams: boolean;
  flagPlaceTeamsTogether: boolean;
  flagFullSharedUnitControl: boolean;
  flagRandomRaces: boolean;
  flagRandomHero: boolean;
  settingObservers: number;
  settingVisibility: number;
}
interface GetMapList {
  useLastMap: boolean;
}
interface SetIMEEnabled {
  enable: boolean;
}
interface SetGameMode {
  gameMode: string;
  race: string;
}
interface GetChatMemberStats {
  battleTag: string;
  gatewayId: number;
}
interface GetPlayerLeaderboardTournamentPage {
  query: string;
  tournamentState: string;
}
interface GetMapVetosFromGameMode {
  gameMode: string;
  seasonId: string;
}
interface OnCustomCampaignToggle {
  customCampaign: boolean;
}
interface SetInReplayMenu {
  inReplayMenu: boolean;
}
interface PlaySound {
  sound: string;
}
interface PlayAmbientSound {
  sound: string;
  labelAsFilename: boolean;
}
interface ScreenTransitionInfo {
  screen: string;
  type: string;
  time: string;
}
interface OnWebUILoad {}
