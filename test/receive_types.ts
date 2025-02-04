export interface RootObject {
  LocalizationValues: LocalizationValues;
  GameVersion: GameVersion;
  BuildType: BuildType;
  PreloadComplete: PreloadComplete;
  SetMainMenuTheme: SetMainMenuTheme;
  LocaleInfo: LocaleInfo2;
  UpdateUserInfo: UpdateUserInfo;
  SetGlueScreen: SetGlueScreen;
  GameModeUpdated: GameModeUpdated;
  ClanInfoData: ClanInfoData;
  ClanMembersData: ClanMembersData;
  OnChannelLeave: OnChannelLeave;
  FriendsInvitationUpdated: FriendsInvitationUpdated;
  ShowAgeRatingScreen: ShowAgeRatingScreen;
  HideModal: PreloadComplete;
  OnNetProviderChanged: OnNetProviderChanged;
  OnGetAgeRatingRequired: OnGetAgeRatingRequired;
  HotkeysIds: HotkeysIds;
  ChatMessage: ChatMessage;
  ResumeUI: PreloadComplete;
  SetOverlayScreen: SetGlueScreen;
  UpdateToonList: UpdateToonList;
  ProfileAvatarId: ProfileAvatarId;
  RankedSeasonalInfoUpdate: RankedSeasonalInfoUpdate;
  ArrangedTeamStats: ArrangedTeamStats;
  OnChannelJoin: OnChannelJoin;
  OnChannelUpdate: OnChannelJoin;
  UpdateSelectedGameMode: UpdateSelectedGameMode;
  FriendsFriendUpdated: FriendsFriendUpdated;
  TeamsInformation: TeamsInformation;
  OnNetProviderInitialized: OnNetProviderInitialized;
  GameModeResolved: GameModeResolved;
  UpdateGameModes: UpdateGameModes;
  UpdateReadyState: UpdateReadyState;
  FriendsFriendRemoved: FriendsFriendRemoved;
  UpdateLobbySelectedRace: UpdateLobbySelectedRace;
  UpdateIsUnranked: UpdateIsUnranked;
  UpdateMapVetos: UpdateMapVetos;
  OnGameFocus: OnGameFocus;
  FriendsInvitationData: FriendsInvitationData;
  FriendsFriendData: FriendsFriendData;
  UpdateLeaderboardHighestRankFailed: PreloadComplete;
  UpdateChatMemberStats: UpdateChatMemberStats;
  GameListClear: PreloadComplete;
  MultiplayerGameListFilters: MultiplayerGameListFilters;
  GameList: GameList;
  GameListRemove: GameListRemove;
  IMEUpdated: IMEUpdated;
  MapList: MapList2;
  MultiplayerGameCreateStarted: PreloadComplete;
  GameLobbySetup: GameLobbySetup;
  CancelTeamInvitations: PreloadComplete;
  LobbyCountdown: LobbyCountdown;
  MultiplayerGameLeave: PreloadComplete;
  GameListUpdate: GameListUpdate;
  ShowDownloadModal: ShowDownloadModal;
  ProgressDownloadModal: ProgressDownloadModal;
  HideDownloadModal: PreloadComplete;
  MultiplayerRecentPlayers: MultiplayerRecentPlayers;
  OptionsData: OptionsData;
  SwitchToNextScreenInstantly: PreloadComplete;
}
interface OptionsData {
  options: Options;
}
interface Options {
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
interface MultiplayerRecentPlayers {
  data: Data11;
}
interface Data11 {
  recentPlayers: RecentPlayer[];
}
interface RecentPlayer {
  accountId: number;
  fullName: string;
  globalRichPresence: string;
  gatewayId: number;
  isFriend: boolean;
  isAway: boolean;
  isBusy: boolean;
  inProgram: boolean;
  inParty: boolean;
  battleTag: string;
  isOnline: boolean;
  currentProgram: string;
  clanName: string;
  avatarId: string;
  encounterTime: number;
}
interface ProgressDownloadModal {
  downloadPercentage: number;
}
interface ShowDownloadModal {
  fileName: string;
}
interface GameListUpdate {
  game: Game3;
}
interface Game3 {
  id: number;
  currentPlayers: number;
  maxPlayers: number;
  ping: number;
}
interface LobbyCountdown {
  details: Details;
}
interface Details {
  countdownActive: boolean;
  countdownLocked: boolean;
}
interface GameLobbySetup {
  isHost: boolean;
  maxTeams: number;
  isCustomForces: boolean;
  isCustomPlayers: boolean;
  mapData: MapData;
  lobbyName: string;
  mapFlags: MapSettings;
  teamData: TeamData;
  availableColors: number[];
  players: Player[];
}
interface Player {
  slotStatus: number;
  slot: number;
  team: number;
  slotType: number;
  isObserver: boolean;
  isSelf: boolean;
  slotTypeChangeEnabled: boolean;
  id: number;
  name: string;
  playerRegion: string;
  gatewayId: number;
  color: number;
  colorChangeEnabled: boolean;
  teamChangeEnabled: boolean;
  race: number;
  raceChangeEnabled: boolean;
  handicap: number;
  handicapChangeEnabled: boolean;
}
interface TeamData {
  teams: Team[];
  playableSlots: number;
  filledPlayableSlots: number;
  observerSlotsRemaining: number;
}
interface Team {
  team: number;
  name: string;
  filledSlots: number;
}
interface MapData {
  mapSize: string;
  mapSpeed: string;
  mapName: string;
  mapPath: string;
  mapAuthor: string;
  description: string;
  suggested_players: string;
  mapAllowsSD: boolean;
  mapAllowsHD: boolean;
}
interface MapList2 {
  mapList: MapList;
}
interface MapList {
  maps: Map2[];
  currentDir: string;
  lastUsedMap: string;
  parentDirectory: string;
  isBackDirectory: boolean;
}
interface Map2 {
  filename: string;
  filepath: string;
  isFolder: boolean;
  title: string;
  maxPlayers?: number;
  author?: string;
  description?: string;
  name?: string;
  suggested_players?: string;
  map_size?: string;
  mapAllowsSD?: boolean;
  mapAllowsHD?: boolean;
}
interface IMEUpdated {
  ime: Ime;
}
interface Ime {
  isEnabled: boolean;
  languageMode: string;
}
interface GameListRemove {
  game: Game2;
}
interface Game2 {
  id: number;
}
interface GameList {
  games: Game[];
}
interface Game {
  id: number;
  name: string;
  currentPlayers: number;
  maxPlayers: number;
  creationTime: number;
  region: string;
  ping: number;
  mapFile: string;
  mapProperties: MapProperties;
  mapSettings: MapSettings;
}
interface MapSettings {
  flagLockTeams: boolean;
  flagPlaceTeamsTogether: boolean;
  flagFullSharedUnitControl: boolean;
  flagRandomRaces: boolean;
  flagRandomHero: boolean;
  settingObservers: string;
  typeObservers: number;
  settingVisibility: string;
  typeVisibility: number;
}
interface MapProperties {
  mapSize: string;
  mapSpeed: string;
  mapName: string;
  mapPath: string;
  mapAuthor: string;
  description: string;
  suggested_players: string;
  mapAllowsSD: boolean;
  mapAllowsHD: boolean;
  playerHost: string;
}
interface MultiplayerGameListFilters {
  data: Data10;
}
interface Data10 {
  filterText: string;
  filterMinPlayers: number;
  filterMaxPlayers: number;
  filterRegion: string;
  filterGameSpeed: number;
  filterObservers: number;
  filterMapSize: number;
  filterMapType: number;
  filterMapCreator: number;
  filterLatency: number;
}
interface UpdateChatMemberStats {
  stats: Stats;
}
interface Stats {
  name: string;
  gatewayId: number;
  xp: number;
}
interface FriendsFriendData {
  data: Data9;
}
interface Data9 {
  friendCount: number;
  friends: Friend2[];
}
interface Friend2 {
  localRichPresenceAttributes: LocalRichPresenceAttribute[];
  accountId: number;
  fullName: string;
  battleTag: string;
  isOnline: boolean;
  isFriend: boolean;
  isAway: boolean;
  isBusy: boolean;
  inProgram: boolean;
  inParty: boolean;
  currentProgram: string;
  globalRichPresence: string;
  gatewayId: number;
  avatarId: string;
}
interface LocalRichPresenceAttribute {
  key: string;
  value: string;
  valueSize: number;
}
interface FriendsInvitationData {
  data: Data8;
}
interface Data8 {
  invitationCount: number;
  invitations: Data3[];
}
interface OnGameFocus {
  data: Data7;
}
interface Data7 {
  focus: boolean;
}
interface UpdateMapVetos {
  message: Message12;
}
interface Message12 {
  mapVetos: any[];
}
interface UpdateIsUnranked {
  message: Message11;
}
interface Message11 {
  isUnranked: boolean;
}
interface UpdateLobbySelectedRace {
  message: Message10;
}
interface Message10 {
  selectedRace: string;
}
interface FriendsFriendRemoved {
  data: Data6;
}
interface Data6 {
  accountId: number;
}
interface UpdateReadyState {
  message: Message9;
}
interface Message9 {
  readyUpState: string;
  memberCount: number;
  memberList: any[];
  isHost: boolean;
}
interface UpdateGameModes {
  gameModes: GameModes;
}
interface GameModes {
  tournament: Tournament;
  sffa: Sffa;
  "1v1": Sffa;
  "4v4": Sffa;
  "3v3": Sffa;
  "2v2": Sffa;
}
interface Sffa {
  name: string;
  numMapVetosAllowed: number;
  minNumPlayers: number;
  maxNumPlayers: number;
}
interface Tournament {
  name: string;
  numMapVetosAllowed: number;
  minNumPlayers: number;
  maxNumPlayers: number;
  tournamentInfo: TournamentInfo;
  nextTournamentInfos: TournamentInfo[];
}
interface TournamentInfo {
  isBreak: boolean;
  name: string;
  startTimeEpoch: number;
  teamPlayerCount: number;
  tournamentState: number;
  maps: Map[];
  allowedRaces: string[];
  preliminaryInfo: PreliminaryInfo;
  preliminaryToEliminiationBreakDurationMins: number;
  eliminationRoundInfo: EliminationRoundInfo[];
  finalsStartTimeEpoch: number;
  endTimeEpoch: number;
}
interface EliminationRoundInfo {
  roundDurationMins: number;
  roundQueueDurationMins: number;
  matchFinishSoonTriggerTimeMins: number;
  matchFinishTimeMins: number;
}
interface PreliminaryInfo {
  preliminaryMatchmakingDurationMins: number;
  preliminaryNoMatchmakingDurationMins: number;
  matchFinishSoonTriggerTimeMins: number;
  matchFinishTimeMins: number;
}
interface Map {
  map_filename: string;
  player_slots: number;
  sha1: string;
  author: string;
  description: string;
  name: string;
  suggested_players: string;
  map_size: string;
  mapAllowsSD: boolean;
  mapAllowsHD: boolean;
}
interface GameModeResolved {
  message: Clan;
}
interface OnNetProviderInitialized {
  message: Message8;
}
interface Message8 {
  isOnline: boolean;
}
interface TeamsInformation {
  message: Message7;
}
interface Message7 {
  lobbyId: number;
  memberCount: number;
  partyMembers: any[];
  isHost: boolean;
}
interface FriendsFriendUpdated {
  data: Data5;
}
interface Data5 {
  accountId: number;
  friend: Friend;
}
interface Friend {
  localRichPresenceAttributes: any[];
  accountId: number;
  fullName: string;
  battleTag: string;
  isOnline: boolean;
  isFriend: boolean;
  isAway: boolean;
  isBusy: boolean;
  inProgram: boolean;
  inParty: boolean;
  currentProgram: string;
  globalRichPresence: string;
  gatewayId: number;
  avatarId: string;
}
interface UpdateSelectedGameMode {
  message: Message6;
}
interface Message6 {
  gameMode: string;
}
interface OnChannelJoin {
  channel: Channel;
}
interface Channel {
  name: string;
  displayName: string;
  channelId: string;
  auroraId: number;
  channelNumber: number;
  channelType: number;
  members: Member[];
  isConnected: boolean;
  source: string;
}
interface Member {
  id: string;
  name: string;
  isOnline: boolean;
  isAway: boolean;
  isBusy: boolean;
  avatarId: string;
  isSquelched: boolean;
  clanAbbr: string;
  clanId: number;
  isInClan: boolean;
  xp: number;
  gatewayId: number;
}
interface ArrangedTeamStats {
  message: Message5;
}
interface Message5 {
  gameTypes: any[];
}
interface RankedSeasonalInfoUpdate {
  seasonInfo: SeasonInfo;
}
interface SeasonInfo {
  seasonId: number;
  startTime: number;
  endTime: number;
  divisions: Division[];
}
interface Division {
  lowerBoundMMR: number;
  upperBoundMMR: number;
  divisionId: number;
  topDivision: boolean;
}
interface ProfileAvatarId {
  data: Data4;
}
interface Data4 {
  avatarId: string;
  battleTag: string;
  gatewayId: number;
}
interface UpdateToonList {
  toons: Toons;
}
interface Toons {
  toons: Toon[];
}
interface Toon {
  id: number;
  gatewayId: number;
  name: string;
}
interface ChatMessage {
  message: Message4;
}
interface Message4 {
  content: string;
  type: string;
  sender: string;
  source: string;
  isSquelched: boolean;
}
interface HotkeysIds {
  keycodes: Keycodes;
}
interface Keycodes {
  ids: string[];
}
interface OnGetAgeRatingRequired {
  message: Message3;
}
interface Message3 {
  ageRatingRequired: string;
}
interface OnNetProviderChanged {
  providerId: string;
}
interface ShowAgeRatingScreen {
  message: Message2;
}
interface Message2 {
  ageRatingScreenRequired: string;
}
interface FriendsInvitationUpdated {
  data: Data3;
}
interface Data3 {
  invitationId: string;
  toonName: string;
}
interface OnChannelLeave {
  clan: Clan;
}
interface Clan {}
interface ClanMembersData {
  data: Data2;
}
interface Data2 {
  members: any[];
}
interface ClanInfoData {
  data: Data;
}
interface Data {
  clanId: number;
  clanName: string;
  clanAbbreviation: string;
  description: string;
  motd: string;
}
interface GameModeUpdated {
  message: Message;
}
interface Message {
  gameMode: number;
}
interface SetGlueScreen {
  screen: string;
}
interface UpdateUserInfo {
  user: User;
}
interface User {
  username: string;
  localPlayerName: string;
  battleTag: string;
  avatarId: string;
  isSelf: boolean;
  shouldDisableCustomGames: boolean;
  isAuthenticated: boolean;
  isTeamMember: boolean;
  isTeamLeader: boolean;
  isInGame: boolean;
  ageRatingRequired: string;
  userRegion: string;
  regionBlockedContent: boolean;
  gatewayId: number;
  seasonalInfoSeen: boolean;
  isHDModeEnabled: boolean;
  hasRequiredHDHardware: boolean;
  hasReforged: boolean;
  isOfflineAllowed: boolean;
}
interface LocaleInfo2 {
  localeInfo: LocaleInfo;
}
interface LocaleInfo {
  fonts: Font[];
  locale: string;
}
interface Font {
  name: string;
  path: string;
}
interface SetMainMenuTheme {
  mainMenuTheme: number;
}
interface PreloadComplete {
  "": string;
}
interface BuildType {
  buildType: string;
}
interface GameVersion {
  gameVersion: string;
}
interface LocalizationValues {
  list: List;
}
interface List {
  KeyValues: KeyValue[];
}
interface KeyValue {
  key: string;
  value: string;
}
