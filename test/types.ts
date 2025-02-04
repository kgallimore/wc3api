interface RootObject {
  GameListUpdate: GameListUpdate;
  GameList: GameList;
  GameListRemove: GameListRemove;
  FriendsFriendUpdated: FriendsFriendUpdated;
  TeamsInformation: TeamsInformation;
  OnChannelUpdate: OnChannelUpdate;
  OnGameFocus: OnGameFocus;
  UpdateMapPool: UpdateMapPool;
  ClanInfoData: ClanInfoData;
  FriendsInvitationData: FriendsInvitationData;
  FriendsFriendData: FriendsFriendData;
  UpdateIsUnranked: UpdateIsUnranked;
  UpdateSelectedGameMode: UpdateSelectedGameMode;
  UpdateMapVetos: UpdateMapVetos;
  RankedSeasonStatsUpdate: RankedSeasonStatsUpdate;
  UpdateLeaderboardHighestRankFailed: UpdateLeaderboardHighestRankFailed;
  UpdateChatMemberStats: UpdateChatMemberStats;
  UpdateLeaderboardData: UpdateLeaderboardData;
  GameListClear: UpdateLeaderboardHighestRankFailed;
  MultiplayerGameListFilters: MultiplayerGameListFilters;
  OnChannelJoin: OnChannelJoin;
  SetGlueScreen: SetGlueScreen;
  ChatMessage: ChatMessage;
  UpdateUserInfo: UpdateUserInfo;
  SetMainMenuTheme: SetMainMenuTheme;
  GameLobbySetup: GameLobbySetup;
  MultiplayerRecentPlayers: MultiplayerRecentPlayers;
  IMEUpdated: IMEUpdated;
  CancelTeamInvitations: UpdateLeaderboardHighestRankFailed;
  LobbyCountdown: LobbyCountdown;
  OptionsData: OptionsData;
  GameLobbyGracefulExit: SetGlueScreen;
  SetOverlayScreen: SetGlueScreen;
  LoadProgressUpdate: LoadProgressUpdate;
  UpdateLoadingScreenInfo: UpdateLoadingScreenInfo;
  OnChannelLeave: OnChannelLeave;
  LoadingPlayerReadyUpdate: LoadingPlayerReadyUpdate;
  SwitchToNextScreenInstantly: UpdateLeaderboardHighestRankFailed;
  IsGameUIActive: IsGameUIActive;
  ExitedGame: UpdateLeaderboardHighestRankFailed;
  UpdateScoreInfo: UpdateScoreInfo;
  MultiplayerGameLeave: UpdateLeaderboardHighestRankFailed;
  UpdateLastGameLaunched: UpdateLastGameLaunched;
  LocaleInfo: LocaleInfo2;
  CollectionData: CollectionData2;
  UpdateProfileData: UpdateProfileData;
  UpdateProfileDataWithToonStats: UpdateProfileDataWithToonStats;
  OnNetProviderChanged: OnNetProviderChanged;
  CampaignProgress: CampaignProgress;
  CustomCampaignList: CustomCampaignList;
  UserDataFolder: UserDataFolder;
  MapList: MapList2;
  UpdateGameModes: UpdateGameModes;
  UpdateReadyState: UpdateReadyState;
  UpdatePlayerDescription: UpdatePlayerDescription;
  UpdateProfileClanInfo: UpdateProfileClanInfo;
  ArrangedTeamStats: ArrangedTeamStats;
  MMStats: MMStats;
  MatchHistoryUpdate: MatchHistoryUpdate;
  MultiplayerGameCreateStarted: UpdateLeaderboardHighestRankFailed;
  LocalizationValues: LocalizationValues;
  GameVersion: GameVersion;
  BuildType: BuildType;
  PreloadComplete: UpdateLeaderboardHighestRankFailed;
  GameModeUpdated: GameModeUpdated;
  ClanMembersData: ClanMembersData;
  FriendsInvitationUpdated: FriendsInvitationUpdated;
  ShowAgeRatingScreen: ShowAgeRatingScreen;
  HideModal: UpdateLeaderboardHighestRankFailed;
  OnGetAgeRatingRequired: OnGetAgeRatingRequired;
  HotkeysIds: HotkeysIds;
  ResumeUI: UpdateLeaderboardHighestRankFailed;
  UpdateToonList: UpdateToonList;
  ProfileAvatarId: ProfileAvatarId;
  RankedSeasonalInfoUpdate: RankedSeasonalInfoUpdate;
  OnNetProviderInitialized: OnNetProviderInitialized;
  GameModeResolved: GameModeResolved;
  FriendsFriendRemoved: FriendsFriendRemoved;
  UpdateLobbySelectedRace: UpdateLobbySelectedRace;
  LoggedOut: UpdateLeaderboardHighestRankFailed;
}
interface UpdateLobbySelectedRace {
  message: Message14;
}
interface Message14 {
  selectedRace: string;
}
interface FriendsFriendRemoved {
  data: Data12;
}
interface Data12 {
  accountId: number;
}
interface GameModeResolved {
  message: Avatarsframed;
}
interface OnNetProviderInitialized {
  message: Message13;
}
interface Message13 {
  isOnline: boolean;
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
interface ProfileAvatarId {
  data: Data11;
}
interface Data11 {
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
interface HotkeysIds {
  keycodes: Keycodes;
}
interface Keycodes {
  ids: string[];
}
interface OnGetAgeRatingRequired {
  message: Message12;
}
interface Message12 {
  ageRatingRequired: string;
}
interface ShowAgeRatingScreen {
  message: Message11;
}
interface Message11 {
  ageRatingScreenRequired: string;
}
interface FriendsInvitationUpdated {
  data: Invitation;
}
interface ClanMembersData {
  data: Data10;
}
interface Data10 {
  members: any[];
}
interface GameModeUpdated {
  message: Message10;
}
interface Message10 {
  gameMode: number;
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
interface MatchHistoryUpdate {
  matchHistory: MatchHistory;
}
interface MatchHistory {
  latestGameTimestamp: number;
}
interface MMStats {
  message: Message9;
}
interface Message9 {
  soloStats: any[];
}
interface ArrangedTeamStats {
  message: Message8;
}
interface Message8 {
  gameTypes: any[];
}
interface UpdateProfileClanInfo {
  data: Data9;
}
interface Data9 {
  clanId: number;
  clanAbbreviation: string;
  clanName: string;
  clanMemberRank: number;
  motd: string;
}
interface UpdatePlayerDescription {
  playerDescription: PlayerDescription;
}
interface PlayerDescription {
  description: string;
}
interface UpdateReadyState {
  message: Message7;
}
interface Message7 {
  readyUpState: string;
  memberCount: number;
  memberList: MemberList[];
  isHost: boolean;
}
interface MemberList {
  isQueueing: boolean;
  isReady: boolean;
  preferredRace: string;
  isSelectingRace: boolean;
  memberId: number;
  gatewayId: number;
  auroraId: number;
  joinOrder: number;
  teamOrder: number;
  isOwner: boolean;
  isSelf: boolean;
  toonName: string;
  clanName: string;
  battleTag: string;
  isFriend: boolean;
  avatarId: string;
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
interface UserDataFolder {
  details: Details7;
}
interface Details7 {
  directory: string;
}
interface CustomCampaignList {
  details: Details6;
}
interface Details6 {
  campaigns: any[];
}
interface CampaignProgress {
  details: Details5;
}
interface Details5 {
  tutorialCleared: boolean;
  difficulty: number;
  hasProgress: boolean;
  campaigns: Campaign[];
  version: string;
}
interface Campaign {
  campaignIndex: number;
  campaignBgClassName: string;
  campaignSoundClassName: string;
  campaignBgLoadingId: number;
  campaignFilename: string;
  campaignHeader: string;
  campaignName: string;
  enableFUE: boolean;
  hasProgress: boolean;
  isAvailable: boolean;
  hasSeenOpeningCinematic: boolean;
  variableDifficulty: boolean;
  availableMissions: AvailableMission[];
}
interface AvailableMission {
  header: string;
  name: string;
  filename: string[];
  missionType: number;
  difficultyProgress: number;
  missionIndex?: number;
}
interface OnNetProviderChanged {
  providerId: string;
}
interface UpdateProfileDataWithToonStats {
  details: Details4;
}
interface Details4 {
  seasons: Season[];
}
interface Season {
  season: number;
  races: Race[];
}
interface Race {
  race: number;
  stats: Stat[];
}
interface Stat {
  statName: string;
  min: number;
  max: number;
  sum: number;
}
interface UpdateProfileData {
  details: Details3;
}
interface Details3 {
  aurora_id: number;
  avatars: Avatars;
  avatars_framed: Avatarsframed;
  avatars_unlocked: Avatarsunlocked;
  game_results: any[];
  maps: any[];
  matchmaked_current_season: number;
  matchmaked_current_season_buckets: number[];
  matchmaked_games: any[];
  matchmaked_stats: any[];
  profiles: any[];
  program_id: string;
  replays: any[];
  stats: any[];
  toon_guid_by_gateway: Avatarsframed;
  toons: any[];
  battle_tag_full: string;
  requested_gateway_id: number;
  playedWithSDIcons: boolean;
}
interface Avatarsunlocked {
  p001: P001;
  p002: P001;
  p003: P001;
  p004: P001;
  p005: P001;
  p006: P001;
  p007: P001;
  p008: P001;
  p009: P001;
  p010: P001;
  p011: P001;
  p012: P001;
  p013: P001;
  p014: P001;
  p015: P001;
  p016: P001;
  p017: P001;
  p018: P001;
  p019: P001;
  p020: P001;
  p021: P001;
  p022: P001;
  p023: P001;
  p024: P001;
  p025: P001;
  p026: P001;
  p027: P001;
  p028: P001;
  p029: P001;
  p030: P001;
  p031: P001;
  p032: P001;
  p033: P001;
  p034: P001;
  p035: P001;
  p036: P001;
  p037: P001;
  p038: P001;
  p039: P001;
  p040: P001;
  p041: P001;
  p042: P001;
  p043: P001;
  p044: P001;
  p045: P001;
  p046: P001;
  p047: P001;
  p048: P001;
  p049: P001;
  p050: P001;
  p051: P001;
  p052: P001;
  p053: P001;
  p054: P001;
  p055: P001;
  p056: P001;
  p057: P001;
  p058: P001;
  p059: P001;
  p060: P001;
  p061: P001;
  p062: P001;
  p068: P001;
  p069: P001;
  p070: P001;
  p071: P001;
  p072: P001;
  p073: P001;
  p074: P001;
  p075: P001;
  p076: P001;
  p077: P001;
  p078: P001;
  p079: P001;
  p080: P001;
  p081: P001;
  p082: P001;
  p083: P001;
  p084: P001;
  p085: P001;
  p086: P001;
  p087: P001;
  p088: P001;
  p089: P001;
  p090: P001;
  p091: P001;
  p092: P001;
  p093: P001;
  p094: P001;
  p095: P001;
  p096: P001;
  p097: P001;
  p098: P001;
  p099: P001;
  p100: P001;
  p101: P001;
  p102: P001;
  p103: P001;
  p104: P001;
  p105: P001;
  p106: P001;
  p107: P001;
  p108: P001;
  p109: P001;
  p110: P001;
  p111: P001;
  p112: P001;
  p113: P001;
  p116: P001;
  p117: P001;
  p118: P001;
  p119: P001;
  p120: P001;
  p121: P001;
  p122: P001;
  p123: P001;
  p124: P001;
  p125: P001;
  p126: P001;
  p127: P001;
  p128: P001;
  p129: P001;
  p130: P001;
  p131: P001;
  p132: P001;
  p133: P001;
  p134: P001;
  p135: P001;
  p136: P001;
  p137: P001;
  p138: P001;
  p139: P001;
  p140: P001;
  p141: P001;
  p142: P001;
  p143: P001;
  p144: P001;
  p145: P001;
  p146: P001;
  p147: P001;
  p148: P001;
  p149: P001;
  p150: P001;
  p151: P001;
  p152: P001;
  p153: P001;
  p154: P001;
  p155: P001;
  p156: P001;
  p157: P001;
  p158: P001;
  p159: P001;
  p160: P001;
  p161: P001;
  p162: P001;
  p163: P001;
  p164: P001;
  p165: P001;
  p166: P001;
  p167: P001;
  p168: P001;
  p169: P001;
  p170: P001;
  p171: P001;
  p172: P001;
  p173: P001;
  p174: P001;
  p175: P001;
  p176: P001;
  p177: P001;
  p178: P001;
  p179: P001;
  p180: P001;
  p181: P001;
  p182: P001;
  p183: P001;
  p184: P001;
  p185: P001;
  p186: P001;
  p187: P001;
  p188: P001;
  p189: P001;
  p190: P001;
  p191: P001;
  p192: P001;
  p193: P001;
  p194: P001;
  p195: P001;
  p196: P001;
  p197: P001;
  p198: P001;
  p199: P001;
  p200: P001;
  p201: P001;
  p202: P001;
  p203: P001;
  p204: P001;
  p205: P001;
  p206: P001;
}
interface P001 {
  level: number;
  stat: string;
  url: string;
}
interface Avatarsframed {}
interface Avatars {
  p001: string;
  p002: string;
  p003: string;
  p004: string;
  p005: string;
  p006: string;
  p007: string;
  p008: string;
  p009: string;
  p010: string;
  p011: string;
  p012: string;
  p013: string;
  p014: string;
  p015: string;
  p016: string;
  p017: string;
  p018: string;
  p019: string;
  p020: string;
  p021: string;
  p022: string;
  p023: string;
  p024: string;
  p025: string;
  p026: string;
  p027: string;
  p028: string;
  p029: string;
  p030: string;
  p031: string;
  p032: string;
  p033: string;
  p034: string;
  p035: string;
  p036: string;
  p037: string;
  p038: string;
  p039: string;
  p040: string;
  p041: string;
  p042: string;
  p043: string;
  p044: string;
  p045: string;
  p046: string;
  p047: string;
  p048: string;
  p049: string;
  p050: string;
  p051: string;
  p052: string;
  p053: string;
  p054: string;
  p055: string;
  p056: string;
  p057: string;
  p058: string;
  p059: string;
  p060: string;
  p061: string;
  p062: string;
  p068: string;
  p069: string;
  p070: string;
  p071: string;
  p072: string;
  p073: string;
  p074: string;
  p075: string;
  p076: string;
  p077: string;
  p078: string;
  p079: string;
  p080: string;
  p081: string;
  p082: string;
  p083: string;
  p084: string;
  p085: string;
  p086: string;
  p087: string;
  p088: string;
  p089: string;
  p090: string;
  p091: string;
  p092: string;
  p093: string;
  p094: string;
  p095: string;
  p096: string;
  p097: string;
  p098: string;
  p099: string;
  p100: string;
  p101: string;
  p102: string;
  p103: string;
  p104: string;
  p105: string;
  p106: string;
  p107: string;
  p108: string;
  p109: string;
  p110: string;
  p111: string;
  p112: string;
  p113: string;
  p116: string;
  p117: string;
  p118: string;
  p119: string;
  p120: string;
  p121: string;
  p122: string;
  p123: string;
  p124: string;
  p125: string;
  p126: string;
  p127: string;
  p128: string;
  p129: string;
  p130: string;
  p131: string;
  p132: string;
  p133: string;
  p134: string;
  p135: string;
  p136: string;
  p137: string;
  p138: string;
  p139: string;
  p140: string;
  p141: string;
  p142: string;
  p143: string;
  p144: string;
  p145: string;
  p146: string;
  p147: string;
  p148: string;
  p149: string;
  p150: string;
  p151: string;
  p152: string;
  p153: string;
  p154: string;
  p155: string;
  p156: string;
  p157: string;
  p158: string;
  p159: string;
  p160: string;
  p161: string;
  p162: string;
  p163: string;
  p164: string;
  p165: string;
  p166: string;
  p167: string;
  p168: string;
  p169: string;
  p170: string;
  p171: string;
  p172: string;
  p173: string;
  p174: string;
  p175: string;
  p176: string;
  p177: string;
  p178: string;
  p179: string;
  p180: string;
  p181: string;
  p182: string;
  p183: string;
  p184: string;
  p185: string;
  p186: string;
  p187: string;
  p188: string;
  p189: string;
  p190: string;
  p191: string;
  p192: string;
  p193: string;
  p194: string;
  p195: string;
  p196: string;
  p197: string;
  p198: string;
  p199: string;
  p200: string;
  p201: string;
  p202: string;
  p203: string;
  p204: string;
  p205: string;
  p206: string;
}
interface CollectionData2 {
  collectionData: CollectionData;
}
interface CollectionData {
  GroupList: GroupList[];
  CompatibleVersionsGroupList: CompatibleVersionsGroupList[];
}
interface CompatibleVersionsGroupList {
  art: string;
  color: string;
  stringId: string;
}
interface GroupList {
  groupType: number;
  stringId: string;
  CollectibleList: (
    | CollectibleList
    | CollectibleList2
    | CollectibleList3
    | CollectibleList4
    | CollectibleList5
  )[];
}
interface CollectibleList5 {
  isUnlocked: boolean;
  unlockedDate: string;
  unlockedTime: string;
  unlockedEpoch: number;
  name: string;
  description: string;
  id: string;
  portraitId: string;
  isSelected: boolean;
  iconId: number;
  race: number;
}
interface CollectibleList4 {
  isUnlocked: boolean;
  unlockedDate: string;
  unlockedTime: string;
  unlockedEpoch: number;
  name: string;
  description: string;
  id: string;
  portraitId: string;
  isSelected: boolean;
  iconId: number;
  race: number;
  criteria_progress?: Criteriaprogress;
}
interface CollectibleList3 {
  unlockedEpoch: number;
  unlockedDate: string;
  unlockedTime: string;
  isUnlocked: boolean;
  criteria_progress: Criteriaprogress;
  name: string;
  description: string;
  id: string;
  portraitId: string;
  isSelected: boolean;
  iconId: number;
  race: number;
}
interface Criteriaprogress {
  name: string;
  current_value: number;
  max_value: number;
}
interface CollectibleList2 {
  isUnlocked: boolean;
  unlockedDate: string;
  unlockedTime: string;
  unlockedEpoch: number;
  name: string;
  description: string;
  target_description: string;
  id: string;
  isSelected: boolean;
  skinId: string;
  unitId: string;
  unitName: string;
  iconId: number;
  compatibleVersionsGroup: number;
  criteria_list: Criterialist[];
}
interface CollectibleList {
  isUnlocked: boolean;
  unlockedDate: string;
  unlockedTime: string;
  unlockedEpoch: number;
  criteria_list: Criterialist[];
  name: string;
  description: string;
  id: string;
  portraitId: string;
  isSelected: boolean;
  iconId: number;
  race: number;
}
interface Criterialist {
  name: string;
  unlocked: boolean;
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
interface UpdateLastGameLaunched {
  screen: Screen;
}
interface Screen {
  lastGameLaunched: string;
  loggedOutDuringGame: boolean;
  usingSDIcons: boolean;
}
interface UpdateScoreInfo {
  scoreInfo: ScoreInfo;
}
interface ScoreInfo {
  localPlayerWon: boolean;
  isHDModeEnabled: boolean;
  localPlayerRace: number;
  gameName: string;
  gameId: string;
  players: Player4[];
  mapInfo: MapInfo2;
}
interface MapInfo2 {
  elapsedGameTimeTotalSeconds: number;
  elapsedGameTimeTotalHours: number;
  elapsedGameTimeMinutes: number;
  elapsedGameTimeSeconds: number;
  elapsedSec: string;
  name: string;
  mapTitle: string;
  mapDescription: string;
  mapFile: string;
  isReplay: boolean;
  replayFile: string;
  difficulty: number;
  variableDifficulty: boolean;
  campaignIndex: number;
  missionIndex: number;
  gameType: string;
}
interface Player4 {
  id: number;
  raceId: number;
  racePrefId: number;
  gamePlayerId: number;
  playerColor: number;
  teamIndex: number;
  toonName: string;
  won: boolean;
  isAi: boolean;
  battleTag: string;
  clanName: string;
  avatarId: string;
  gatewayId: number;
  overallScore: OverallScore;
  unitScore: UnitScore;
  heroes: any[];
  heroScore: HeroScore;
  resourceScore: ResourceScore;
}
interface ResourceScore {
  GOLD_COLLECTED: number;
  LUMBER_COLLECTED: number;
  RESOURCES_RECVD: number;
  RESOURCES_SENT: number;
  TECH_PERCENTAGE: number;
  GOLD_UPKEEP_LOST: number;
}
interface HeroScore {
  HEROES_KILLED: number;
  ITEMS_OBTAINED: number;
  MERCS_HIRED: number;
  EXP_GAINED: number;
  STRONGER_HEROES: number;
}
interface UnitScore {
  UNITS_PRODUCED: number;
  UNITS_KILLED: number;
  STRUCTURES_PRODUCED: number;
  STRUCTURES_RAZED: number;
  LARGEST_ARMY: number;
}
interface OverallScore {
  UNIT_SCORE: number;
  HERO_SCORE: number;
  RESOURCE_SCORE: number;
  TOTAL_SCORE: number;
}
interface IsGameUIActive {
  isActive: string;
}
interface LoadingPlayerReadyUpdate {
  data: Data8;
}
interface Data8 {
  loadingPlayerReadyList: LoadingPlayerReadyList[];
}
interface LoadingPlayerReadyList {
  playerId: number;
}
interface OnChannelLeave {
  gameChat: GameChat2;
}
interface GameChat2 {
  name: string;
  gameName: string;
  members: Member2[];
}
interface Member2 {
  name: string;
  avatarId: string;
  status: number;
  channelType: number;
  gatewayId: number;
  playerRegion: string;
}
interface UpdateLoadingScreenInfo {
  gameData: GameData;
}
interface GameData {
  mapInfo: MapInfo;
  isLoadGame: boolean;
  gameType: string;
  localPlayerRace: string;
  teams: Team2[];
  playerCount: number;
}
interface Team2 {
  team_id: number;
  team_name: string;
  players: Player3[];
}
interface Player3 {
  name: string;
  playerId: number;
  race: string;
  teamColorId: number;
  isReady: boolean;
  battletag: string;
  clanName: string;
  avatarId: string;
  friendData: FriendData;
  mmr: number;
  xp: number;
  gatewayId: number;
}
interface FriendData {
  accountId: number;
  fullName: string;
  globalRichPresence: string;
  isOnline: boolean;
  isFriend: boolean;
  isAway: boolean;
  isBusy: boolean;
  inProgram: boolean;
  inParty: boolean;
  currentProgram: string;
  battleTag: string;
  gatewayId: number;
}
interface MapInfo {
  name: string;
  author: string;
  mapFile: string;
  description: string;
  hasCustomBackground: boolean;
  isCampaignMapBackground: boolean;
  campaignBackgroundId: number;
  customSubTitle: string;
  customText: string;
  customTitle: string;
}
interface LoadProgressUpdate {
  details: Details2;
}
interface Details2 {
  fillPercentage: number;
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
interface LobbyCountdown {
  details: Details;
}
interface Details {
  countdownActive: boolean;
  countdownLocked: boolean;
}
interface IMEUpdated {
  ime: Ime;
}
interface Ime {
  isEnabled: boolean;
  languageMode: string;
}
interface MultiplayerRecentPlayers {
  data: Data7;
}
interface Data7 {
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
interface GameLobbySetup {
  isHost: boolean;
  maxTeams: number;
  isCustomForces: boolean;
  isCustomPlayers: boolean;
  mapData: MapData;
  lobbyName: string;
  mapFlags: MapSettings;
  teamData: TeamData;
  availableTeamColors: AvailableTeamColors;
  players: Player2[];
}
interface Player2 {
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
interface AvailableTeamColors {
  "0": number[];
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
  totalSlots: number;
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
interface SetMainMenuTheme {
  mainMenuTheme: number;
}
interface UpdateUserInfo {
  user: User;
}
interface User {
  toonName: string;
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
interface ChatMessage {
  message: Message6;
}
interface Message6 {
  content: string;
  type: string;
  sender: string;
  source: string;
  isSquelched: boolean;
}
interface SetGlueScreen {
  screen: string;
}
interface OnChannelJoin {
  gameChat: GameChat;
}
interface GameChat {
  name: string;
  gameName: string;
  members: any[];
}
interface MultiplayerGameListFilters {
  data: Data6;
}
interface Data6 {
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
interface UpdateLeaderboardData {
  message: Message5;
}
interface Message5 {
  region: string;
  gameMode: string;
  race: string;
  seasonId: number;
  totalrows: number;
  totalpages: number;
  currentpage: number;
  hasError: boolean;
  errorMessage: string;
  rows: Row[];
  lastAccessTime: number;
}
interface Row {
  race: string;
  players: Player[];
  region: string;
  xp: number;
  mmr: number;
  gameMode: string;
  rank: number;
  wins: number;
  losses: number;
  draws: number;
  division: number;
}
interface Player {
  toonName: string;
  gatewayId: number;
  battleTag: string;
  avatarId: string;
  accountCreationTime: number;
}
interface UpdateChatMemberStats {
  stats: Stats;
}
interface Stats {
  name: string;
  gatewayId: number;
  xp: number;
}
interface UpdateLeaderboardHighestRankFailed {
  "": string;
}
interface RankedSeasonStatsUpdate {
  seasonStats: SeasonStats;
}
interface SeasonStats {
  seasonId: number;
  startTime: number;
  endTime: number;
  divisions: Division[];
  placementMatches: any[];
  placementMatchesRequired: number;
  wins: number;
  losses: number;
  rank: number;
  highestRank: number;
  xp: number;
  isArrangedTeam: boolean;
}
interface Division {
  lowerBoundMMR: number;
  divisionId: number;
  upperBoundMMR: number;
  topDivision: boolean;
}
interface UpdateMapVetos {
  message: Message4;
}
interface Message4 {
  mapVetos: any[];
}
interface UpdateSelectedGameMode {
  message: Message3;
}
interface Message3 {
  gameMode: string;
}
interface UpdateIsUnranked {
  message: Message2;
}
interface Message2 {
  isUnranked: boolean;
}
interface FriendsFriendData {
  data: Data5;
}
interface Data5 {
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
  data: Data4;
}
interface Data4 {
  invitationCount: number;
  invitations: Invitation[];
}
interface Invitation {
  invitationId: string;
  toonName: string;
}
interface ClanInfoData {
  data: Data3;
}
interface Data3 {
  clanId: number;
  clanName: string;
  clanAbbreviation: string;
  description: string;
  motd: string;
}
interface UpdateMapPool {
  mapPool: MapPool;
}
interface MapPool {
  maps: Map[];
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
interface OnGameFocus {
  data: Data2;
}
interface Data2 {
  focus: boolean;
}
interface OnChannelUpdate {
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
interface TeamsInformation {
  message: Message;
}
interface Message {
  lobbyId: number;
  memberCount: number;
  partyMembers: PartyMember[];
  isHost: boolean;
}
interface PartyMember {
  memberId: number;
  gatewayId: number;
  auroraId: number;
  joinOrder: number;
  teamOrder: number;
  isOwner: boolean;
  isSelf: boolean;
  toonName: string;
  clanName: string;
  battleTag: string;
  isFriend: boolean;
  isReady: boolean;
  preferredRace: string;
  avatarId: string;
}
interface FriendsFriendUpdated {
  data: Data;
}
interface Data {
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
interface GameListRemove {
  game: Game3;
}
interface Game3 {
  id: number;
}
interface GameList {
  games: Game2[];
}
interface Game2 {
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
interface GameListUpdate {
  game: Game;
}
interface Game {
  id: number;
  currentPlayers: number;
  maxPlayers: number;
  ping: number;
}
