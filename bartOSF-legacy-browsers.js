/**************** 
 * Bartosf *
 ****************/


// store info about the experiment session:
let expName = 'bartOSF';  // from the Builder filename that created this script
let expInfo = {
    '请等待30秒，下方灰色进度条加载完成后': '再点击“OK"开始实验',
    '如果加载失败': '请再次刷新此网页',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0.3255, 0.3255, 0.3255]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(Welcome_chineseRoutineBegin());
flowScheduler.add(Welcome_chineseRoutineEachFrame());
flowScheduler.add(Welcome_chineseRoutineEnd());
flowScheduler.add(GenderRoutineBegin());
flowScheduler.add(GenderRoutineEachFrame());
flowScheduler.add(GenderRoutineEnd());
flowScheduler.add(AgeRoutineBegin());
flowScheduler.add(AgeRoutineEachFrame());
flowScheduler.add(AgeRoutineEnd());
flowScheduler.add(relationship_statusRoutineBegin());
flowScheduler.add(relationship_statusRoutineEachFrame());
flowScheduler.add(relationship_statusRoutineEnd());
flowScheduler.add(nationalityRoutineBegin());
flowScheduler.add(nationalityRoutineEachFrame());
flowScheduler.add(nationalityRoutineEnd());
flowScheduler.add(EducationRoutineBegin());
flowScheduler.add(EducationRoutineEachFrame());
flowScheduler.add(EducationRoutineEnd());
flowScheduler.add(religionRoutineBegin());
flowScheduler.add(religionRoutineEachFrame());
flowScheduler.add(religionRoutineEnd());
flowScheduler.add(ethnicityRoutineBegin());
flowScheduler.add(ethnicityRoutineEachFrame());
flowScheduler.add(ethnicityRoutineEnd());
flowScheduler.add(HouseholdStructureRoutineBegin());
flowScheduler.add(HouseholdStructureRoutineEachFrame());
flowScheduler.add(HouseholdStructureRoutineEnd());
flowScheduler.add(occupation_typeRoutineBegin());
flowScheduler.add(occupation_typeRoutineEachFrame());
flowScheduler.add(occupation_typeRoutineEnd());
flowScheduler.add(family_incomeRoutineBegin());
flowScheduler.add(family_incomeRoutineEachFrame());
flowScheduler.add(family_incomeRoutineEnd());
flowScheduler.add(heightRoutineBegin());
flowScheduler.add(heightRoutineEachFrame());
flowScheduler.add(heightRoutineEnd());
flowScheduler.add(weightRoutineBegin());
flowScheduler.add(weightRoutineEachFrame());
flowScheduler.add(weightRoutineEnd());
flowScheduler.add(waistlineRoutineBegin());
flowScheduler.add(waistlineRoutineEachFrame());
flowScheduler.add(waistlineRoutineEnd());
flowScheduler.add(ever_drink_alcoholRoutineBegin());
flowScheduler.add(ever_drink_alcoholRoutineEachFrame());
flowScheduler.add(ever_drink_alcoholRoutineEnd());
flowScheduler.add(last_drink_timeRoutineBegin());
flowScheduler.add(last_drink_timeRoutineEachFrame());
flowScheduler.add(last_drink_timeRoutineEnd());
flowScheduler.add(drink_freq_12mo_2RoutineBegin());
flowScheduler.add(drink_freq_12mo_2RoutineEachFrame());
flowScheduler.add(drink_freq_12mo_2RoutineEnd());
flowScheduler.add(drink_amount_12moRoutineBegin());
flowScheduler.add(drink_amount_12moRoutineEachFrame());
flowScheduler.add(drink_amount_12moRoutineEnd());
flowScheduler.add(ever_smokeRoutineBegin());
flowScheduler.add(ever_smokeRoutineEachFrame());
flowScheduler.add(ever_smokeRoutineEnd());
flowScheduler.add(start_smoke_ageRoutineBegin());
flowScheduler.add(start_smoke_ageRoutineEachFrame());
flowScheduler.add(start_smoke_ageRoutineEnd());
flowScheduler.add(cigs_per_dayRoutineBegin());
flowScheduler.add(cigs_per_dayRoutineEachFrame());
flowScheduler.add(cigs_per_dayRoutineEnd());
flowScheduler.add(self_health_statusRoutineBegin());
flowScheduler.add(self_health_statusRoutineEachFrame());
flowScheduler.add(self_health_statusRoutineEnd());
flowScheduler.add(hearing_statusRoutineBegin());
flowScheduler.add(hearing_statusRoutineEachFrame());
flowScheduler.add(hearing_statusRoutineEnd());
flowScheduler.add(music_trainingRoutineBegin());
flowScheduler.add(music_trainingRoutineEachFrame());
flowScheduler.add(music_trainingRoutineEnd());
flowScheduler.add(years_musicRoutineBegin());
flowScheduler.add(years_musicRoutineEachFrame());
flowScheduler.add(years_musicRoutineEnd());
flowScheduler.add(current_practiceRoutineBegin());
flowScheduler.add(current_practiceRoutineEachFrame());
flowScheduler.add(current_practiceRoutineEnd());
flowScheduler.add(PHQ9_introRoutineBegin());
flowScheduler.add(PHQ9_introRoutineEachFrame());
flowScheduler.add(PHQ9_introRoutineEnd());
const trials_PHQ9LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_PHQ9LoopBegin(trials_PHQ9LoopScheduler));
flowScheduler.add(trials_PHQ9LoopScheduler);
flowScheduler.add(trials_PHQ9LoopEnd);


flowScheduler.add(loneliness_introRoutineBegin());
flowScheduler.add(loneliness_introRoutineEachFrame());
flowScheduler.add(loneliness_introRoutineEnd());
const trials_lonelinessLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_lonelinessLoopBegin(trials_lonelinessLoopScheduler));
flowScheduler.add(trials_lonelinessLoopScheduler);
flowScheduler.add(trials_lonelinessLoopEnd);


flowScheduler.add(BPSQI_introRoutineBegin());
flowScheduler.add(BPSQI_introRoutineEachFrame());
flowScheduler.add(BPSQI_introRoutineEnd());
flowScheduler.add(B_PSQI_Q1_BedTimeRoutineBegin());
flowScheduler.add(B_PSQI_Q1_BedTimeRoutineEachFrame());
flowScheduler.add(B_PSQI_Q1_BedTimeRoutineEnd());
flowScheduler.add(B_PSQI_Q2_WakeTimeRoutineBegin());
flowScheduler.add(B_PSQI_Q2_WakeTimeRoutineEachFrame());
flowScheduler.add(B_PSQI_Q2_WakeTimeRoutineEnd());
flowScheduler.add(B_PSQI_Q3_SleepLatencyRoutineBegin());
flowScheduler.add(B_PSQI_Q3_SleepLatencyRoutineEachFrame());
flowScheduler.add(B_PSQI_Q3_SleepLatencyRoutineEnd());
flowScheduler.add(B_PSQI_Q4_ActualSleepRoutineBegin());
flowScheduler.add(B_PSQI_Q4_ActualSleepRoutineEachFrame());
flowScheduler.add(B_PSQI_Q4_ActualSleepRoutineEnd());
const trials_PSQILoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_PSQILoopBegin(trials_PSQILoopScheduler));
flowScheduler.add(trials_PSQILoopScheduler);
flowScheduler.add(trials_PSQILoopEnd);


const trials_PSQI_6LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_PSQI_6LoopBegin(trials_PSQI_6LoopScheduler));
flowScheduler.add(trials_PSQI_6LoopScheduler);
flowScheduler.add(trials_PSQI_6LoopEnd);


flowScheduler.add(BMRQ_introRoutineBegin());
flowScheduler.add(BMRQ_introRoutineEachFrame());
flowScheduler.add(BMRQ_introRoutineEnd());
const trials_BMRQLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_BMRQLoopBegin(trials_BMRQLoopScheduler));
flowScheduler.add(trials_BMRQLoopScheduler);
flowScheduler.add(trials_BMRQLoopEnd);


flowScheduler.add(ATAI_introRoutineBegin());
flowScheduler.add(ATAI_introRoutineEachFrame());
flowScheduler.add(ATAI_introRoutineEnd());
const trials_ATAI_QLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_ATAI_QLoopBegin(trials_ATAI_QLoopScheduler));
flowScheduler.add(trials_ATAI_QLoopScheduler);
flowScheduler.add(trials_ATAI_QLoopEnd);


flowScheduler.add(BSSS4_introRoutineBegin());
flowScheduler.add(BSSS4_introRoutineEachFrame());
flowScheduler.add(BSSS4_introRoutineEnd());
const trials_BSSSLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_BSSSLoopBegin(trials_BSSSLoopScheduler));
flowScheduler.add(trials_BSSSLoopScheduler);
flowScheduler.add(trials_BSSSLoopEnd);


flowScheduler.add(uncertainty_introRoutineBegin());
flowScheduler.add(uncertainty_introRoutineEachFrame());
flowScheduler.add(uncertainty_introRoutineEnd());
const uncertainty_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(uncertainty_trialsLoopBegin(uncertainty_trialsLoopScheduler));
flowScheduler.add(uncertainty_trialsLoopScheduler);
flowScheduler.add(uncertainty_trialsLoopEnd);


flowScheduler.add(BPAAT_introRoutineBegin());
flowScheduler.add(BPAAT_introRoutineEachFrame());
flowScheduler.add(BPAAT_introRoutineEnd());
const trials_BPAAT1LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_BPAAT1LoopBegin(trials_BPAAT1LoopScheduler));
flowScheduler.add(trials_BPAAT1LoopScheduler);
flowScheduler.add(trials_BPAAT1LoopEnd);


const trials_BPAAT2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_BPAAT2LoopBegin(trials_BPAAT2LoopScheduler));
flowScheduler.add(trials_BPAAT2LoopScheduler);
flowScheduler.add(trials_BPAAT2LoopEnd);


flowScheduler.add(finishQUESTION_introRoutineBegin());
flowScheduler.add(finishQUESTION_introRoutineEachFrame());
flowScheduler.add(finishQUESTION_introRoutineEnd());
flowScheduler.add(instructionsRoutineBegin());
flowScheduler.add(instructionsRoutineEachFrame());
flowScheduler.add(instructionsRoutineEnd());
const comprehension_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(comprehension_loopLoopBegin(comprehension_loopLoopScheduler));
flowScheduler.add(comprehension_loopLoopScheduler);
flowScheduler.add(comprehension_loopLoopEnd);











flowScheduler.add(begin_formalRoutineBegin());
flowScheduler.add(begin_formalRoutineEachFrame());
flowScheduler.add(begin_formalRoutineEnd());
flowScheduler.add(resetmoneyRoutineBegin());
flowScheduler.add(resetmoneyRoutineEachFrame());
flowScheduler.add(resetmoneyRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);






flowScheduler.add(finalScoreRoutineBegin());
flowScheduler.add(finalScoreRoutineEachFrame());
flowScheduler.add(finalScoreRoutineEnd());
flowScheduler.add(instruction_fishRoutineBegin());
flowScheduler.add(instruction_fishRoutineEachFrame());
flowScheduler.add(instruction_fishRoutineEnd());
const trials_fishLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_fishLoopBegin(trials_fishLoopScheduler));
flowScheduler.add(trials_fishLoopScheduler);
flowScheduler.add(trials_fishLoopEnd);



flowScheduler.add(end_fishingRoutineBegin());
flowScheduler.add(end_fishingRoutineEachFrame());
flowScheduler.add(end_fishingRoutineEnd());
flowScheduler.add(datauploadRoutineBegin());
flowScheduler.add(datauploadRoutineEachFrame());
flowScheduler.add(datauploadRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'CPHQ9Question.xlsx', 'path': 'CPHQ9Question.xlsx'},
    {'name': 'CLonelinessQuestion.xlsx', 'path': 'CLonelinessQuestion.xlsx'},
    {'name': 'CB_PSQIquestion5.xlsx', 'path': 'CB_PSQIquestion5.xlsx'},
    {'name': 'CB_PSQIquestion6.xlsx', 'path': 'CB_PSQIquestion6.xlsx'},
    {'name': 'CBMRQquestion.xlsx', 'path': 'CBMRQquestion.xlsx'},
    {'name': 'CATAIQUESTIONTEXT.xlsx', 'path': 'CATAIQUESTIONTEXT.xlsx'},
    {'name': 'CBSSSQUESTIONTEXT.xlsx', 'path': 'CBSSSQUESTIONTEXT.xlsx'},
    {'name': 'CuncertaintyQuestion.xlsx', 'path': 'CuncertaintyQuestion.xlsx'},
    {'name': 'CBPAATQQ1.xlsx', 'path': 'CBPAATQQ1.xlsx'},
    {'name': 'CBPAATQQ2.xlsx', 'path': 'CBPAATQQ2.xlsx'},
    {'name': 'spreadsheets/practice_conditions.xlsx', 'path': 'spreadsheets/practice_conditions.xlsx'},
    {'name': 'spreadsheets/conditions.xlsx', 'path': 'spreadsheets/conditions.xlsx'},
    {'name': 'intro/EXP_intro_chinese.png', 'path': 'intro/EXP_intro_chinese.png'},
    {'name': 'intro/EXP_PHQ9_intro_chinese.png', 'path': 'intro/EXP_PHQ9_intro_chinese.png'},
    {'name': 'intro/EXP_loneliness_chinese_intro.png', 'path': 'intro/EXP_loneliness_chinese_intro.png'},
    {'name': 'intro/EXP_BPSQI_intro_chinese.png', 'path': 'intro/EXP_BPSQI_intro_chinese.png'},
    {'name': 'intro/EXP_intro_BMRQ_chinese.png', 'path': 'intro/EXP_intro_BMRQ_chinese.png'},
    {'name': 'intro/EXP_ATAI_intro_chinese.png', 'path': 'intro/EXP_ATAI_intro_chinese.png'},
    {'name': 'intro/EXP_BSSS4_intro_chinese.png', 'path': 'intro/EXP_BSSS4_intro_chinese.png'},
    {'name': 'intro/EXP_uncertainty_chinese_intro.png', 'path': 'intro/EXP_uncertainty_chinese_intro.png'},
    {'name': 'intro/EXP_BPAAT_intro_chinese.png', 'path': 'intro/EXP_BPAAT_intro_chinese.png'},
    {'name': 'intro/EXP_finishquestions_intro_chinese.png', 'path': 'intro/EXP_finishquestions_intro_chinese.png'},
    {'name': 'intro/EXP_Bart_intro_chinese.png', 'path': 'intro/EXP_Bart_intro_chinese.png'},
    {'name': 'assets/background.png', 'path': 'assets/background.png'},
    {'name': 'assets/redBalloon.png', 'path': 'assets/redBalloon.png'},
    {'name': 'images/lake5.jpg', 'path': 'images/lake5.jpg'},
    {'name': 'images/lake1.jpg', 'path': 'images/lake1.jpg'},
    {'name': 'images/lake2.jpg', 'path': 'images/lake2.jpg'},
    {'name': 'images/lake3.png', 'path': 'images/lake3.png'},
    {'name': 'images/rod.png', 'path': 'images/rod.png'},
    {'name': 'images/fish1.png', 'path': 'images/fish1.png'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
    {'name': 'CLonelinessQuestion.xlsx', 'path': 'CLonelinessQuestion.xlsx'},
    {'name': 'CPHQ9Question.xlsx', 'path': 'CPHQ9Question.xlsx'},
    {'name': 'CuncertaintyQuestion.xlsx', 'path': 'CuncertaintyQuestion.xlsx'},
    {'name': 'CATAIQUESTIONTEXT.xlsx', 'path': 'CATAIQUESTIONTEXT.xlsx'},
    {'name': 'CB_PSQIquestion5.xlsx', 'path': 'CB_PSQIquestion5.xlsx'},
    {'name': 'CB_PSQIquestion6.xlsx', 'path': 'CB_PSQIquestion6.xlsx'},
    {'name': 'CBMRQquestion.xlsx', 'path': 'CBMRQquestion.xlsx'},
    {'name': 'CBPAATQQ1.xlsx', 'path': 'CBPAATQQ1.xlsx'},
    {'name': 'CBPAATQQ2.xlsx', 'path': 'CBPAATQQ2.xlsx'},
    {'name': 'CBSSSQUESTIONTEXT.xlsx', 'path': 'CBSSSQUESTIONTEXT.xlsx'},
    {'name': 'images/nofish.png', 'path': 'images/nofish.png'},
    {'name': 'images/fish4.png', 'path': 'images/fish4.png'},
    {'name': 'images/fish3.png', 'path': 'images/fish3.png'},
    {'name': 'images/fish2.png', 'path': 'images/fish2.png'},
    {'name': 'assets/redBalloon.png', 'path': 'assets/redBalloon.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.WARNING);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2025.1.0';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var Welcome_chineseClock;
var welcime_chinese_image;
var key_resp_13;
var GenderClock;
var Q_gender_text;
var gender_female_button;
var gender_male_button;
var gender_nonbinary_button;
var gender_prefernot_button;
var Q1;
var AgeClock;
var Q_age_text;
var textbox_age;
var enter_hint_age;
var Q2;
var relationship_statusClock;
var Q_relationship_status;
var relationship_single;
var relationship_Inarelationship;
var relationship_Married;
var relationship_Divorced;
var Q3;
var nationalityClock;
var nationality_text;
var nationality_china;
var nationality_malaysia;
var nationality_other;
var nationality_prefernot;
var Q4;
var EducationClock;
var Q_edu_level_text;
var edu_btn_1;
var edu_btn_2;
var edu_btn_3;
var edu_btn_4;
var edu_btn_5;
var edu_btn_6;
var Q5;
var religionClock;
var Q_religion_text;
var religion_btn_1;
var religion_btn_2;
var religion_btn_3;
var religion_btn_4;
var religion_btn_5;
var religion_btn_6;
var religion_btn_7;
var Q6;
var ethnicityClock;
var Q_ethnicity_text;
var ethnicity_btn_1;
var ethnicity_btn_2;
var ethnicity_3;
var Q7;
var HouseholdStructureClock;
var householdstructure_question_text;
var textbox_household;
var textbox_ABCDE;
var textbox_FGHI;
var Q8;
var hint_household;
var hint_household1;
var occupation_typeClock;
var Q_occupation;
var occupation_Education;
var occupation_Healthcare;
var occupation_Government;
var occupation_Business;
var occupation_Selfemployed;
var occupation_Homemaker;
var occupation_Student;
var occupation_Unemployed;
var occupation_Other;
var occupation_retired;
var Q9;
var family_incomeClock;
var Q_family_income;
var income_20000;
var income_20001to50000;
var income_50001to100000;
var income_100001to150000;
var income_150001to200000;
var income_Morethan200000;
var income_Prefernottosay;
var Q10;
var hint_family_income;
var heightClock;
var Q_height_text;
var textbox_height;
var height_hint;
var Q11;
var weightClock;
var Q_weight_text;
var textbox_weight;
var weight_hint;
var Q12;
var waistlineClock;
var Q_waistline_text;
var textbox_waistline;
var waistline_hint;
var Q13;
var ever_drink_alcoholClock;
var Q_ever_drink_alcohol;
var ever_drink_alcohol_yes;
var ever_drink_alcohol_no;
var Q14;
var last_drink_timeClock;
var Q_last_drink_time;
var last_drink_time_30days;
var last_drink_time_in12mons;
var last_drink_time_over12mons;
var last_drink_time_never;
var Q15;
var drink_freq_12mo_2Clock;
var Q_drink_freq_12mo;
var drink_freq_12mo_Everyday;
var drink_freq_12mo_Severaltimesaweek;
var drink_freq_12mo_Severaltimesamonth;
var drink_freq_12mo_Rarely;
var drink_freq_12mo_Never;
var Q16;
var drink_amount_12moClock;
var Q_drink_amount_12mo;
var drink_amount__12mo_0glass;
var drink_amount_12mo_1glass;
var drink_amount_12mo_2glass;
var drink_amount_12mo_3glasses;
var drink_amount_12mo_4glasses;
var drink_amount_12mo_5glassesmore;
var Q17;
var ever_smokeClock;
var Q_ever_smoke;
var never_smoke;
var before_smoke;
var still_smoke;
var Q18;
var start_smoke_ageClock;
var Q_start_smoke_age;
var textbox_start_smoke_age;
var Q19;
var hit_star_smoke_age;
var cigs_hint;
var cigs_per_dayClock;
var Q_cigs_per_day;
var Q20;
var cigs_never;
var cigs_year;
var cigs_month;
var cigs_week;
var cigs_everyday1;
var cigs_everyday5;
var cigs_everyday10;
var cigs_everyday20;
var cigs_everyday_over21;
var self_health_statusClock;
var Q_self_health_status;
var self_health_status_Verygood;
var self_health_status_Good;
var self_health_status_Average;
var self_health_status_Poor;
var self_health_status_Verypoor;
var Q21;
var hearing_statusClock;
var Q_hearing_status;
var hearing_NO;
var hearing_YES;
var Q22;
var music_trainingClock;
var Q_music_training;
var music_training_YES;
var music_training_NO;
var Q23;
var hint_music_training;
var years_musicClock;
var Q_training_years;
var hint_training_years;
var textbox_training_years;
var Q24;
var enter_hint_6;
var current_practiceClock;
var Q_current_practice;
var current_practice_YES;
var current_practice_NO;
var Q25;
var PHQ9_introClock;
var PHQ9_intro_image;
var key_resp_4;
var PHQ_9Clock;
var PHQ_9QuestionText;
var PHQ_9questionslide;
var Q26toQ34;
var warningskip;
var loneliness_introClock;
var loneliness_intropic;
var key_resp_15;
var lonelinessClock;
var Loneliness_Q;
var Loneliness_questionslide;
var Q35toQ42;
var warningskip2;
var BPSQI_introClock;
var BPSQI_intro_image;
var key_resp_5;
var B_PSQI_Q1_BedTimeClock;
var Q1_BedTime;
var textbox_Q1Bedtime;
var enter_hint;
var Q43;
var B_PSQI_Q2_WakeTimeClock;
var Q2_WakeTime;
var textbox_Q2WakeTime;
var enter_hint_2;
var Q44;
var B_PSQI_Q3_SleepLatencyClock;
var Q3_SleepLatency;
var textbox_Q3SleepLatency;
var enter_hint_3;
var Q45;
var B_PSQI_Q4_ActualSleepClock;
var Q4_ActualSleep;
var textbox_Q4ActualSleep;
var hint_sleep;
var enter_hint_4;
var Q46;
var B_PSQI5Clock;
var B_PSQIquestionText;
var B_PSQIquestionslide;
var Q47;
var warningskip2_2;
var B_PSQI6Clock;
var B_PSQIquestionText6;
var B_PSQIquestionslide6;
var Q48;
var warningskip2_3;
var BMRQ_introClock;
var BMRQ_intro_image;
var key_resp_7;
var BMRQClock;
var BMRQ_questionText;
var BMRQ_slider;
var Q49toQ68;
var warningskip2_4;
var ATAI_introClock;
var ATAI_intro_image;
var key_resp_9;
var ATAI_QClock;
var ATAI_QuestionText_2;
var ATAIquestionslide_2;
var Q69toQ73_2;
var warningskip2_5;
var BSSS4_introClock;
var BSSS4_intro_image;
var key_resp_10;
var BSSSClock;
var BSSS_questiontext;
var BSSS_questionslide;
var Q74toQ81;
var warningskip2_6;
var uncertainty_introClock;
var uncertainty_image;
var key_resp_16;
var uncertaintyClock;
var uncertainty_questionText;
var uncertainty_slider;
var Q82toQ93;
var warningskip2_7;
var BPAAT_introClock;
var BPAAT_intro_image;
var key_resp_11;
var BPAAT1Clock;
var BPAAT_questiontext1;
var BPAATquestionslide1;
var Q94;
var warningskip2_8;
var BPAAT2Clock;
var BPAAT_questiontext2;
var BPAATquestionslide2;
var Q95;
var warningskip2_9;
var finishQUESTION_introClock;
var finish_questions_image;
var resp_2;
var instructionsClock;
var background;
var resp;
var reset_balloonClock;
var practice_trialClock;
var practice_bg;
var practice_bankButton;
var bankedEarnings;
var balloonEarnings;
var bankedText;
var lastBalloonEarnings;
var thisBalloonEarnings;
var practice_reminder;
var practice_balloonValTxt;
var practice_bankedTxt;
var balloonSize;
var balloonMsgHeight;
var practice_balloonBody;
var practice_trialcount;
var practice_feedbackClock;
var practice_background_3;
var feedbackText;
var practice_feedbacktxt;
var practice_bankedTxt_2;
var practice_reminder_2;
var practice_trialcount_2;
var practice_finalScoreClock;
var practice_background_4;
var practice_scoremsg;
var text;
var key_resp;
var resetmoneypracticeClock;
var comprehension_checkClock;
var understand_2;
var key_resp_comprehension;
var begin_formalClock;
var formal_begain;
var bart_formal_begin;
var resetmoneyClock;
var trialClock;
var background_2;
var bankButton;
var reminder;
var balloonValTxt;
var bankedTxt;
var balloonBody;
var trialcount;
var feedbackClock;
var background_3;
var feedbacktxt;
var bankedTxt_2;
var balloonValTxt_2;
var reminder_2;
var trialcount_2;
var finalScoreClock;
var background_4;
var scoremsg;
var finished_bart;
var instruction_fishClock;
var background_fish;
var instructions_txt_fish;
var start_button_fish;
var trial_fishClock;
var instruct_fish;
var lake1;
var lake2;
var lake3;
var mouse;
var rod;
var lake1_wins;
var lake2_wins;
var lake3_wins;
var nfish;
var fishcountim;
var fishcount;
var fish_trial_index;
var fishTrialDisplay;
var feedback_fishClock;
var fb_txtbox;
var fb_image;
var fishcountim_2;
var fishcount_2;
var end_fishingClock;
var background_7;
var exit_button;
var textbox_end;
var text_hint;
var datauploadClock;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Welcome_chinese"
  Welcome_chineseClock = new util.Clock();
  welcime_chinese_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'welcime_chinese_image', units : undefined, 
    image : 'intro/EXP_intro_chinese.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.3, 0.68],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp_13 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Gender"
  GenderClock = new util.Clock();
  Q_gender_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q_gender_text',
    text: '1.您的性别是？',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], draggable: false, height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  gender_female_button = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'gender_female_button',
    text: '女',
    font: 'Arial',
    pos: [0, 0.2],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  gender_female_button.clock = new util.Clock();
  
  gender_male_button = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'gender_male_button',
    text: '男',
    font: 'Arial',
    pos: [0, 0.05],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  gender_male_button.clock = new util.Clock();
  
  gender_nonbinary_button = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'gender_nonbinary_button',
    text: '非二元/跨性别者',
    font: 'Arial',
    pos: [0, (- 0.1)],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  gender_nonbinary_button.clock = new util.Clock();
  
  gender_prefernot_button = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'gender_prefernot_button',
    text: '不愿透露',
    font: 'Arial',
    pos: [0, (- 0.25)],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -4,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  gender_prefernot_button.clock = new util.Clock();
  
  Q1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q1',
    text: '第 1 题，共 95 题\n',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "Age"
  AgeClock = new util.Clock();
  Q_age_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q_age_text',
    text: '2.您的年龄是？\n(若23岁，请填入“23”)',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.35], draggable: false, height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  textbox_age = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_age',
    text: '',
    placeholder: '输入4 位数',
    font: 'Arial',
    pos: [0, 0.05], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.6, 0.1],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  enter_hint_age = new visual.TextStim({
    win: psychoJS.window,
    name: 'enter_hint_age',
    text: '回答完毕后，请按“回车”键（Enter）进入下一题。\n未完成答题之前，请小心，避免误触回车键（Enter)，导致题目被跳过！！！',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.1)], draggable: false, height: 0.03,  wrapWidth: 1.9, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  Q2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q2',
    text: '第 2 题，共 95 题\n',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "relationship_status"
  relationship_statusClock = new util.Clock();
  Q_relationship_status = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q_relationship_status',
    text: '3.您的当前婚恋状况是?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.35], draggable: false, height: 0.05,  wrapWidth: 2.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  relationship_single = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'relationship_single',
    text: '单身',
    font: 'Arial',
    pos: [0, 0.2],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  relationship_single.clock = new util.Clock();
  
  relationship_Inarelationship = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'relationship_Inarelationship',
    text: '恋爱中',
    font: 'Arial',
    pos: [0, 0.05],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  relationship_Inarelationship.clock = new util.Clock();
  
  relationship_Married = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'relationship_Married',
    text: '已婚',
    font: 'Arial',
    pos: [0, (- 0.1)],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  relationship_Married.clock = new util.Clock();
  
  relationship_Divorced = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'relationship_Divorced',
    text: '离异或丧偶',
    font: 'Arial',
    pos: [0, (- 0.25)],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -4,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  relationship_Divorced.clock = new util.Clock();
  
  Q3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q3',
    text: '第 3 题，共 95 题\n',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "nationality"
  nationalityClock = new util.Clock();
  nationality_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'nationality_text',
    text: '4.您目前持有的国籍是？\n(请根据护照所属国籍填写)',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.35], draggable: false, height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  nationality_china = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'nationality_china',
    text: '中国',
    font: 'Arial',
    pos: [0, 0.2],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  nationality_china.clock = new util.Clock();
  
  nationality_malaysia = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'nationality_malaysia',
    text: '马来西亚',
    font: 'Arial',
    pos: [0, 0.05],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  nationality_malaysia.clock = new util.Clock();
  
  nationality_other = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'nationality_other',
    text: '其它',
    font: 'Arial',
    pos: [0, (- 0.1)],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  nationality_other.clock = new util.Clock();
  
  nationality_prefernot = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'nationality_prefernot',
    text: '不愿透露',
    font: 'Arial',
    pos: [0, (- 0.25)],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -4,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  nationality_prefernot.clock = new util.Clock();
  
  Q4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q4',
    text: '第 4 题，共 95 题\n',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "Education"
  EducationClock = new util.Clock();
  Q_edu_level_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q_edu_level_text',
    text: '5.您的受教育程度是？\n（请根据您已完成的最高教育阶段填写，无论是否获得学位）',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.35], draggable: false, height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  edu_btn_1 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'edu_btn_1',
    text: '小学及以下',
    font: 'Arvo',
    pos: [(- 0.4), 0.2],
    size: [0.6, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  edu_btn_1.clock = new util.Clock();
  
  edu_btn_2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'edu_btn_2',
    text: '初中',
    font: 'Arial',
    pos: [0.4, 0.2],
    size: [0.6, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  edu_btn_2.clock = new util.Clock();
  
  edu_btn_3 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'edu_btn_3',
    text: '高中（含中专，职高等）',
    font: 'Arial',
    pos: [(- 0.4), 0.05],
    size: [0.6, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  edu_btn_3.clock = new util.Clock();
  
  edu_btn_4 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'edu_btn_4',
    text: '大专/diploma',
    font: 'Arvo',
    pos: [0.4, 0.05],
    size: [0.6, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -4,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  edu_btn_4.clock = new util.Clock();
  
  edu_btn_5 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'edu_btn_5',
    text: '本科/degree',
    font: 'Arial',
    pos: [(- 0.4), (- 0.1)],
    size: [0.6, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -5,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  edu_btn_5.clock = new util.Clock();
  
  edu_btn_6 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'edu_btn_6',
    text: '硕士及以上',
    font: 'Arial',
    pos: [0.4, (- 0.1)],
    size: [0.6, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -6,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  edu_btn_6.clock = new util.Clock();
  
  Q5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q5',
    text: '第 5 题，共 95 题\n',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -7.0 
  });
  
  // Initialize components for Routine "religion"
  religionClock = new util.Clock();
  Q_religion_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q_religion_text',
    text: '6.您主要信仰的宗教是？',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.35], draggable: false, height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  religion_btn_1 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'religion_btn_1',
    text: '佛教',
    font: 'Arial',
    pos: [(- 0.4), 0.25],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  religion_btn_1.clock = new util.Clock();
  
  religion_btn_2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'religion_btn_2',
    text: '基督教',
    font: 'Arial',
    pos: [0.4, 0.25],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  religion_btn_2.clock = new util.Clock();
  
  religion_btn_3 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'religion_btn_3',
    text: '伊斯兰教',
    font: 'Arial',
    pos: [(- 0.4), 0.1],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  religion_btn_3.clock = new util.Clock();
  
  religion_btn_4 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'religion_btn_4',
    text: '印度教',
    font: 'Arial',
    pos: [0.4, 0.1],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -4,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  religion_btn_4.clock = new util.Clock();
  
  religion_btn_5 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'religion_btn_5',
    text: '道教 / 民间信仰',
    font: 'Arial',
    pos: [(- 0.4), (- 0.05)],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -5,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  religion_btn_5.clock = new util.Clock();
  
  religion_btn_6 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'religion_btn_6',
    text: '无宗教信仰',
    font: 'Arial',
    pos: [0.4, (- 0.05)],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -6,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  religion_btn_6.clock = new util.Clock();
  
  religion_btn_7 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'religion_btn_7',
    text: '其它',
    font: 'Arial',
    pos: [(- 0.4), (- 0.2)],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -7,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  religion_btn_7.clock = new util.Clock();
  
  Q6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q6',
    text: '第 6 题，共 95 题\n',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -8.0 
  });
  
  // Initialize components for Routine "ethnicity"
  ethnicityClock = new util.Clock();
  Q_ethnicity_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q_ethnicity_text',
    text: '7.您属于哪个民族或族群？',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.35], draggable: false, height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  ethnicity_btn_1 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'ethnicity_btn_1',
    text: '汉族',
    font: 'Arial',
    pos: [0, 0.2],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  ethnicity_btn_1.clock = new util.Clock();
  
  ethnicity_btn_2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'ethnicity_btn_2',
    text: '少数民族',
    font: 'Arvo',
    pos: [0, 0.05],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  ethnicity_btn_2.clock = new util.Clock();
  
  ethnicity_3 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'ethnicity_3',
    text: '其他',
    font: 'Arial',
    pos: [0, (- 0.1)],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  ethnicity_3.clock = new util.Clock();
  
  Q7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q7',
    text: '第 7 题，共 95 题\n',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "HouseholdStructure"
  HouseholdStructureClock = new util.Clock();
  householdstructure_question_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'householdstructure_question_text',
    text: '8.您目前与哪些家庭成员共同居住？',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.35], draggable: false, height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  textbox_household = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_household',
    text: '',
    placeholder: '请输入...',
    font: 'Arial',
    pos: [0, (- 0.1)], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.5, 0.1],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  textbox_ABCDE = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_ABCDE',
    text: 'A. 配偶\nB. 子女\nC. 父母\nD. 祖父母\nE. 孙子女',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.3), 0.2], 
    draggable: false,
    letterHeight: 0.03,
    lineSpacing: 1.0,
    size: [0.7, 1.1],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: 1.0,
    padding: 0.0,
    alignment: 'top-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'top-left',
    depth: -2.0 
  });
  
  textbox_FGHI = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_FGHI',
    text: 'F. 兄弟姐妹\nG. 其它亲属 \nH. 非亲属（如朋友）\nI. 我独自居住\n\n',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0.2], 
    draggable: false,
    letterHeight: 0.03,
    lineSpacing: 1.0,
    size: [0.9, 1],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'top-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'top-left',
    depth: -3.0 
  });
  
  Q8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q8',
    text: '第 8 题，共 95 题\n',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  hint_household = new visual.TextStim({
    win: psychoJS.window,
    name: 'hint_household',
    text: '回答完毕后，请按“回车”键进入下一个问题。\n未完成答题之前，请小心，避免误触回车键（Enter)，导致题目被跳过！！！',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.35)], draggable: false, height: 0.03,  wrapWidth: 1.7, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -6.0 
  });
  
  hint_household1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'hint_household1',
    text: '（请勾选所有适用的选项，可多选，可单选；但如果您选择“我独自居住”，则请勿选择其他选项）\n请输入相应的字母，例如：A、C、E',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.03,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -7.0 
  });
  
  // Initialize components for Routine "occupation_type"
  occupation_typeClock = new util.Clock();
  Q_occupation = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q_occupation',
    text: '9.您目前的主要职业是？',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], draggable: false, height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  occupation_Education = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'occupation_Education',
    text: '教育/培训行业',
    font: 'Arial',
    pos: [(- 0.4), 0.3],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  occupation_Education.clock = new util.Clock();
  
  occupation_Healthcare = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'occupation_Healthcare',
    text: '医疗/护理/卫生行业',
    font: 'Arial',
    pos: [0.4, 0.3],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  occupation_Healthcare.clock = new util.Clock();
  
  occupation_Government = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'occupation_Government',
    text: '公共行政/政府/NGO',
    font: 'Arial',
    pos: [(- 0.4), 0.15],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  occupation_Government.clock = new util.Clock();
  
  occupation_Business = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'occupation_Business',
    text: '企业/商业/销售行业',
    font: 'Arial',
    pos: [0.4, 0.15],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -4,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  occupation_Business.clock = new util.Clock();
  
  occupation_Selfemployed = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'occupation_Selfemployed',
    text: '自由职业/个体经营者',
    font: 'Arial',
    pos: [(- 0.4), 0],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -5,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  occupation_Selfemployed.clock = new util.Clock();
  
  occupation_Homemaker = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'occupation_Homemaker',
    text: '家务劳动者/家庭照护者',
    font: 'Arial',
    pos: [0.4, 0],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -6,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  occupation_Homemaker.clock = new util.Clock();
  
  occupation_Student = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'occupation_Student',
    text: '学生',
    font: 'Arial',
    pos: [(- 0.4), (- 0.15)],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -7,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  occupation_Student.clock = new util.Clock();
  
  occupation_Unemployed = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'occupation_Unemployed',
    text: '无业/临时工/寻找工作中',
    font: 'Arial',
    pos: [0.4, (- 0.15)],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -8,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  occupation_Unemployed.clock = new util.Clock();
  
  occupation_Other = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'occupation_Other',
    text: '其它',
    font: 'Arial',
    pos: [0.0, (- 0.3)],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -9,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  occupation_Other.clock = new util.Clock();
  
  occupation_retired = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'occupation_retired',
    text: '退休人员',
    font: 'Arial',
    pos: [0.0, (- 0.4)],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -10,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  occupation_retired.clock = new util.Clock();
  
  Q9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q9',
    text: '第 9 题，共 95 题\n',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -11.0 
  });
  
  // Initialize components for Routine "family_income"
  family_incomeClock = new util.Clock();
  Q_family_income = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q_family_income',
    text: '10.您家庭上一年度的总收入约为多少？',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], draggable: false, height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  income_20000 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'income_20000',
    text: '20,000 及以下',
    font: 'Arial',
    pos: [(- 0.4), 0.2],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  income_20000.clock = new util.Clock();
  
  income_20001to50000 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'income_20001to50000',
    text: '20,001 – 50,000',
    font: 'Arial',
    pos: [0.4, 0.2],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  income_20001to50000.clock = new util.Clock();
  
  income_50001to100000 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'income_50001to100000',
    text: '50,001 – 100,000',
    font: 'Arial',
    pos: [(- 0.4), 0.05],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  income_50001to100000.clock = new util.Clock();
  
  income_100001to150000 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'income_100001to150000',
    text: '100,001 – 150,000',
    font: 'Arial',
    pos: [0.4, 0.05],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -4,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  income_100001to150000.clock = new util.Clock();
  
  income_150001to200000 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'income_150001to200000',
    text: '150,001 – 200,000',
    font: 'Arial',
    pos: [(- 0.4), (- 0.1)],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -5,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  income_150001to200000.clock = new util.Clock();
  
  income_Morethan200000 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'income_Morethan200000',
    text: '超过 200,000',
    font: 'Arial',
    pos: [0.4, (- 0.1)],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -6,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  income_Morethan200000.clock = new util.Clock();
  
  income_Prefernottosay = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'income_Prefernottosay',
    text: '不愿透露',
    font: 'Arial',
    pos: [(- 0.4), (- 0.25)],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -7,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  income_Prefernottosay.clock = new util.Clock();
  
  Q10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q10',
    text: '第 10 题，共 95 题',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -8.0 
  });
  
  hint_family_income = new visual.TextStim({
    win: psychoJS.window,
    name: 'hint_family_income',
    text: '（请根据您的国籍填写当地币种数额）',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.03,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -9.0 
  });
  
  // Initialize components for Routine "height"
  heightClock = new util.Clock();
  Q_height_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q_height_text',
    text: '11.您的身高是（厘米CM）？例如：165',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.35], draggable: false, height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  textbox_height = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_height',
    text: '',
    placeholder: '请输入...',
    font: 'Arial',
    pos: [0, 0.2], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.5, 0.06],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  height_hint = new visual.TextStim({
    win: psychoJS.window,
    name: 'height_hint',
    text: '此项目仅用于计算健康指标，而非用于身份识别。\n回答完毕后，请按“回车”键进入下一题。\n未完成答题之前，请小心，避免误触回车键（Enter)，导致题目被跳过！！！',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.25)], draggable: false, height: 0.03,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  Q11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q11',
    text: '第 11 题，共 95 题',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "weight"
  weightClock = new util.Clock();
  Q_weight_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q_weight_text',
    text: '12.您的体重是（千克kg）？例如：55\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.35], draggable: false, height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  textbox_weight = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_weight',
    text: '',
    placeholder: '请输入...',
    font: 'Arial',
    pos: [0, 0.2], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.7, 0.06],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  weight_hint = new visual.TextStim({
    win: psychoJS.window,
    name: 'weight_hint',
    text: '此项目仅用于计算健康指标，而非用于身份识别。\n回答完毕后，请按“回车”键进入下一题。\n未完成答题之前，请小心，避免误触回车键（Enter)，导致题目被跳过！！！',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.25)], draggable: false, height: 0.03,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  Q12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q12',
    text: '第 12 题，共 95 题\n',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "waistline"
  waistlineClock = new util.Clock();
  Q_waistline_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q_waistline_text',
    text: '13.你的腰围是多少厘米(CM)？(请填写，例如，90）',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.35], draggable: false, height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  textbox_waistline = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_waistline',
    text: '',
    placeholder: '请输入...',
    font: 'Arial',
    pos: [0, 0.2], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.7, 0.06],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  waistline_hint = new visual.TextStim({
    win: psychoJS.window,
    name: 'waistline_hint',
    text: '此项目仅用于计算健康指标，而非用于身份识别。\n回答完成后，请按回车键到下一题.\n未完成答题之前，请小心，避免误触回车键（Enter)，导致题目被跳过！！！',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.1)], draggable: false, height: 0.03,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  Q13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q13',
    text: '第 13 题，共 95 题',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "ever_drink_alcohol"
  ever_drink_alcoholClock = new util.Clock();
  Q_ever_drink_alcohol = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q_ever_drink_alcohol',
    text: '14.曾经喝过任何种类的酒精\n（例如：米酒、黄酒、红酒等含有酒精饮料）',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  ever_drink_alcohol_yes = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'ever_drink_alcohol_yes',
    text: '是',
    font: 'Arial',
    pos: [0, 0.1],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  ever_drink_alcohol_yes.clock = new util.Clock();
  
  ever_drink_alcohol_no = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'ever_drink_alcohol_no',
    text: '否',
    font: 'Arial',
    pos: [0, (- 0.1)],
    size: [1, (- 0.05)],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  ever_drink_alcohol_no.clock = new util.Clock();
  
  Q14 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q14',
    text: '第 14 题，共 95 题',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "last_drink_time"
  last_drink_timeClock = new util.Clock();
  Q_last_drink_time = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q_last_drink_time',
    text: '15.您最近一次喝酒是在什么时候？',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.35], draggable: false, height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  last_drink_time_30days = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'last_drink_time_30days',
    text: '过去30天内',
    font: 'Arial',
    pos: [0, 0.2],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  last_drink_time_30days.clock = new util.Clock();
  
  last_drink_time_in12mons = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'last_drink_time_in12mons',
    text: '过去12个月内',
    font: 'Arial',
    pos: [0, 0.05],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  last_drink_time_in12mons.clock = new util.Clock();
  
  last_drink_time_over12mons = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'last_drink_time_over12mons',
    text: '超过12个月前',
    font: 'Arial',
    pos: [0, (- 0.1)],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  last_drink_time_over12mons.clock = new util.Clock();
  
  last_drink_time_never = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'last_drink_time_never',
    text: '从未喝过酒',
    font: 'Arial',
    pos: [0, (- 0.25)],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -4,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  last_drink_time_never.clock = new util.Clock();
  
  Q15 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q15',
    text: '第 15 题，共 95 题',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "drink_freq_12mo_2"
  drink_freq_12mo_2Clock = new util.Clock();
  Q_drink_freq_12mo = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q_drink_freq_12mo',
    text: '16.在过去12个月中，您通常多久喝一次酒？',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], draggable: false, height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  drink_freq_12mo_Everyday = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'drink_freq_12mo_Everyday',
    text: '每天',
    font: 'Arial',
    pos: [0, 0.3],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  drink_freq_12mo_Everyday.clock = new util.Clock();
  
  drink_freq_12mo_Severaltimesaweek = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'drink_freq_12mo_Severaltimesaweek',
    text: '每周几次',
    font: 'Arial',
    pos: [0, 0.15],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  drink_freq_12mo_Severaltimesaweek.clock = new util.Clock();
  
  drink_freq_12mo_Severaltimesamonth = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'drink_freq_12mo_Severaltimesamonth',
    text: '每月几次',
    font: 'Arial',
    pos: [0, 0],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  drink_freq_12mo_Severaltimesamonth.clock = new util.Clock();
  
  drink_freq_12mo_Rarely = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'drink_freq_12mo_Rarely',
    text: '很少',
    font: 'Arial',
    pos: [0, (- 0.15)],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -4,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  drink_freq_12mo_Rarely.clock = new util.Clock();
  
  drink_freq_12mo_Never = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'drink_freq_12mo_Never',
    text: '从不',
    font: 'Arial',
    pos: [0, (- 0.3)],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -5,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  drink_freq_12mo_Never.clock = new util.Clock();
  
  Q16 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q16',
    text: '第 16 题，共 95 题\n',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -6.0 
  });
  
  // Initialize components for Routine "drink_amount_12mo"
  drink_amount_12moClock = new util.Clock();
  Q_drink_amount_12mo = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q_drink_amount_12mo',
    text: '17.在过去12个月中，您每次通常喝多少杯酒？',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], draggable: false, height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  drink_amount__12mo_0glass = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'drink_amount__12mo_0glass',
    text: '0杯',
    font: 'Arial',
    pos: [0, 0.3],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  drink_amount__12mo_0glass.clock = new util.Clock();
  
  drink_amount_12mo_1glass = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'drink_amount_12mo_1glass',
    text: '1杯',
    font: 'Arial',
    pos: [0, 0.17],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  drink_amount_12mo_1glass.clock = new util.Clock();
  
  drink_amount_12mo_2glass = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'drink_amount_12mo_2glass',
    text: '2杯',
    font: 'Arial',
    pos: [0, 0.02],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  drink_amount_12mo_2glass.clock = new util.Clock();
  
  drink_amount_12mo_3glasses = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'drink_amount_12mo_3glasses',
    text: '3杯',
    font: 'Arial',
    pos: [0, (- 0.13)],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -4,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  drink_amount_12mo_3glasses.clock = new util.Clock();
  
  drink_amount_12mo_4glasses = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'drink_amount_12mo_4glasses',
    text: '4杯',
    font: 'Arial',
    pos: [0, (- 0.27)],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -5,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  drink_amount_12mo_4glasses.clock = new util.Clock();
  
  drink_amount_12mo_5glassesmore = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'drink_amount_12mo_5glassesmore',
    text: '5杯或更多',
    font: 'Arial',
    pos: [0, (- 0.4)],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -6,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  drink_amount_12mo_5glassesmore.clock = new util.Clock();
  
  Q17 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q17',
    text: '第 17 题，共 95 题',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -7.0 
  });
  
  // Initialize components for Routine "ever_smoke"
  ever_smokeClock = new util.Clock();
  Q_ever_smoke = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q_ever_smoke',
    text: '18.您目前的吸烟情况是：',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], draggable: false, height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  never_smoke = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'never_smoke',
    text: '从未吸烟',
    font: 'Arial',
    pos: [0, 0.25],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  never_smoke.clock = new util.Clock();
  
  before_smoke = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'before_smoke',
    text: '过去吸过，但已戒烟',
    font: 'Arial',
    pos: [0, 0.05],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  before_smoke.clock = new util.Clock();
  
  still_smoke = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'still_smoke',
    text: '现在仍在吸烟',
    font: 'Arial',
    pos: [0, (- 0.15)],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  still_smoke.clock = new util.Clock();
  
  Q18 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q18',
    text: '第 18 题，共 95 题\n',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "start_smoke_age"
  start_smoke_ageClock = new util.Clock();
  Q_start_smoke_age = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q_start_smoke_age',
    text: '19.请填写你的吸烟史：',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  textbox_start_smoke_age = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_start_smoke_age',
    text: '',
    placeholder: '请输入数字...',
    font: 'Arial',
    pos: [0, (- 0.15)], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.6, 0.06],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  Q19 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q19',
    text: '第 19 题，共 95 题',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  hit_star_smoke_age = new visual.TextStim({
    win: psychoJS.window,
    name: 'hit_star_smoke_age',
    text: '回答完成后，请按回车键到下一题\n未完成答题之前，请小心，避免误触回车键（Enter)，导致题目被跳过！！！',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], draggable: false, height: 0.03,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  cigs_hint = new visual.TextBox({
    win: psychoJS.window,
    name: 'cigs_hint',
    text: '- 如果您现在仍在吸烟，请填您大约几岁开始形成规律性吸烟习惯，以及目  前已经吸烟多少年了？(填写，例如：20岁；2年）\n\n- 如果您过去吸过但已戒烟，请填写您累计吸烟多少年？\n\n- 如果您从未吸烟。请填写”无“',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), 0.15], 
    draggable: false,
    letterHeight: 0.03,
    lineSpacing: 1.0,
    size: [1, 1.1],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: 1.0,
    padding: 0.0,
    alignment: 'top-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'top-left',
    depth: -5.0 
  });
  
  // Initialize components for Routine "cigs_per_day"
  cigs_per_dayClock = new util.Clock();
  Q_cigs_per_day = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q_cigs_per_day',
    text: '20.在您近一年的吸烟情况中，哪一项最符合您？',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], draggable: false, height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  Q20 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q20',
    text: '第 20 题，共 95 题',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  cigs_never = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'cigs_never',
    text: '近一年未吸烟',
    font: 'Arial',
    pos: [(- 0.4), 0.25],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  cigs_never.clock = new util.Clock();
  
  cigs_year = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'cigs_year',
    text: '一年少于5次（非常偶尔，如聚会或压力大时）',
    font: 'Arial',
    pos: [0.4, 0.25],
    size: [0.7, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  cigs_year.clock = new util.Clock();
  
  cigs_month = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'cigs_month',
    text: '每月1-3次',
    font: 'Arial',
    pos: [(- 0.4), 0.1],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -4,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  cigs_month.clock = new util.Clock();
  
  cigs_week = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'cigs_week',
    text: '每周1-3次',
    font: 'Arial',
    pos: [0.4, 0.1],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -5,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  cigs_week.clock = new util.Clock();
  
  cigs_everyday1 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'cigs_everyday1',
    text: '几乎每天吸，但少于一支',
    font: 'Arial',
    pos: [(- 0.4), (- 0.05)],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -6,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  cigs_everyday1.clock = new util.Clock();
  
  cigs_everyday5 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'cigs_everyday5',
    text: '每天1-5支',
    font: 'Arial',
    pos: [0.4, (- 0.05)],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -7,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  cigs_everyday5.clock = new util.Clock();
  
  cigs_everyday10 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'cigs_everyday10',
    text: '每天6-10支',
    font: 'Arial',
    pos: [(- 0.4), (- 0.2)],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -8,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  cigs_everyday10.clock = new util.Clock();
  
  cigs_everyday20 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'cigs_everyday20',
    text: '每天11-20支',
    font: 'Arial',
    pos: [0.4, (- 0.2)],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -9,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  cigs_everyday20.clock = new util.Clock();
  
  cigs_everyday_over21 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'cigs_everyday_over21',
    text: '每天21支及以上',
    font: 'Arial',
    pos: [0, (- 0.35)],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -10,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  cigs_everyday_over21.clock = new util.Clock();
  
  // Initialize components for Routine "self_health_status"
  self_health_statusClock = new util.Clock();
  Q_self_health_status = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q_self_health_status',
    text: '21.您觉得自己现在的健康状况如何？',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], draggable: false, height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  self_health_status_Verygood = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'self_health_status_Verygood',
    text: '很好',
    font: 'Arial',
    pos: [0, 0.3],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  self_health_status_Verygood.clock = new util.Clock();
  
  self_health_status_Good = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'self_health_status_Good',
    text: '好',
    font: 'Arial',
    pos: [0, 0.15],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  self_health_status_Good.clock = new util.Clock();
  
  self_health_status_Average = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'self_health_status_Average',
    text: '一般',
    font: 'Arial',
    pos: [0, 0],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  self_health_status_Average.clock = new util.Clock();
  
  self_health_status_Poor = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'self_health_status_Poor',
    text: '不好',
    font: 'Arial',
    pos: [0, (- 0.15)],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -4,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  self_health_status_Poor.clock = new util.Clock();
  
  self_health_status_Verypoor = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'self_health_status_Verypoor',
    text: '很不好',
    font: 'Arial',
    pos: [0, (- 0.3)],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -5,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  self_health_status_Verypoor.clock = new util.Clock();
  
  Q21 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q21',
    text: '第 21 题，共 95 题\n',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -6.0 
  });
  
  // Initialize components for Routine "hearing_status"
  hearing_statusClock = new util.Clock();
  Q_hearing_status = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q_hearing_status',
    text: '22.听力状况',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  hearing_NO = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'hearing_NO',
    text: '无（无医学诊断的听力损失、不佩戴助听器、无持续耳鸣）',
    font: 'Arial',
    pos: [0, 0.1],
    size: [1.1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.025,
    bold: true,
    italic: false,
  });
  hearing_NO.clock = new util.Clock();
  
  hearing_YES = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'hearing_YES',
    text: '有（如“轻度听力下降”“佩戴助听器”“持续耳鸣”等）',
    font: 'Arial',
    pos: [0, (- 0.1)],
    size: [1.1, (- 0.05)],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.025,
    bold: true,
    italic: false,
  });
  hearing_YES.clock = new util.Clock();
  
  Q22 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q22',
    text: '第 22 题，共 95 题\n',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "music_training"
  music_trainingClock = new util.Clock();
  Q_music_training = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q_music_training',
    text: '23.您是否接受过正规音乐培训？',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  music_training_YES = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'music_training_YES',
    text: '是',
    font: 'Arial',
    pos: [0, (- 0.1)],
    size: [1.1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  music_training_YES.clock = new util.Clock();
  
  music_training_NO = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'music_training_NO',
    text: '否',
    font: 'Arial',
    pos: [0, (- 0.25)],
    size: [1.1, (- 0.05)],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  music_training_NO.clock = new util.Clock();
  
  Q23 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q23',
    text: '第 23 题，共 95 题\n',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  hint_music_training = new visual.TextBox({
    win: psychoJS.window,
    name: 'hint_music_training',
    text: '（例如：\n• 作为音乐专业在音乐学院/艺术学校学习；\n• 或在琴行/培训中心跟随持证老师系统学习，并参加中国音乐学院社会艺术考级、ABRSM（英国皇家音乐学院联合考级）、Trinity（英国圣三一考级）等获得相应证书；）',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.3), 0.25], 
    draggable: false,
    letterHeight: 0.03,
    lineSpacing: 1.0,
    size: [0.8, 1.1],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: 1.0,
    padding: 0.0,
    alignment: 'top-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'top-left',
    depth: -4.0 
  });
  
  // Initialize components for Routine "years_music"
  years_musicClock = new util.Clock();
  Q_training_years = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q_training_years',
    text: '24.若第23题选“是”,接受过音乐培训，请填写累计接受上述培训的年限\n（向下取整，单位：年 ，例如：10年）\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.045,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  hint_training_years = new visual.TextStim({
    win: psychoJS.window,
    name: 'hint_training_years',
    text: '若第23题选“否”，未接受过音乐培训，请填写“无”.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.15], draggable: false, height: 0.03,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  textbox_training_years = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_training_years',
    text: '',
    placeholder: '输入数字...',
    font: 'Arial',
    pos: [0, (- 0.2)], 
    draggable: false,
    letterHeight: 0.025,
    lineSpacing: 1.0,
    size: [0.5, 0.06],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  Q24 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q24',
    text: '第 24 题，共 95 题\n',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  enter_hint_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'enter_hint_6',
    text: '回答完毕后，请按回车键继续。\n未完成答题之前，请小心，避免误触回车键（Enter)，导致题目被跳过！！！',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], draggable: false, height: 0.03,  wrapWidth: 1.7, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "current_practice"
  current_practiceClock = new util.Clock();
  Q_current_practice = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q_current_practice',
    text: '25.您目前是否每周至少练习一次乐器/声乐，或在机构/学校担任音乐教师\n并定期授课，或定期参与乐队/合唱团排练与演出？',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.045,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  current_practice_YES = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'current_practice_YES',
    text: '是',
    font: 'Arial',
    pos: [0, 0.1],
    size: [1.1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  current_practice_YES.clock = new util.Clock();
  
  current_practice_NO = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'current_practice_NO',
    text: '否',
    font: 'Arial',
    pos: [0, (- 0.1)],
    size: [1.1, (- 0.05)],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  current_practice_NO.clock = new util.Clock();
  
  Q25 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q25',
    text: '第 25 题，共 95 题\n',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "PHQ9_intro"
  PHQ9_introClock = new util.Clock();
  PHQ9_intro_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'PHQ9_intro_image', units : undefined, 
    image : 'intro/EXP_PHQ9_intro_chinese.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.4, 0.32],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "PHQ_9"
  PHQ_9Clock = new util.Clock();
  PHQ_9QuestionText = new visual.TextStim({
    win: psychoJS.window,
    name: 'PHQ_9QuestionText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.35], draggable: false, height: 0.05,  wrapWidth: 1, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  PHQ_9questionslide = new visual.Slider({
    win: psychoJS.window, name: 'PHQ_9questionslide',
    startValue: undefined,
    size: [1.1, 0.05], pos: [0, 0], ori: 0, units: psychoJS.window.units,
    labels: ["\u6839\u672c\u6ca1\u6709", "\u6709\u51e0\u5929", "\u4e00\u534a\u4ee5\u4e0a\u7684\u5929\u6570", "\u51e0\u4e4e\u6bcf\u5929"], fontSize: 0.02, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('red'), lineColor: new util.Color('black'), 
    opacity: 1, fontFamily: 'Arial', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  Q26toQ34 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q26toQ34',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  warningskip = new visual.TextStim({
    win: psychoJS.window,
    name: 'warningskip',
    text: '请准确的点击“圆点”位置！！！\n若不小心点击到“空白区域”，系统会自动选择最近的“圆点”选项，随后自动跳转到下一题！！！\n不可返回再作答！',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.35)], draggable: false, height: 0.03,  wrapWidth: 1.8, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "loneliness_intro"
  loneliness_introClock = new util.Clock();
  loneliness_intropic = new visual.ImageStim({
    win : psychoJS.window,
    name : 'loneliness_intropic', units : undefined, 
    image : 'intro/EXP_loneliness_chinese_intro.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.4, 0.6],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp_15 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "loneliness"
  lonelinessClock = new util.Clock();
  Loneliness_Q = new visual.TextStim({
    win: psychoJS.window,
    name: 'Loneliness_Q',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.35], draggable: false, height: 0.05,  wrapWidth: 1, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  Loneliness_questionslide = new visual.Slider({
    win: psychoJS.window, name: 'Loneliness_questionslide',
    startValue: undefined,
    size: [1.1, 0.05], pos: [0, 0], ori: 0, units: psychoJS.window.units,
    labels: ["\u4ece\u4e0d", "\u5f88\u5c11", "\u6709\u65f6", "\u7ecf\u5e38"], fontSize: 0.02, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('red'), lineColor: new util.Color('black'), 
    opacity: 1, fontFamily: 'Arial', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  Q35toQ42 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q35toQ42',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  warningskip2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'warningskip2',
    text: '请准确的点击“圆点”位置！！！\n若不小心点击到“空白区域”，系统会自动选择最近的“圆点”选项，随后自动跳转到下一题！！！\n不可返回再作答！',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.35)], draggable: false, height: 0.03,  wrapWidth: 1.8, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "BPSQI_intro"
  BPSQI_introClock = new util.Clock();
  BPSQI_intro_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'BPSQI_intro_image', units : undefined, 
    image : 'intro/EXP_BPSQI_intro_chinese.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.4, 0.38],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "B_PSQI_Q1_BedTime"
  B_PSQI_Q1_BedTimeClock = new util.Clock();
  Q1_BedTime = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q1_BedTime',
    text: '43.近一个月，晚上上床睡觉的时间通常是几点钟？\n（注意：上床时间指的是你躺在床上准备入睡的时间，不是你实际入睡的时间。）\n(请填写，例如, 22:30)',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.04,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  textbox_Q1Bedtime = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_Q1Bedtime',
    text: '',
    placeholder: '请输入时间...',
    font: 'Arial',
    pos: [0, 0.1], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [1, 0.06],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: 'black',
    languageStyle: 'LTR',
    bold: true, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  enter_hint = new visual.TextStim({
    win: psychoJS.window,
    name: 'enter_hint',
    text: '回答完毕后，请按回车键继续。\n未完成答题之前，请小心，避免误触回车键（Enter)，导致题目被跳过！！！',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], draggable: false, height: 0.03,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  Q43 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q43',
    text: '第 43 题，共 95 题\n',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "B_PSQI_Q2_WakeTime"
  B_PSQI_Q2_WakeTimeClock = new util.Clock();
  Q2_WakeTime = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q2_WakeTime',
    text: '44. 近一个月，通常早上几点起床？ (请填写，例如, 07:00)',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.35], draggable: false, height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  textbox_Q2WakeTime = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_Q2WakeTime',
    text: '',
    placeholder: '请输入时间...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [1, 0.06],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: 'black',
    languageStyle: 'LTR',
    bold: true, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  enter_hint_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'enter_hint_2',
    text: '回答完毕后，请按回车键继续。\n未完成答题之前，请小心，避免误触回车键（Enter)，导致题目被跳过！！！',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], draggable: false, height: 0.03,  wrapWidth: 1.9, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  Q44 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q44',
    text: '第 44 题，共 95 题\n',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "B_PSQI_Q3_SleepLatency"
  B_PSQI_Q3_SleepLatencyClock = new util.Clock();
  Q3_SleepLatency = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q3_SleepLatency',
    text: '45.近一个月，每晚入睡通常需要多少分钟？\n(请填写数字，例如15分钟, 则填写15)\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.35], draggable: false, height: 0.05,  wrapWidth: 1.34, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  textbox_Q3SleepLatency = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_Q3SleepLatency',
    text: '',
    placeholder: '请输入时间...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [1, 0.06],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: 'black',
    languageStyle: 'LTR',
    bold: true, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  enter_hint_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'enter_hint_3',
    text: '回答完毕后，请按回车键继续。\n未完成答题之前，请小心，避免误触回车键（Enter)，导致题目被跳过！！！',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], draggable: false, height: 0.03,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  Q45 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q45',
    text: '第 45 题，共 95 题\n',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "B_PSQI_Q4_ActualSleep"
  B_PSQI_Q4_ActualSleepClock = new util.Clock();
  Q4_ActualSleep = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q4_ActualSleep',
    text: '46.近一个月，每夜通常实际睡眠多少小时？（不等于卧床时间）\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.35], draggable: false, height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  textbox_Q4ActualSleep = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_Q4ActualSleep',
    text: '',
    placeholder: '请输入小时数...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [1, 0.06],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: 'black',
    languageStyle: 'LTR',
    bold: true, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  hint_sleep = new visual.TextStim({
    win: psychoJS.window,
    name: 'hint_sleep',
    text: '※ 请估算您实际入睡的小时数，而非您在床上总共停留的时间。\n（请填写小时数，例如：7小时请填写7 ）\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.03,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  enter_hint_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'enter_hint_4',
    text: '回答完毕后，请按回车键继续。\n未完成答题之前，请小心，避免误触回车键（Enter)，导致题目被跳过！！！',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], draggable: false, height: 0.03,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  Q46 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q46',
    text: '第 46 题，共 95 题',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "B_PSQI5"
  B_PSQI5Clock = new util.Clock();
  B_PSQIquestionText = new visual.TextStim({
    win: psychoJS.window,
    name: 'B_PSQIquestionText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.05,  wrapWidth: 1.3, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  B_PSQIquestionslide = new visual.Slider({
    win: psychoJS.window, name: 'B_PSQIquestionslide',
    startValue: undefined,
    size: [1.1, 0.05], pos: [0, 0], ori: 0, units: psychoJS.window.units,
    labels: ["\u65e0", "<1\u6b21/\u5468", "1~2\u6b21/\u5468", "\u22653\u6b21/\u5468"], fontSize: 0.02, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('red'), lineColor: new util.Color('black'), 
    opacity: 1, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  Q47 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q47',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  warningskip2_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'warningskip2_2',
    text: '请准确的点击“圆点”位置！！！\n若不小心点击到“空白区域”，系统会自动选择最近的“圆点”选项，随后自动跳转到下一题！！！\n不可返回再作答！',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.35)], draggable: false, height: 0.03,  wrapWidth: 1.8, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "B_PSQI6"
  B_PSQI6Clock = new util.Clock();
  B_PSQIquestionText6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'B_PSQIquestionText6',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.05,  wrapWidth: 1.3, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  B_PSQIquestionslide6 = new visual.Slider({
    win: psychoJS.window, name: 'B_PSQIquestionslide6',
    startValue: undefined,
    size: [1.1, 0.05], pos: [0, 0], ori: 0, units: psychoJS.window.units,
    labels: ["\u5f88\u5dee", "\u8f83\u5dee", "\u8f83\u597d", "\u5f88\u597d"], fontSize: 0.02, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('red'), lineColor: new util.Color('black'), 
    opacity: 1, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  Q48 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q48',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  warningskip2_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'warningskip2_3',
    text: '请准确的点击“圆点”位置！！！\n若不小心点击到“空白区域”，系统会自动选择最近的“圆点”选项，随后自动跳转到下一题！！！\n不可返回再作答！',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.35)], draggable: false, height: 0.03,  wrapWidth: 1.8, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "BMRQ_intro"
  BMRQ_introClock = new util.Clock();
  BMRQ_intro_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'BMRQ_intro_image', units : undefined, 
    image : 'intro/EXP_intro_BMRQ_chinese.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.4, 0.37],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "BMRQ"
  BMRQClock = new util.Clock();
  BMRQ_questionText = new visual.TextStim({
    win: psychoJS.window,
    name: 'BMRQ_questionText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.05,  wrapWidth: 0.5, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  BMRQ_slider = new visual.Slider({
    win: psychoJS.window, name: 'BMRQ_slider',
    startValue: undefined,
    size: [1.1, 0.05], pos: [0, 0], ori: 0, units: psychoJS.window.units,
    labels: ["\u975e\u5e38\u4e0d\u540c\u610f", "\u4e0d\u540c\u610f", "\u4e00\u822c", "\u540c\u610f", "\u975e\u5e38\u540c\u610f"], fontSize: 0.02, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('red'), lineColor: new util.Color('black'), 
    opacity: 1, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  Q49toQ68 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q49toQ68',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  warningskip2_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'warningskip2_4',
    text: '请准确的点击“圆点”位置！！！\n若不小心点击到“空白区域”，系统会自动选择最近的“圆点”选项，随后自动跳转到下一题！！！\n不可返回再作答！',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.35)], draggable: false, height: 0.03,  wrapWidth: 1.8, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "ATAI_intro"
  ATAI_introClock = new util.Clock();
  ATAI_intro_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ATAI_intro_image', units : undefined, 
    image : 'intro/EXP_ATAI_intro_chinese.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.4, 0.32],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp_9 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ATAI_Q"
  ATAI_QClock = new util.Clock();
  ATAI_QuestionText_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ATAI_QuestionText_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.05,  wrapWidth: 1.3, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  ATAIquestionslide_2 = new visual.Slider({
    win: psychoJS.window, name: 'ATAIquestionslide_2',
    startValue: undefined,
    size: [1.1, 0.05], pos: [0, 0], ori: 0, units: psychoJS.window.units,
    labels: ["\u975e\u5e38\u4e0d\u540c\u610f", "1", "2", "3", "4", "5", "6", "7", "8", "9", "\u975e\u5e38\u540c\u610f"], fontSize: 0.02, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('red'), lineColor: new util.Color([-1.0000, -1.0000, -1.0000]), 
    opacity: 1, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  Q69toQ73_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q69toQ73_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  warningskip2_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'warningskip2_5',
    text: '请准确的点击“圆点”位置！！！\n若不小心点击到“空白区域”，系统会自动选择最近的“圆点”选项，随后自动跳转到下一题！！！\n不可返回再作答！',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.35)], draggable: false, height: 0.03,  wrapWidth: 1.8, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "BSSS4_intro"
  BSSS4_introClock = new util.Clock();
  BSSS4_intro_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'BSSS4_intro_image', units : undefined, 
    image : 'intro/EXP_BSSS4_intro_chinese.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.4, 0.33],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp_10 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "BSSS"
  BSSSClock = new util.Clock();
  BSSS_questiontext = new visual.TextStim({
    win: psychoJS.window,
    name: 'BSSS_questiontext',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.05,  wrapWidth: 1.3, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  BSSS_questionslide = new visual.Slider({
    win: psychoJS.window, name: 'BSSS_questionslide',
    startValue: undefined,
    size: [1.1, 0.05], pos: [0, 0], ori: 0, units: psychoJS.window.units,
    labels: ["\u975e\u5e38\u4e0d\u540c\u610f", "\u4e0d\u540c\u610f", "\u4e00\u822c", "\u540c\u610f", "\u975e\u5e38\u540c\u610f"], fontSize: 0.02, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('red'), lineColor: new util.Color('black'), 
    opacity: 1, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  Q74toQ81 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q74toQ81',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  warningskip2_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'warningskip2_6',
    text: '请准确的点击“圆点”位置！！！\n若不小心点击到“空白区域”，系统会自动选择最近的“圆点”选项，随后自动跳转到下一题！！！\n不可返回再作答！',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.35)], draggable: false, height: 0.03,  wrapWidth: 1.8, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "uncertainty_intro"
  uncertainty_introClock = new util.Clock();
  uncertainty_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'uncertainty_image', units : undefined, 
    image : 'intro/EXP_uncertainty_chinese_intro.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.4, 0.32],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp_16 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "uncertainty"
  uncertaintyClock = new util.Clock();
  uncertainty_questionText = new visual.TextStim({
    win: psychoJS.window,
    name: 'uncertainty_questionText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.05,  wrapWidth: 0.8, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  uncertainty_slider = new visual.Slider({
    win: psychoJS.window, name: 'uncertainty_slider',
    startValue: undefined,
    size: [1.1, 0.05], pos: [0, 0], ori: 0, units: psychoJS.window.units,
    labels: ["\u6781\u4e0d\u7b26\u5408", "\u4e0d\u7b26\u5408", "\u4e0d\u786e\u5b9a", "\u7b26\u5408", "\u6781\u4e3a\u7b26\u5408"], fontSize: 0.02, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('red'), lineColor: new util.Color('black'), 
    opacity: 1, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  Q82toQ93 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q82toQ93',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  warningskip2_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'warningskip2_7',
    text: '请准确的点击“圆点”位置！！！\n若不小心点击到“空白区域”，系统会自动选择最近的“圆点”选项，随后自动跳转到下一题！！！\n不可返回再作答！',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.35)], draggable: false, height: 0.03,  wrapWidth: 1.8, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "BPAAT_intro"
  BPAAT_introClock = new util.Clock();
  BPAAT_intro_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'BPAAT_intro_image', units : undefined, 
    image : 'intro/EXP_BPAAT_intro_chinese.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.4, 0.32],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp_11 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "BPAAT1"
  BPAAT1Clock = new util.Clock();
  BPAAT_questiontext1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'BPAAT_questiontext1',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.04,  wrapWidth: 1.0, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  BPAATquestionslide1 = new visual.Slider({
    win: psychoJS.window, name: 'BPAATquestionslide1',
    startValue: undefined,
    size: [1.1, 0.05], pos: [0, 0], ori: 0, units: psychoJS.window.units,
    labels: ["\u65e0", "1\u20132 \u6b21/\u5468", ">3 \u6b21/\u5468"], fontSize: 0.02, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('red'), lineColor: new util.Color('black'), 
    opacity: 1, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  Q94 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q94',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  warningskip2_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'warningskip2_8',
    text: '请准确的点击“圆点”位置！！！\n若不小心点击到“空白区域”，系统会自动选择最近的“圆点”选项，随后自动跳转到下一题！！！\n不可返回再作答！',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.35)], draggable: false, height: 0.03,  wrapWidth: 1.8, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "BPAAT2"
  BPAAT2Clock = new util.Clock();
  BPAAT_questiontext2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'BPAAT_questiontext2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.038,  wrapWidth: 1, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  BPAATquestionslide2 = new visual.Slider({
    win: psychoJS.window, name: 'BPAATquestionslide2',
    startValue: undefined,
    size: [1.1, 0.05], pos: [0, 0], ori: 0, units: psychoJS.window.units,
    labels: ["\u65e0", "1\u20132 \u6b21/\u5468", "3\u20134 \u6b21/\u5468", ">5 \u6b21/\u5468"], fontSize: 0.02, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('red'), lineColor: new util.Color('black'), 
    opacity: 1, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  Q95 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q95',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  warningskip2_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'warningskip2_9',
    text: '请准确的点击“圆点”位置！！！\n若不小心点击到“空白区域”，系统会自动选择最近的“圆点”选项，随后自动跳转到下一题！！！\n不可返回再作答！',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.35)], draggable: false, height: 0.03,  wrapWidth: 1.8, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "finishQUESTION_intro"
  finishQUESTION_introClock = new util.Clock();
  finish_questions_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'finish_questions_image', units : undefined, 
    image : 'intro/EXP_finishquestions_intro_chinese.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.4, 0.38],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  background = new visual.ImageStim({
    win : psychoJS.window,
    name : 'background', units : undefined, 
    image : 'intro/EXP_Bart_intro_chinese.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.4, 0.87],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "reset_balloon"
  reset_balloonClock = new util.Clock();
  // Initialize components for Routine "practice_trial"
  practice_trialClock = new util.Clock();
  practice_bg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'practice_bg', units : undefined, 
    image : 'assets/background.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2.2, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  practice_bankButton = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from practice_updateEarnings
  bankedEarnings = 0.0;
  balloonEarnings = "";
  bankedText = "";
  lastBalloonEarnings = 0.0;
  thisBalloonEarnings = 0.0;
  
  practice_reminder = new visual.TextBox({
    win: psychoJS.window,
    name: 'practice_reminder',
    text: '按 空格键（Space） 给气球打气\n按 回车键（Enter） 存入当前奖金',
    placeholder: 'Type here...',
    font: 'Open Sans',
    pos: [(- 0.4), 0.18], 
    draggable: false,
    letterHeight: 0.03,
    lineSpacing: 1.0,
    size: [0.5, 0.18],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: 0.8,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  practice_balloonValTxt = new visual.TextBox({
    win: psychoJS.window,
    name: 'practice_balloonValTxt',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), 0.4], 
    draggable: false,
    letterHeight: 0.03,
    lineSpacing: 1.0,
    size: [0.5, 0.2],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: 0.8,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  practice_bankedTxt = new visual.TextBox({
    win: psychoJS.window,
    name: 'practice_bankedTxt',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0.4, 0.4], 
    draggable: false,
    letterHeight: 0.03,
    lineSpacing: 1.0,
    size: [0.5, 0.2],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: 0.8,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -5.0 
  });
  
  // Run 'Begin Experiment' code from practice_setBalloonSize
  balloonSize = 0.08;
  balloonMsgHeight = 0.01;
  
  practice_balloonBody = new visual.ImageStim({
    win : psychoJS.window,
    name : 'practice_balloonBody', units : 'height', 
    image : 'assets/redBalloon.png', mask : undefined,
    anchor : 'center',
    ori : (- 90), 
    pos : [0, 0], 
    draggable: false,
    size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -7.0 
  });
  practice_trialcount = new visual.TextBox({
    win: psychoJS.window,
    name: 'practice_trialcount',
    text: '',
    placeholder: 'Type here...',
    font: 'Open Sans',
    pos: [0.4, 0.18], 
    draggable: false,
    letterHeight: 0.03,
    lineSpacing: 1.0,
    size: [0.5, 0.18],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: 0.8,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -8.0 
  });
  
  // Initialize components for Routine "practice_feedback"
  practice_feedbackClock = new util.Clock();
  practice_background_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'practice_background_3', units : undefined, 
    image : 'assets/background.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2.2, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Run 'Begin Experiment' code from practice_checkPopped
  feedbackText = "";
  
  practice_feedbacktxt = new visual.TextBox({
    win: psychoJS.window,
    name: 'practice_feedbacktxt',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.4, 0.2],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  practice_bankedTxt_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'practice_bankedTxt_2',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0.4, 0.4], 
    draggable: false,
    letterHeight: 0.03,
    lineSpacing: 1.0,
    size: [0.5, 0.2],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: 0.8,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  practice_reminder_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'practice_reminder_2',
    text: '按 空格键（Space） 给气球打气\n按 回车键（Enter） 存入当前奖金',
    placeholder: 'Type here...',
    font: 'Open Sans',
    pos: [(- 0.4), 0.18], 
    draggable: false,
    letterHeight: 0.03,
    lineSpacing: 1.0,
    size: [0.5, 0.18],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: 0.8,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  practice_trialcount_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'practice_trialcount_2',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0.4, 0.18], 
    draggable: false,
    letterHeight: 0.03,
    lineSpacing: 1.0,
    size: [0.5, 0.18],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: 0.8,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -5.0 
  });
  
  // Initialize components for Routine "practice_finalScore"
  practice_finalScoreClock = new util.Clock();
  practice_background_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'practice_background_4', units : undefined, 
    image : 'assets/background.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2.2, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  practice_scoremsg = new visual.TextBox({
    win: psychoJS.window,
    name: 'practice_scoremsg',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [1, 0.7],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: 0.8,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '请按回车键（Enter）继续...',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "resetmoneypractice"
  resetmoneypracticeClock = new util.Clock();
  // Initialize components for Routine "comprehension_check"
  comprehension_checkClock = new util.Clock();
  understand_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'understand_2',
    text: '明白实验规则了吗？\n如果你已经理解了实验规则，请按下Y键，进入正式实验；\n如果你还不太明白操作方式，请按下N键，系统将安排你重新进行一次练习环节。\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_comprehension = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "begin_formal"
  begin_formalClock = new util.Clock();
  formal_begain = new visual.TextStim({
    win: psychoJS.window,
    name: 'formal_begain',
    text: '你准备好了吗？\n请点击下方”开始正式实验“按钮，开始正式实验',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  bart_formal_begin = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'bart_formal_begin',
    text: '开始正式实验',
    font: 'Arial',
    pos: [0, (- 0.4)],
    size: [1, 0.04],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  bart_formal_begin.clock = new util.Clock();
  
  // Initialize components for Routine "resetmoney"
  resetmoneyClock = new util.Clock();
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  background_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'background_2', units : undefined, 
    image : 'assets/background.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2.2, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  bankButton = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from updateEarnings
  bankedEarnings = 0.0;
  balloonEarnings = "";
  bankedText = "";
  lastBalloonEarnings = 0.0;
  thisBalloonEarnings = 0.0;
  
  reminder = new visual.TextBox({
    win: psychoJS.window,
    name: 'reminder',
    text: '按 空格键（Space） 给气球打气\n按 回车键（Enter） 存入当前奖金',
    placeholder: 'Type here...',
    font: 'Open Sans',
    pos: [(- 0.4), 0.18], 
    draggable: false,
    letterHeight: 0.03,
    lineSpacing: 1.0,
    size: [0.5, 0.18],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: 0.8,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  balloonValTxt = new visual.TextBox({
    win: psychoJS.window,
    name: 'balloonValTxt',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), 0.4], 
    draggable: false,
    letterHeight: 0.03,
    lineSpacing: 1.0,
    size: [0.5, 0.2],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: 0.8,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  bankedTxt = new visual.TextBox({
    win: psychoJS.window,
    name: 'bankedTxt',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0.4, 0.4], 
    draggable: false,
    letterHeight: 0.03,
    lineSpacing: 1.0,
    size: [0.5, 0.2],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: 0.8,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -5.0 
  });
  
  // Run 'Begin Experiment' code from setBalloonSize
  balloonSize = 0.08;
  balloonMsgHeight = 0.01;
  
  balloonBody = new visual.ImageStim({
    win : psychoJS.window,
    name : 'balloonBody', units : 'height', 
    image : 'assets/redBalloon.png', mask : undefined,
    anchor : 'center',
    ori : (- 90), 
    pos : [0, 0], 
    draggable: false,
    size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -7.0 
  });
  trialcount = new visual.TextBox({
    win: psychoJS.window,
    name: 'trialcount',
    text: '',
    placeholder: 'Type here...',
    font: 'Open Sans',
    pos: [0.4, 0.18], 
    draggable: false,
    letterHeight: 0.03,
    lineSpacing: 1.0,
    size: [0.5, 0.18],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: 0.8,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -8.0 
  });
  
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  background_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'background_3', units : undefined, 
    image : 'assets/background.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2.2, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Run 'Begin Experiment' code from checkPopped
  feedbackText = "";
  
  feedbacktxt = new visual.TextBox({
    win: psychoJS.window,
    name: 'feedbacktxt',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.4, 0.2],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  bankedTxt_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'bankedTxt_2',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0.4, 0.4], 
    draggable: false,
    letterHeight: 0.03,
    lineSpacing: 1.0,
    size: [0.5, 0.2],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: 0.8,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  balloonValTxt_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'balloonValTxt_2',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), 0.4], 
    draggable: false,
    letterHeight: 0.03,
    lineSpacing: 1.0,
    size: [0.5, 0.2],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: 0.8,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  reminder_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'reminder_2',
    text: '按 空格键（Space） 给气球打气\n按 回车键（Enter） 存入当前奖金',
    placeholder: 'Type here...',
    font: 'Open Sans',
    pos: [(- 0.4), 0.18], 
    draggable: false,
    letterHeight: 0.03,
    lineSpacing: 1.0,
    size: [0.5, 0.18],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: 0.8,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -5.0 
  });
  
  trialcount_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'trialcount_2',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0.4, 0.18], 
    draggable: false,
    letterHeight: 0.03,
    lineSpacing: 1.0,
    size: [0.5, 0.18],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: 0.8,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -6.0 
  });
  
  // Initialize components for Routine "finalScore"
  finalScoreClock = new util.Clock();
  background_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'background_4', units : undefined, 
    image : 'assets/background.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2.2, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  scoremsg = new visual.TextBox({
    win: psychoJS.window,
    name: 'scoremsg',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [1, 0.7],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: 0.8,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  finished_bart = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'finished_bart',
    text: '点击此处继续进行下一个游戏...',
    font: 'Arial',
    pos: [0, (- 0.43)],
    size: [1, 0.04],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.038,
    bold: true,
    italic: false,
  });
  finished_bart.clock = new util.Clock();
  
  // Initialize components for Routine "instruction_fish"
  instruction_fishClock = new util.Clock();
  background_fish = new visual.ImageStim({
    win : psychoJS.window,
    name : 'background_fish', units : 'norm', 
    image : 'images/lake5.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2, 2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  instructions_txt_fish = new visual.TextBox({
    win: psychoJS.window,
    name: 'instructions_txt_fish',
    text: '欢迎来到我们的最后一个小游戏！\n\n在这个游戏中，你的任务是尽可能多地捕获鱼。\n\n你可以在三片湖泊中任选其一进行垂钓。\n\n请点击你想要垂钓的湖泊开始。\n\n尽量多捕捞一些鱼！\n\n请点击"开始"。',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [1.5, 0.8],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: 0.8,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  start_button_fish = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'start_button_fish',
    text: '开始',
    font: 'Arvo',
    pos: [0, (- 0.4)],
    size: [0.3, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  start_button_fish.clock = new util.Clock();
  
  // Initialize components for Routine "trial_fish"
  trial_fishClock = new util.Clock();
  instruct_fish = new visual.TextBox({
    win: psychoJS.window,
    name: 'instruct_fish',
    text: '点击湖泊即可钓鱼！',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0.4], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [1, 0.1],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  lake1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'lake1', units : undefined, 
    image : 'images/lake1.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.5), 0], 
    draggable: false,
    size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  lake2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'lake2', units : undefined, 
    image : 'images/lake2.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  lake3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'lake3', units : undefined, 
    image : 'images/lake3.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.5, 0], 
    draggable: false,
    size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  rod = new visual.ImageStim({
    win : psychoJS.window,
    name : 'rod', units : undefined, 
    image : 'images/rod.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  // Run 'Begin Experiment' code from control_wins
  lake1_wins = [];
  lake2_wins = [];
  lake3_wins = [];
  nfish = 0;
  
  fishcountim = new visual.ImageStim({
    win : psychoJS.window,
    name : 'fishcountim', units : undefined, 
    image : 'images/fish1.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.4), (- 0.4)], 
    draggable: false,
    size : [0.1, 0.07],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  fishcount = new visual.TextBox({
    win: psychoJS.window,
    name: 'fishcount',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.15), (- 0.4)], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.5, 0.1],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -8.0 
  });
  
  // Run 'Begin Experiment' code from fishCounter
  fish_trial_index = 0;
  
  fishTrialDisplay = new visual.TextStim({
    win: psychoJS.window,
    name: 'fishTrialDisplay',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.45, (- 0.37)], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -10.0 
  });
  
  // Initialize components for Routine "feedback_fish"
  feedback_fishClock = new util.Clock();
  fb_txtbox = new visual.TextBox({
    win: psychoJS.window,
    name: 'fb_txtbox',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0.3], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [1, 0.1],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  fb_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'fb_image', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.5, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  fishcountim_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'fishcountim_2', units : undefined, 
    image : 'images/fish1.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.4), (- 0.4)], 
    draggable: false,
    size : [0.1, 0.07],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  fishcount_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'fishcount_2',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.15), (- 0.4)], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.5, 0.1],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  // Initialize components for Routine "end_fishing"
  end_fishingClock = new util.Clock();
  background_7 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'background_7', units : 'norm', 
    image : 'images/lake5.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2, 2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  exit_button = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'exit_button',
    text: '退出',
    font: 'Arvo',
    pos: [0, (- 0.43)],
    size: [0.3, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.045,
    bold: true,
    italic: false,
  });
  exit_button.clock = new util.Clock();
  
  textbox_end = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_end',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0.1], 
    draggable: false,
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [1.5, 0.8],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: 0.8,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  text_hint = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_hint',
    text: '按"退出"后，待页面跳转，随后再等待1分钟\n看到"Thank you for your patience. Goodbye!" 后，再点击"OK"结束实验！\n\n切勿按其他键或强制关闭窗口，否则数据将无法保存！',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.1)], draggable: false, height: 0.035,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "dataupload"
  datauploadClock = new util.Clock();
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var Welcome_chineseMaxDurationReached;
var _key_resp_13_allKeys;
var Welcome_chineseMaxDuration;
var Welcome_chineseComponents;
function Welcome_chineseRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Welcome_chinese' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    Welcome_chineseClock.reset();
    routineTimer.reset();
    Welcome_chineseMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_13.keys = undefined;
    key_resp_13.rt = undefined;
    _key_resp_13_allKeys = [];
    Welcome_chineseMaxDuration = null
    // keep track of which components have finished
    Welcome_chineseComponents = [];
    Welcome_chineseComponents.push(welcime_chinese_image);
    Welcome_chineseComponents.push(key_resp_13);
    
    Welcome_chineseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Welcome_chineseRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Welcome_chinese' ---
    // get current time
    t = Welcome_chineseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *welcime_chinese_image* updates
    if (t >= 0.0 && welcime_chinese_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcime_chinese_image.tStart = t;  // (not accounting for frame time here)
      welcime_chinese_image.frameNStart = frameN;  // exact frame index
      
      welcime_chinese_image.setAutoDraw(true);
    }
    
    
    // if welcime_chinese_image is active this frame...
    if (welcime_chinese_image.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_13* updates
    if (t >= 0.0 && key_resp_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_13.tStart = t;  // (not accounting for frame time here)
      key_resp_13.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_13.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_13.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_13.clearEvents(); });
    }
    
    // if key_resp_13 is active this frame...
    if (key_resp_13.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_13.getKeys({keyList: 'return', waitRelease: false});
      _key_resp_13_allKeys = _key_resp_13_allKeys.concat(theseKeys);
      if (_key_resp_13_allKeys.length > 0) {
        key_resp_13.keys = _key_resp_13_allKeys[_key_resp_13_allKeys.length - 1].name;  // just the last key pressed
        key_resp_13.rt = _key_resp_13_allKeys[_key_resp_13_allKeys.length - 1].rt;
        key_resp_13.duration = _key_resp_13_allKeys[_key_resp_13_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Welcome_chineseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Welcome_chineseRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Welcome_chinese' ---
    Welcome_chineseComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_13.corr, level);
    }
    psychoJS.experiment.addData('key_resp_13.keys', key_resp_13.keys);
    if (typeof key_resp_13.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_13.rt', key_resp_13.rt);
        psychoJS.experiment.addData('key_resp_13.duration', key_resp_13.duration);
        routineTimer.reset();
        }
    
    key_resp_13.stop();
    // the Routine "Welcome_chinese" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var GenderMaxDurationReached;
var GenderMaxDuration;
var GenderComponents;
function GenderRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Gender' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    GenderClock.reset();
    routineTimer.reset();
    GenderMaxDurationReached = false;
    // update component parameters for each repeat
    // reset gender_female_button to account for continued clicks & clear times on/off
    gender_female_button.reset()
    // reset gender_male_button to account for continued clicks & clear times on/off
    gender_male_button.reset()
    // reset gender_nonbinary_button to account for continued clicks & clear times on/off
    gender_nonbinary_button.reset()
    // reset gender_prefernot_button to account for continued clicks & clear times on/off
    gender_prefernot_button.reset()
    psychoJS.experiment.addData('Gender.started', globalClock.getTime());
    GenderMaxDuration = null
    // keep track of which components have finished
    GenderComponents = [];
    GenderComponents.push(Q_gender_text);
    GenderComponents.push(gender_female_button);
    GenderComponents.push(gender_male_button);
    GenderComponents.push(gender_nonbinary_button);
    GenderComponents.push(gender_prefernot_button);
    GenderComponents.push(Q1);
    
    GenderComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function GenderRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Gender' ---
    // get current time
    t = GenderClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Q_gender_text* updates
    if (t >= 0.0 && Q_gender_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q_gender_text.tStart = t;  // (not accounting for frame time here)
      Q_gender_text.frameNStart = frameN;  // exact frame index
      
      Q_gender_text.setAutoDraw(true);
    }
    
    
    // if Q_gender_text is active this frame...
    if (Q_gender_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *gender_female_button* updates
    if (t >= 0 && gender_female_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gender_female_button.tStart = t;  // (not accounting for frame time here)
      gender_female_button.frameNStart = frameN;  // exact frame index
      
      gender_female_button.setAutoDraw(true);
    }
    
    
    // if gender_female_button is active this frame...
    if (gender_female_button.status === PsychoJS.Status.STARTED) {
    }
    
    if (gender_female_button.status === PsychoJS.Status.STARTED) {
      // check whether gender_female_button has been pressed
      if (gender_female_button.isClicked) {
        if (!gender_female_button.wasClicked) {
          // store time of first click
          gender_female_button.timesOn.push(gender_female_button.clock.getTime());
          // store time clicked until
          gender_female_button.timesOff.push(gender_female_button.clock.getTime());
        } else {
          // update time clicked until;
          gender_female_button.timesOff[gender_female_button.timesOff.length - 1] = gender_female_button.clock.getTime();
        }
        if (!gender_female_button.wasClicked) {
          // end routine when gender_female_button is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("gender", "\u5973");
        }
        // if gender_female_button is still clicked next frame, it is not a new click
        gender_female_button.wasClicked = true;
      } else {
        // if gender_female_button is clicked next frame, it is a new click
        gender_female_button.wasClicked = false;
      }
    } else {
      // keep clock at 0 if gender_female_button hasn't started / has finished
      gender_female_button.clock.reset();
      // if gender_female_button is clicked next frame, it is a new click
      gender_female_button.wasClicked = false;
    }
    
    // *gender_male_button* updates
    if (t >= 0 && gender_male_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gender_male_button.tStart = t;  // (not accounting for frame time here)
      gender_male_button.frameNStart = frameN;  // exact frame index
      
      gender_male_button.setAutoDraw(true);
    }
    
    
    // if gender_male_button is active this frame...
    if (gender_male_button.status === PsychoJS.Status.STARTED) {
    }
    
    if (gender_male_button.status === PsychoJS.Status.STARTED) {
      // check whether gender_male_button has been pressed
      if (gender_male_button.isClicked) {
        if (!gender_male_button.wasClicked) {
          // store time of first click
          gender_male_button.timesOn.push(gender_male_button.clock.getTime());
          // store time clicked until
          gender_male_button.timesOff.push(gender_male_button.clock.getTime());
        } else {
          // update time clicked until;
          gender_male_button.timesOff[gender_male_button.timesOff.length - 1] = gender_male_button.clock.getTime();
        }
        if (!gender_male_button.wasClicked) {
          // end routine when gender_male_button is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("gender", "\u7537");
        }
        // if gender_male_button is still clicked next frame, it is not a new click
        gender_male_button.wasClicked = true;
      } else {
        // if gender_male_button is clicked next frame, it is a new click
        gender_male_button.wasClicked = false;
      }
    } else {
      // keep clock at 0 if gender_male_button hasn't started / has finished
      gender_male_button.clock.reset();
      // if gender_male_button is clicked next frame, it is a new click
      gender_male_button.wasClicked = false;
    }
    
    // *gender_nonbinary_button* updates
    if (t >= 0 && gender_nonbinary_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gender_nonbinary_button.tStart = t;  // (not accounting for frame time here)
      gender_nonbinary_button.frameNStart = frameN;  // exact frame index
      
      gender_nonbinary_button.setAutoDraw(true);
    }
    
    
    // if gender_nonbinary_button is active this frame...
    if (gender_nonbinary_button.status === PsychoJS.Status.STARTED) {
    }
    
    if (gender_nonbinary_button.status === PsychoJS.Status.STARTED) {
      // check whether gender_nonbinary_button has been pressed
      if (gender_nonbinary_button.isClicked) {
        if (!gender_nonbinary_button.wasClicked) {
          // store time of first click
          gender_nonbinary_button.timesOn.push(gender_nonbinary_button.clock.getTime());
          // store time clicked until
          gender_nonbinary_button.timesOff.push(gender_nonbinary_button.clock.getTime());
        } else {
          // update time clicked until;
          gender_nonbinary_button.timesOff[gender_nonbinary_button.timesOff.length - 1] = gender_nonbinary_button.clock.getTime();
        }
        if (!gender_nonbinary_button.wasClicked) {
          // end routine when gender_nonbinary_button is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("gender", "\u975e\u4e8c\u5143");
        }
        // if gender_nonbinary_button is still clicked next frame, it is not a new click
        gender_nonbinary_button.wasClicked = true;
      } else {
        // if gender_nonbinary_button is clicked next frame, it is a new click
        gender_nonbinary_button.wasClicked = false;
      }
    } else {
      // keep clock at 0 if gender_nonbinary_button hasn't started / has finished
      gender_nonbinary_button.clock.reset();
      // if gender_nonbinary_button is clicked next frame, it is a new click
      gender_nonbinary_button.wasClicked = false;
    }
    
    // *gender_prefernot_button* updates
    if (t >= 0 && gender_prefernot_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gender_prefernot_button.tStart = t;  // (not accounting for frame time here)
      gender_prefernot_button.frameNStart = frameN;  // exact frame index
      
      gender_prefernot_button.setAutoDraw(true);
    }
    
    
    // if gender_prefernot_button is active this frame...
    if (gender_prefernot_button.status === PsychoJS.Status.STARTED) {
    }
    
    if (gender_prefernot_button.status === PsychoJS.Status.STARTED) {
      // check whether gender_prefernot_button has been pressed
      if (gender_prefernot_button.isClicked) {
        if (!gender_prefernot_button.wasClicked) {
          // store time of first click
          gender_prefernot_button.timesOn.push(gender_prefernot_button.clock.getTime());
          // store time clicked until
          gender_prefernot_button.timesOff.push(gender_prefernot_button.clock.getTime());
        } else {
          // update time clicked until;
          gender_prefernot_button.timesOff[gender_prefernot_button.timesOff.length - 1] = gender_prefernot_button.clock.getTime();
        }
        if (!gender_prefernot_button.wasClicked) {
          // end routine when gender_prefernot_button is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("gender", "\u4e0d\u613f\u900f\u9732");
        }
        // if gender_prefernot_button is still clicked next frame, it is not a new click
        gender_prefernot_button.wasClicked = true;
      } else {
        // if gender_prefernot_button is clicked next frame, it is a new click
        gender_prefernot_button.wasClicked = false;
      }
    } else {
      // keep clock at 0 if gender_prefernot_button hasn't started / has finished
      gender_prefernot_button.clock.reset();
      // if gender_prefernot_button is clicked next frame, it is a new click
      gender_prefernot_button.wasClicked = false;
    }
    
    // *Q1* updates
    if (t >= 0.0 && Q1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q1.tStart = t;  // (not accounting for frame time here)
      Q1.frameNStart = frameN;  // exact frame index
      
      Q1.setAutoDraw(true);
    }
    
    
    // if Q1 is active this frame...
    if (Q1.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    GenderComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function GenderRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Gender' ---
    GenderComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Gender.stopped', globalClock.getTime());
    psychoJS.experiment.addData('gender_female_button.numClicks', gender_female_button.numClicks);
    psychoJS.experiment.addData('gender_female_button.timesOn', gender_female_button.timesOn);
    psychoJS.experiment.addData('gender_female_button.timesOff', gender_female_button.timesOff);
    psychoJS.experiment.addData('gender_male_button.numClicks', gender_male_button.numClicks);
    psychoJS.experiment.addData('gender_male_button.timesOn', gender_male_button.timesOn);
    psychoJS.experiment.addData('gender_male_button.timesOff', gender_male_button.timesOff);
    psychoJS.experiment.addData('gender_nonbinary_button.numClicks', gender_nonbinary_button.numClicks);
    psychoJS.experiment.addData('gender_nonbinary_button.timesOn', gender_nonbinary_button.timesOn);
    psychoJS.experiment.addData('gender_nonbinary_button.timesOff', gender_nonbinary_button.timesOff);
    psychoJS.experiment.addData('gender_prefernot_button.numClicks', gender_prefernot_button.numClicks);
    psychoJS.experiment.addData('gender_prefernot_button.timesOn', gender_prefernot_button.timesOn);
    psychoJS.experiment.addData('gender_prefernot_button.timesOff', gender_prefernot_button.timesOff);
    // the Routine "Gender" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var AgeMaxDurationReached;
var AgeMaxDuration;
var AgeComponents;
function AgeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Age' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    AgeClock.reset();
    routineTimer.reset();
    AgeMaxDurationReached = false;
    // update component parameters for each repeat
    textbox_age.setText('');
    textbox_age.refresh();
    psychoJS.experiment.addData('Age.started', globalClock.getTime());
    AgeMaxDuration = null
    // keep track of which components have finished
    AgeComponents = [];
    AgeComponents.push(Q_age_text);
    AgeComponents.push(textbox_age);
    AgeComponents.push(enter_hint_age);
    AgeComponents.push(Q2);
    
    AgeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var _pj;
var keys;
var user_input;
function AgeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Age' ---
    // get current time
    t = AgeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Q_age_text* updates
    if (t >= 0.0 && Q_age_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q_age_text.tStart = t;  // (not accounting for frame time here)
      Q_age_text.frameNStart = frameN;  // exact frame index
      
      Q_age_text.setAutoDraw(true);
    }
    
    
    // if Q_age_text is active this frame...
    if (Q_age_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *textbox_age* updates
    if (t >= 0.0 && textbox_age.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_age.tStart = t;  // (not accounting for frame time here)
      textbox_age.frameNStart = frameN;  // exact frame index
      
      textbox_age.setAutoDraw(true);
    }
    
    
    // if textbox_age is active this frame...
    if (textbox_age.status === PsychoJS.Status.STARTED) {
    }
    
    // Run 'Each Frame' code from code_3
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if ((! ("allow_advance_age" in psychoJS.experiment))) {
        psychoJS.experiment.allow_advance_age = false;
    }
    keys = psychoJS.eventManager.getKeys();
    if (_pj.in_es6("return", keys)) {
        user_input = textbox_age.text.trim();
        if ((user_input !== "")) {
            psychoJS.experiment.allow_advance_age = true;
        }
    }
    if (psychoJS.experiment.allow_advance_age) {
        continueRoutine = false;
    }
    
    
    // *enter_hint_age* updates
    if (t >= 0.0 && enter_hint_age.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      enter_hint_age.tStart = t;  // (not accounting for frame time here)
      enter_hint_age.frameNStart = frameN;  // exact frame index
      
      enter_hint_age.setAutoDraw(true);
    }
    
    
    // if enter_hint_age is active this frame...
    if (enter_hint_age.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *Q2* updates
    if (t >= 0.0 && Q2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q2.tStart = t;  // (not accounting for frame time here)
      Q2.frameNStart = frameN;  // exact frame index
      
      Q2.setAutoDraw(true);
    }
    
    
    // if Q2 is active this frame...
    if (Q2.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    AgeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function AgeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Age' ---
    AgeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Age.stopped', globalClock.getTime());
    psychoJS.experiment.addData('textbox_age.text',textbox_age.text)
    // Run 'End Routine' code from code_3
    psychoJS.experiment.addData("age", textbox_age.text);
    
    // the Routine "Age" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var relationship_statusMaxDurationReached;
var relationship_statusMaxDuration;
var relationship_statusComponents;
function relationship_statusRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'relationship_status' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    relationship_statusClock.reset();
    routineTimer.reset();
    relationship_statusMaxDurationReached = false;
    // update component parameters for each repeat
    // reset relationship_single to account for continued clicks & clear times on/off
    relationship_single.reset()
    // reset relationship_Inarelationship to account for continued clicks & clear times on/off
    relationship_Inarelationship.reset()
    // reset relationship_Married to account for continued clicks & clear times on/off
    relationship_Married.reset()
    // reset relationship_Divorced to account for continued clicks & clear times on/off
    relationship_Divorced.reset()
    psychoJS.experiment.addData('relationship_status.started', globalClock.getTime());
    relationship_statusMaxDuration = null
    // keep track of which components have finished
    relationship_statusComponents = [];
    relationship_statusComponents.push(Q_relationship_status);
    relationship_statusComponents.push(relationship_single);
    relationship_statusComponents.push(relationship_Inarelationship);
    relationship_statusComponents.push(relationship_Married);
    relationship_statusComponents.push(relationship_Divorced);
    relationship_statusComponents.push(Q3);
    
    relationship_statusComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function relationship_statusRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'relationship_status' ---
    // get current time
    t = relationship_statusClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Q_relationship_status* updates
    if (t >= 0.0 && Q_relationship_status.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q_relationship_status.tStart = t;  // (not accounting for frame time here)
      Q_relationship_status.frameNStart = frameN;  // exact frame index
      
      Q_relationship_status.setAutoDraw(true);
    }
    
    
    // if Q_relationship_status is active this frame...
    if (Q_relationship_status.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *relationship_single* updates
    if (t >= 0 && relationship_single.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      relationship_single.tStart = t;  // (not accounting for frame time here)
      relationship_single.frameNStart = frameN;  // exact frame index
      
      relationship_single.setAutoDraw(true);
    }
    
    
    // if relationship_single is active this frame...
    if (relationship_single.status === PsychoJS.Status.STARTED) {
    }
    
    if (relationship_single.status === PsychoJS.Status.STARTED) {
      // check whether relationship_single has been pressed
      if (relationship_single.isClicked) {
        if (!relationship_single.wasClicked) {
          // store time of first click
          relationship_single.timesOn.push(relationship_single.clock.getTime());
          // store time clicked until
          relationship_single.timesOff.push(relationship_single.clock.getTime());
        } else {
          // update time clicked until;
          relationship_single.timesOff[relationship_single.timesOff.length - 1] = relationship_single.clock.getTime();
        }
        if (!relationship_single.wasClicked) {
          // end routine when relationship_single is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("relationship_status", "\u5355\u8eab");
        }
        // if relationship_single is still clicked next frame, it is not a new click
        relationship_single.wasClicked = true;
      } else {
        // if relationship_single is clicked next frame, it is a new click
        relationship_single.wasClicked = false;
      }
    } else {
      // keep clock at 0 if relationship_single hasn't started / has finished
      relationship_single.clock.reset();
      // if relationship_single is clicked next frame, it is a new click
      relationship_single.wasClicked = false;
    }
    
    // *relationship_Inarelationship* updates
    if (t >= 0 && relationship_Inarelationship.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      relationship_Inarelationship.tStart = t;  // (not accounting for frame time here)
      relationship_Inarelationship.frameNStart = frameN;  // exact frame index
      
      relationship_Inarelationship.setAutoDraw(true);
    }
    
    
    // if relationship_Inarelationship is active this frame...
    if (relationship_Inarelationship.status === PsychoJS.Status.STARTED) {
    }
    
    if (relationship_Inarelationship.status === PsychoJS.Status.STARTED) {
      // check whether relationship_Inarelationship has been pressed
      if (relationship_Inarelationship.isClicked) {
        if (!relationship_Inarelationship.wasClicked) {
          // store time of first click
          relationship_Inarelationship.timesOn.push(relationship_Inarelationship.clock.getTime());
          // store time clicked until
          relationship_Inarelationship.timesOff.push(relationship_Inarelationship.clock.getTime());
        } else {
          // update time clicked until;
          relationship_Inarelationship.timesOff[relationship_Inarelationship.timesOff.length - 1] = relationship_Inarelationship.clock.getTime();
        }
        if (!relationship_Inarelationship.wasClicked) {
          // end routine when relationship_Inarelationship is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("relationship_status", "\u604b\u7231\u4e2d");
        }
        // if relationship_Inarelationship is still clicked next frame, it is not a new click
        relationship_Inarelationship.wasClicked = true;
      } else {
        // if relationship_Inarelationship is clicked next frame, it is a new click
        relationship_Inarelationship.wasClicked = false;
      }
    } else {
      // keep clock at 0 if relationship_Inarelationship hasn't started / has finished
      relationship_Inarelationship.clock.reset();
      // if relationship_Inarelationship is clicked next frame, it is a new click
      relationship_Inarelationship.wasClicked = false;
    }
    
    // *relationship_Married* updates
    if (t >= 0 && relationship_Married.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      relationship_Married.tStart = t;  // (not accounting for frame time here)
      relationship_Married.frameNStart = frameN;  // exact frame index
      
      relationship_Married.setAutoDraw(true);
    }
    
    
    // if relationship_Married is active this frame...
    if (relationship_Married.status === PsychoJS.Status.STARTED) {
    }
    
    if (relationship_Married.status === PsychoJS.Status.STARTED) {
      // check whether relationship_Married has been pressed
      if (relationship_Married.isClicked) {
        if (!relationship_Married.wasClicked) {
          // store time of first click
          relationship_Married.timesOn.push(relationship_Married.clock.getTime());
          // store time clicked until
          relationship_Married.timesOff.push(relationship_Married.clock.getTime());
        } else {
          // update time clicked until;
          relationship_Married.timesOff[relationship_Married.timesOff.length - 1] = relationship_Married.clock.getTime();
        }
        if (!relationship_Married.wasClicked) {
          // end routine when relationship_Married is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("relationship_status", "\u5df2\u5a5a");
        }
        // if relationship_Married is still clicked next frame, it is not a new click
        relationship_Married.wasClicked = true;
      } else {
        // if relationship_Married is clicked next frame, it is a new click
        relationship_Married.wasClicked = false;
      }
    } else {
      // keep clock at 0 if relationship_Married hasn't started / has finished
      relationship_Married.clock.reset();
      // if relationship_Married is clicked next frame, it is a new click
      relationship_Married.wasClicked = false;
    }
    
    // *relationship_Divorced* updates
    if (t >= 0 && relationship_Divorced.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      relationship_Divorced.tStart = t;  // (not accounting for frame time here)
      relationship_Divorced.frameNStart = frameN;  // exact frame index
      
      relationship_Divorced.setAutoDraw(true);
    }
    
    
    // if relationship_Divorced is active this frame...
    if (relationship_Divorced.status === PsychoJS.Status.STARTED) {
    }
    
    if (relationship_Divorced.status === PsychoJS.Status.STARTED) {
      // check whether relationship_Divorced has been pressed
      if (relationship_Divorced.isClicked) {
        if (!relationship_Divorced.wasClicked) {
          // store time of first click
          relationship_Divorced.timesOn.push(relationship_Divorced.clock.getTime());
          // store time clicked until
          relationship_Divorced.timesOff.push(relationship_Divorced.clock.getTime());
        } else {
          // update time clicked until;
          relationship_Divorced.timesOff[relationship_Divorced.timesOff.length - 1] = relationship_Divorced.clock.getTime();
        }
        if (!relationship_Divorced.wasClicked) {
          // end routine when relationship_Divorced is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("relationship_status", "\u79bb\u5f02");
        }
        // if relationship_Divorced is still clicked next frame, it is not a new click
        relationship_Divorced.wasClicked = true;
      } else {
        // if relationship_Divorced is clicked next frame, it is a new click
        relationship_Divorced.wasClicked = false;
      }
    } else {
      // keep clock at 0 if relationship_Divorced hasn't started / has finished
      relationship_Divorced.clock.reset();
      // if relationship_Divorced is clicked next frame, it is a new click
      relationship_Divorced.wasClicked = false;
    }
    
    // *Q3* updates
    if (t >= 0.0 && Q3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q3.tStart = t;  // (not accounting for frame time here)
      Q3.frameNStart = frameN;  // exact frame index
      
      Q3.setAutoDraw(true);
    }
    
    
    // if Q3 is active this frame...
    if (Q3.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    relationship_statusComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function relationship_statusRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'relationship_status' ---
    relationship_statusComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('relationship_status.stopped', globalClock.getTime());
    psychoJS.experiment.addData('relationship_single.numClicks', relationship_single.numClicks);
    psychoJS.experiment.addData('relationship_single.timesOn', relationship_single.timesOn);
    psychoJS.experiment.addData('relationship_single.timesOff', relationship_single.timesOff);
    psychoJS.experiment.addData('relationship_Inarelationship.numClicks', relationship_Inarelationship.numClicks);
    psychoJS.experiment.addData('relationship_Inarelationship.timesOn', relationship_Inarelationship.timesOn);
    psychoJS.experiment.addData('relationship_Inarelationship.timesOff', relationship_Inarelationship.timesOff);
    psychoJS.experiment.addData('relationship_Married.numClicks', relationship_Married.numClicks);
    psychoJS.experiment.addData('relationship_Married.timesOn', relationship_Married.timesOn);
    psychoJS.experiment.addData('relationship_Married.timesOff', relationship_Married.timesOff);
    psychoJS.experiment.addData('relationship_Divorced.numClicks', relationship_Divorced.numClicks);
    psychoJS.experiment.addData('relationship_Divorced.timesOn', relationship_Divorced.timesOn);
    psychoJS.experiment.addData('relationship_Divorced.timesOff', relationship_Divorced.timesOff);
    // the Routine "relationship_status" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var nationalityMaxDurationReached;
var nationalityMaxDuration;
var nationalityComponents;
function nationalityRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'nationality' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    nationalityClock.reset();
    routineTimer.reset();
    nationalityMaxDurationReached = false;
    // update component parameters for each repeat
    // reset nationality_china to account for continued clicks & clear times on/off
    nationality_china.reset()
    // reset nationality_malaysia to account for continued clicks & clear times on/off
    nationality_malaysia.reset()
    // reset nationality_other to account for continued clicks & clear times on/off
    nationality_other.reset()
    // reset nationality_prefernot to account for continued clicks & clear times on/off
    nationality_prefernot.reset()
    psychoJS.experiment.addData('nationality.started', globalClock.getTime());
    nationalityMaxDuration = null
    // keep track of which components have finished
    nationalityComponents = [];
    nationalityComponents.push(nationality_text);
    nationalityComponents.push(nationality_china);
    nationalityComponents.push(nationality_malaysia);
    nationalityComponents.push(nationality_other);
    nationalityComponents.push(nationality_prefernot);
    nationalityComponents.push(Q4);
    
    nationalityComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function nationalityRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'nationality' ---
    // get current time
    t = nationalityClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *nationality_text* updates
    if (t >= 0.0 && nationality_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nationality_text.tStart = t;  // (not accounting for frame time here)
      nationality_text.frameNStart = frameN;  // exact frame index
      
      nationality_text.setAutoDraw(true);
    }
    
    
    // if nationality_text is active this frame...
    if (nationality_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *nationality_china* updates
    if (t >= 0 && nationality_china.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nationality_china.tStart = t;  // (not accounting for frame time here)
      nationality_china.frameNStart = frameN;  // exact frame index
      
      nationality_china.setAutoDraw(true);
    }
    
    
    // if nationality_china is active this frame...
    if (nationality_china.status === PsychoJS.Status.STARTED) {
    }
    
    if (nationality_china.status === PsychoJS.Status.STARTED) {
      // check whether nationality_china has been pressed
      if (nationality_china.isClicked) {
        if (!nationality_china.wasClicked) {
          // store time of first click
          nationality_china.timesOn.push(nationality_china.clock.getTime());
          // store time clicked until
          nationality_china.timesOff.push(nationality_china.clock.getTime());
        } else {
          // update time clicked until;
          nationality_china.timesOff[nationality_china.timesOff.length - 1] = nationality_china.clock.getTime();
        }
        if (!nationality_china.wasClicked) {
          // end routine when nationality_china is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("nationality", "\u4e2d\u56fd");
        }
        // if nationality_china is still clicked next frame, it is not a new click
        nationality_china.wasClicked = true;
      } else {
        // if nationality_china is clicked next frame, it is a new click
        nationality_china.wasClicked = false;
      }
    } else {
      // keep clock at 0 if nationality_china hasn't started / has finished
      nationality_china.clock.reset();
      // if nationality_china is clicked next frame, it is a new click
      nationality_china.wasClicked = false;
    }
    
    // *nationality_malaysia* updates
    if (t >= 0 && nationality_malaysia.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nationality_malaysia.tStart = t;  // (not accounting for frame time here)
      nationality_malaysia.frameNStart = frameN;  // exact frame index
      
      nationality_malaysia.setAutoDraw(true);
    }
    
    
    // if nationality_malaysia is active this frame...
    if (nationality_malaysia.status === PsychoJS.Status.STARTED) {
    }
    
    if (nationality_malaysia.status === PsychoJS.Status.STARTED) {
      // check whether nationality_malaysia has been pressed
      if (nationality_malaysia.isClicked) {
        if (!nationality_malaysia.wasClicked) {
          // store time of first click
          nationality_malaysia.timesOn.push(nationality_malaysia.clock.getTime());
          // store time clicked until
          nationality_malaysia.timesOff.push(nationality_malaysia.clock.getTime());
        } else {
          // update time clicked until;
          nationality_malaysia.timesOff[nationality_malaysia.timesOff.length - 1] = nationality_malaysia.clock.getTime();
        }
        if (!nationality_malaysia.wasClicked) {
          // end routine when nationality_malaysia is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("nationality", "\u9a6c\u6765\u897f\u4e9a");
        }
        // if nationality_malaysia is still clicked next frame, it is not a new click
        nationality_malaysia.wasClicked = true;
      } else {
        // if nationality_malaysia is clicked next frame, it is a new click
        nationality_malaysia.wasClicked = false;
      }
    } else {
      // keep clock at 0 if nationality_malaysia hasn't started / has finished
      nationality_malaysia.clock.reset();
      // if nationality_malaysia is clicked next frame, it is a new click
      nationality_malaysia.wasClicked = false;
    }
    
    // *nationality_other* updates
    if (t >= 0 && nationality_other.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nationality_other.tStart = t;  // (not accounting for frame time here)
      nationality_other.frameNStart = frameN;  // exact frame index
      
      nationality_other.setAutoDraw(true);
    }
    
    
    // if nationality_other is active this frame...
    if (nationality_other.status === PsychoJS.Status.STARTED) {
    }
    
    if (nationality_other.status === PsychoJS.Status.STARTED) {
      // check whether nationality_other has been pressed
      if (nationality_other.isClicked) {
        if (!nationality_other.wasClicked) {
          // store time of first click
          nationality_other.timesOn.push(nationality_other.clock.getTime());
          // store time clicked until
          nationality_other.timesOff.push(nationality_other.clock.getTime());
        } else {
          // update time clicked until;
          nationality_other.timesOff[nationality_other.timesOff.length - 1] = nationality_other.clock.getTime();
        }
        if (!nationality_other.wasClicked) {
          // end routine when nationality_other is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("nationality", "\u5176\u5b83");
        }
        // if nationality_other is still clicked next frame, it is not a new click
        nationality_other.wasClicked = true;
      } else {
        // if nationality_other is clicked next frame, it is a new click
        nationality_other.wasClicked = false;
      }
    } else {
      // keep clock at 0 if nationality_other hasn't started / has finished
      nationality_other.clock.reset();
      // if nationality_other is clicked next frame, it is a new click
      nationality_other.wasClicked = false;
    }
    
    // *nationality_prefernot* updates
    if (t >= 0 && nationality_prefernot.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nationality_prefernot.tStart = t;  // (not accounting for frame time here)
      nationality_prefernot.frameNStart = frameN;  // exact frame index
      
      nationality_prefernot.setAutoDraw(true);
    }
    
    
    // if nationality_prefernot is active this frame...
    if (nationality_prefernot.status === PsychoJS.Status.STARTED) {
    }
    
    if (nationality_prefernot.status === PsychoJS.Status.STARTED) {
      // check whether nationality_prefernot has been pressed
      if (nationality_prefernot.isClicked) {
        if (!nationality_prefernot.wasClicked) {
          // store time of first click
          nationality_prefernot.timesOn.push(nationality_prefernot.clock.getTime());
          // store time clicked until
          nationality_prefernot.timesOff.push(nationality_prefernot.clock.getTime());
        } else {
          // update time clicked until;
          nationality_prefernot.timesOff[nationality_prefernot.timesOff.length - 1] = nationality_prefernot.clock.getTime();
        }
        if (!nationality_prefernot.wasClicked) {
          // end routine when nationality_prefernot is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("nationality", "\u4e0d\u613f\u900f\u9732");
        }
        // if nationality_prefernot is still clicked next frame, it is not a new click
        nationality_prefernot.wasClicked = true;
      } else {
        // if nationality_prefernot is clicked next frame, it is a new click
        nationality_prefernot.wasClicked = false;
      }
    } else {
      // keep clock at 0 if nationality_prefernot hasn't started / has finished
      nationality_prefernot.clock.reset();
      // if nationality_prefernot is clicked next frame, it is a new click
      nationality_prefernot.wasClicked = false;
    }
    
    // *Q4* updates
    if (t >= 0.0 && Q4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q4.tStart = t;  // (not accounting for frame time here)
      Q4.frameNStart = frameN;  // exact frame index
      
      Q4.setAutoDraw(true);
    }
    
    
    // if Q4 is active this frame...
    if (Q4.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    nationalityComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function nationalityRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'nationality' ---
    nationalityComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('nationality.stopped', globalClock.getTime());
    psychoJS.experiment.addData('nationality_china.numClicks', nationality_china.numClicks);
    psychoJS.experiment.addData('nationality_china.timesOn', nationality_china.timesOn);
    psychoJS.experiment.addData('nationality_china.timesOff', nationality_china.timesOff);
    psychoJS.experiment.addData('nationality_malaysia.numClicks', nationality_malaysia.numClicks);
    psychoJS.experiment.addData('nationality_malaysia.timesOn', nationality_malaysia.timesOn);
    psychoJS.experiment.addData('nationality_malaysia.timesOff', nationality_malaysia.timesOff);
    psychoJS.experiment.addData('nationality_other.numClicks', nationality_other.numClicks);
    psychoJS.experiment.addData('nationality_other.timesOn', nationality_other.timesOn);
    psychoJS.experiment.addData('nationality_other.timesOff', nationality_other.timesOff);
    psychoJS.experiment.addData('nationality_prefernot.numClicks', nationality_prefernot.numClicks);
    psychoJS.experiment.addData('nationality_prefernot.timesOn', nationality_prefernot.timesOn);
    psychoJS.experiment.addData('nationality_prefernot.timesOff', nationality_prefernot.timesOff);
    // the Routine "nationality" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var EducationMaxDurationReached;
var EducationMaxDuration;
var EducationComponents;
function EducationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Education' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    EducationClock.reset();
    routineTimer.reset();
    EducationMaxDurationReached = false;
    // update component parameters for each repeat
    // reset edu_btn_1 to account for continued clicks & clear times on/off
    edu_btn_1.reset()
    // reset edu_btn_2 to account for continued clicks & clear times on/off
    edu_btn_2.reset()
    // reset edu_btn_3 to account for continued clicks & clear times on/off
    edu_btn_3.reset()
    // reset edu_btn_4 to account for continued clicks & clear times on/off
    edu_btn_4.reset()
    // reset edu_btn_5 to account for continued clicks & clear times on/off
    edu_btn_5.reset()
    // reset edu_btn_6 to account for continued clicks & clear times on/off
    edu_btn_6.reset()
    psychoJS.experiment.addData('Education.started', globalClock.getTime());
    EducationMaxDuration = null
    // keep track of which components have finished
    EducationComponents = [];
    EducationComponents.push(Q_edu_level_text);
    EducationComponents.push(edu_btn_1);
    EducationComponents.push(edu_btn_2);
    EducationComponents.push(edu_btn_3);
    EducationComponents.push(edu_btn_4);
    EducationComponents.push(edu_btn_5);
    EducationComponents.push(edu_btn_6);
    EducationComponents.push(Q5);
    
    EducationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function EducationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Education' ---
    // get current time
    t = EducationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Q_edu_level_text* updates
    if (t >= 0.0 && Q_edu_level_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q_edu_level_text.tStart = t;  // (not accounting for frame time here)
      Q_edu_level_text.frameNStart = frameN;  // exact frame index
      
      Q_edu_level_text.setAutoDraw(true);
    }
    
    
    // if Q_edu_level_text is active this frame...
    if (Q_edu_level_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *edu_btn_1* updates
    if (t >= 0 && edu_btn_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      edu_btn_1.tStart = t;  // (not accounting for frame time here)
      edu_btn_1.frameNStart = frameN;  // exact frame index
      
      edu_btn_1.setAutoDraw(true);
    }
    
    
    // if edu_btn_1 is active this frame...
    if (edu_btn_1.status === PsychoJS.Status.STARTED) {
    }
    
    if (edu_btn_1.status === PsychoJS.Status.STARTED) {
      // check whether edu_btn_1 has been pressed
      if (edu_btn_1.isClicked) {
        if (!edu_btn_1.wasClicked) {
          // store time of first click
          edu_btn_1.timesOn.push(edu_btn_1.clock.getTime());
          // store time clicked until
          edu_btn_1.timesOff.push(edu_btn_1.clock.getTime());
        } else {
          // update time clicked until;
          edu_btn_1.timesOff[edu_btn_1.timesOff.length - 1] = edu_btn_1.clock.getTime();
        }
        if (!edu_btn_1.wasClicked) {
          // end routine when edu_btn_1 is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("edu_level", "\u5c0f\u5b66");
        }
        // if edu_btn_1 is still clicked next frame, it is not a new click
        edu_btn_1.wasClicked = true;
      } else {
        // if edu_btn_1 is clicked next frame, it is a new click
        edu_btn_1.wasClicked = false;
      }
    } else {
      // keep clock at 0 if edu_btn_1 hasn't started / has finished
      edu_btn_1.clock.reset();
      // if edu_btn_1 is clicked next frame, it is a new click
      edu_btn_1.wasClicked = false;
    }
    
    // *edu_btn_2* updates
    if (t >= 0 && edu_btn_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      edu_btn_2.tStart = t;  // (not accounting for frame time here)
      edu_btn_2.frameNStart = frameN;  // exact frame index
      
      edu_btn_2.setAutoDraw(true);
    }
    
    
    // if edu_btn_2 is active this frame...
    if (edu_btn_2.status === PsychoJS.Status.STARTED) {
    }
    
    if (edu_btn_2.status === PsychoJS.Status.STARTED) {
      // check whether edu_btn_2 has been pressed
      if (edu_btn_2.isClicked) {
        if (!edu_btn_2.wasClicked) {
          // store time of first click
          edu_btn_2.timesOn.push(edu_btn_2.clock.getTime());
          // store time clicked until
          edu_btn_2.timesOff.push(edu_btn_2.clock.getTime());
        } else {
          // update time clicked until;
          edu_btn_2.timesOff[edu_btn_2.timesOff.length - 1] = edu_btn_2.clock.getTime();
        }
        if (!edu_btn_2.wasClicked) {
          // end routine when edu_btn_2 is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("edu_level", "\u521d\u4e2d");
        }
        // if edu_btn_2 is still clicked next frame, it is not a new click
        edu_btn_2.wasClicked = true;
      } else {
        // if edu_btn_2 is clicked next frame, it is a new click
        edu_btn_2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if edu_btn_2 hasn't started / has finished
      edu_btn_2.clock.reset();
      // if edu_btn_2 is clicked next frame, it is a new click
      edu_btn_2.wasClicked = false;
    }
    
    // *edu_btn_3* updates
    if (t >= 0 && edu_btn_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      edu_btn_3.tStart = t;  // (not accounting for frame time here)
      edu_btn_3.frameNStart = frameN;  // exact frame index
      
      edu_btn_3.setAutoDraw(true);
    }
    
    
    // if edu_btn_3 is active this frame...
    if (edu_btn_3.status === PsychoJS.Status.STARTED) {
    }
    
    if (edu_btn_3.status === PsychoJS.Status.STARTED) {
      // check whether edu_btn_3 has been pressed
      if (edu_btn_3.isClicked) {
        if (!edu_btn_3.wasClicked) {
          // store time of first click
          edu_btn_3.timesOn.push(edu_btn_3.clock.getTime());
          // store time clicked until
          edu_btn_3.timesOff.push(edu_btn_3.clock.getTime());
        } else {
          // update time clicked until;
          edu_btn_3.timesOff[edu_btn_3.timesOff.length - 1] = edu_btn_3.clock.getTime();
        }
        if (!edu_btn_3.wasClicked) {
          // end routine when edu_btn_3 is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("edu_level", "3");
        }
        // if edu_btn_3 is still clicked next frame, it is not a new click
        edu_btn_3.wasClicked = true;
      } else {
        // if edu_btn_3 is clicked next frame, it is a new click
        edu_btn_3.wasClicked = false;
      }
    } else {
      // keep clock at 0 if edu_btn_3 hasn't started / has finished
      edu_btn_3.clock.reset();
      // if edu_btn_3 is clicked next frame, it is a new click
      edu_btn_3.wasClicked = false;
    }
    
    // *edu_btn_4* updates
    if (t >= 0 && edu_btn_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      edu_btn_4.tStart = t;  // (not accounting for frame time here)
      edu_btn_4.frameNStart = frameN;  // exact frame index
      
      edu_btn_4.setAutoDraw(true);
    }
    
    
    // if edu_btn_4 is active this frame...
    if (edu_btn_4.status === PsychoJS.Status.STARTED) {
    }
    
    if (edu_btn_4.status === PsychoJS.Status.STARTED) {
      // check whether edu_btn_4 has been pressed
      if (edu_btn_4.isClicked) {
        if (!edu_btn_4.wasClicked) {
          // store time of first click
          edu_btn_4.timesOn.push(edu_btn_4.clock.getTime());
          // store time clicked until
          edu_btn_4.timesOff.push(edu_btn_4.clock.getTime());
        } else {
          // update time clicked until;
          edu_btn_4.timesOff[edu_btn_4.timesOff.length - 1] = edu_btn_4.clock.getTime();
        }
        if (!edu_btn_4.wasClicked) {
          // end routine when edu_btn_4 is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("edu_level", "\u5927\u4e13");
        }
        // if edu_btn_4 is still clicked next frame, it is not a new click
        edu_btn_4.wasClicked = true;
      } else {
        // if edu_btn_4 is clicked next frame, it is a new click
        edu_btn_4.wasClicked = false;
      }
    } else {
      // keep clock at 0 if edu_btn_4 hasn't started / has finished
      edu_btn_4.clock.reset();
      // if edu_btn_4 is clicked next frame, it is a new click
      edu_btn_4.wasClicked = false;
    }
    
    // *edu_btn_5* updates
    if (t >= 0 && edu_btn_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      edu_btn_5.tStart = t;  // (not accounting for frame time here)
      edu_btn_5.frameNStart = frameN;  // exact frame index
      
      edu_btn_5.setAutoDraw(true);
    }
    
    
    // if edu_btn_5 is active this frame...
    if (edu_btn_5.status === PsychoJS.Status.STARTED) {
    }
    
    if (edu_btn_5.status === PsychoJS.Status.STARTED) {
      // check whether edu_btn_5 has been pressed
      if (edu_btn_5.isClicked) {
        if (!edu_btn_5.wasClicked) {
          // store time of first click
          edu_btn_5.timesOn.push(edu_btn_5.clock.getTime());
          // store time clicked until
          edu_btn_5.timesOff.push(edu_btn_5.clock.getTime());
        } else {
          // update time clicked until;
          edu_btn_5.timesOff[edu_btn_5.timesOff.length - 1] = edu_btn_5.clock.getTime();
        }
        if (!edu_btn_5.wasClicked) {
          // end routine when edu_btn_5 is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("edu_level", "\u672c\u79d1");
        }
        // if edu_btn_5 is still clicked next frame, it is not a new click
        edu_btn_5.wasClicked = true;
      } else {
        // if edu_btn_5 is clicked next frame, it is a new click
        edu_btn_5.wasClicked = false;
      }
    } else {
      // keep clock at 0 if edu_btn_5 hasn't started / has finished
      edu_btn_5.clock.reset();
      // if edu_btn_5 is clicked next frame, it is a new click
      edu_btn_5.wasClicked = false;
    }
    
    // *edu_btn_6* updates
    if (t >= 0 && edu_btn_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      edu_btn_6.tStart = t;  // (not accounting for frame time here)
      edu_btn_6.frameNStart = frameN;  // exact frame index
      
      edu_btn_6.setAutoDraw(true);
    }
    
    
    // if edu_btn_6 is active this frame...
    if (edu_btn_6.status === PsychoJS.Status.STARTED) {
    }
    
    if (edu_btn_6.status === PsychoJS.Status.STARTED) {
      // check whether edu_btn_6 has been pressed
      if (edu_btn_6.isClicked) {
        if (!edu_btn_6.wasClicked) {
          // store time of first click
          edu_btn_6.timesOn.push(edu_btn_6.clock.getTime());
          // store time clicked until
          edu_btn_6.timesOff.push(edu_btn_6.clock.getTime());
        } else {
          // update time clicked until;
          edu_btn_6.timesOff[edu_btn_6.timesOff.length - 1] = edu_btn_6.clock.getTime();
        }
        if (!edu_btn_6.wasClicked) {
          // end routine when edu_btn_6 is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("edu_level", "\u7855\u58eb");
        }
        // if edu_btn_6 is still clicked next frame, it is not a new click
        edu_btn_6.wasClicked = true;
      } else {
        // if edu_btn_6 is clicked next frame, it is a new click
        edu_btn_6.wasClicked = false;
      }
    } else {
      // keep clock at 0 if edu_btn_6 hasn't started / has finished
      edu_btn_6.clock.reset();
      // if edu_btn_6 is clicked next frame, it is a new click
      edu_btn_6.wasClicked = false;
    }
    
    // *Q5* updates
    if (t >= 0.0 && Q5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q5.tStart = t;  // (not accounting for frame time here)
      Q5.frameNStart = frameN;  // exact frame index
      
      Q5.setAutoDraw(true);
    }
    
    
    // if Q5 is active this frame...
    if (Q5.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    EducationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function EducationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Education' ---
    EducationComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Education.stopped', globalClock.getTime());
    psychoJS.experiment.addData('edu_btn_1.numClicks', edu_btn_1.numClicks);
    psychoJS.experiment.addData('edu_btn_1.timesOn', edu_btn_1.timesOn);
    psychoJS.experiment.addData('edu_btn_1.timesOff', edu_btn_1.timesOff);
    psychoJS.experiment.addData('edu_btn_2.numClicks', edu_btn_2.numClicks);
    psychoJS.experiment.addData('edu_btn_2.timesOn', edu_btn_2.timesOn);
    psychoJS.experiment.addData('edu_btn_2.timesOff', edu_btn_2.timesOff);
    psychoJS.experiment.addData('edu_btn_3.numClicks', edu_btn_3.numClicks);
    psychoJS.experiment.addData('edu_btn_3.timesOn', edu_btn_3.timesOn);
    psychoJS.experiment.addData('edu_btn_3.timesOff', edu_btn_3.timesOff);
    psychoJS.experiment.addData('edu_btn_4.numClicks', edu_btn_4.numClicks);
    psychoJS.experiment.addData('edu_btn_4.timesOn', edu_btn_4.timesOn);
    psychoJS.experiment.addData('edu_btn_4.timesOff', edu_btn_4.timesOff);
    psychoJS.experiment.addData('edu_btn_5.numClicks', edu_btn_5.numClicks);
    psychoJS.experiment.addData('edu_btn_5.timesOn', edu_btn_5.timesOn);
    psychoJS.experiment.addData('edu_btn_5.timesOff', edu_btn_5.timesOff);
    psychoJS.experiment.addData('edu_btn_6.numClicks', edu_btn_6.numClicks);
    psychoJS.experiment.addData('edu_btn_6.timesOn', edu_btn_6.timesOn);
    psychoJS.experiment.addData('edu_btn_6.timesOff', edu_btn_6.timesOff);
    // the Routine "Education" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var religionMaxDurationReached;
var religionMaxDuration;
var religionComponents;
function religionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'religion' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    religionClock.reset();
    routineTimer.reset();
    religionMaxDurationReached = false;
    // update component parameters for each repeat
    // reset religion_btn_1 to account for continued clicks & clear times on/off
    religion_btn_1.reset()
    // reset religion_btn_2 to account for continued clicks & clear times on/off
    religion_btn_2.reset()
    // reset religion_btn_3 to account for continued clicks & clear times on/off
    religion_btn_3.reset()
    // reset religion_btn_4 to account for continued clicks & clear times on/off
    religion_btn_4.reset()
    // reset religion_btn_5 to account for continued clicks & clear times on/off
    religion_btn_5.reset()
    // reset religion_btn_6 to account for continued clicks & clear times on/off
    religion_btn_6.reset()
    // reset religion_btn_7 to account for continued clicks & clear times on/off
    religion_btn_7.reset()
    psychoJS.experiment.addData('religion.started', globalClock.getTime());
    religionMaxDuration = null
    // keep track of which components have finished
    religionComponents = [];
    religionComponents.push(Q_religion_text);
    religionComponents.push(religion_btn_1);
    religionComponents.push(religion_btn_2);
    religionComponents.push(religion_btn_3);
    religionComponents.push(religion_btn_4);
    religionComponents.push(religion_btn_5);
    religionComponents.push(religion_btn_6);
    religionComponents.push(religion_btn_7);
    religionComponents.push(Q6);
    
    religionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function religionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'religion' ---
    // get current time
    t = religionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Q_religion_text* updates
    if (t >= 0.0 && Q_religion_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q_religion_text.tStart = t;  // (not accounting for frame time here)
      Q_religion_text.frameNStart = frameN;  // exact frame index
      
      Q_religion_text.setAutoDraw(true);
    }
    
    
    // if Q_religion_text is active this frame...
    if (Q_religion_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *religion_btn_1* updates
    if (t >= 0 && religion_btn_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      religion_btn_1.tStart = t;  // (not accounting for frame time here)
      religion_btn_1.frameNStart = frameN;  // exact frame index
      
      religion_btn_1.setAutoDraw(true);
    }
    
    
    // if religion_btn_1 is active this frame...
    if (religion_btn_1.status === PsychoJS.Status.STARTED) {
    }
    
    if (religion_btn_1.status === PsychoJS.Status.STARTED) {
      // check whether religion_btn_1 has been pressed
      if (religion_btn_1.isClicked) {
        if (!religion_btn_1.wasClicked) {
          // store time of first click
          religion_btn_1.timesOn.push(religion_btn_1.clock.getTime());
          // store time clicked until
          religion_btn_1.timesOff.push(religion_btn_1.clock.getTime());
        } else {
          // update time clicked until;
          religion_btn_1.timesOff[religion_btn_1.timesOff.length - 1] = religion_btn_1.clock.getTime();
        }
        if (!religion_btn_1.wasClicked) {
          // end routine when religion_btn_1 is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("religion_type", "\u4f5b\u6559");
        }
        // if religion_btn_1 is still clicked next frame, it is not a new click
        religion_btn_1.wasClicked = true;
      } else {
        // if religion_btn_1 is clicked next frame, it is a new click
        religion_btn_1.wasClicked = false;
      }
    } else {
      // keep clock at 0 if religion_btn_1 hasn't started / has finished
      religion_btn_1.clock.reset();
      // if religion_btn_1 is clicked next frame, it is a new click
      religion_btn_1.wasClicked = false;
    }
    
    // *religion_btn_2* updates
    if (t >= 0 && religion_btn_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      religion_btn_2.tStart = t;  // (not accounting for frame time here)
      religion_btn_2.frameNStart = frameN;  // exact frame index
      
      religion_btn_2.setAutoDraw(true);
    }
    
    
    // if religion_btn_2 is active this frame...
    if (religion_btn_2.status === PsychoJS.Status.STARTED) {
    }
    
    if (religion_btn_2.status === PsychoJS.Status.STARTED) {
      // check whether religion_btn_2 has been pressed
      if (religion_btn_2.isClicked) {
        if (!religion_btn_2.wasClicked) {
          // store time of first click
          religion_btn_2.timesOn.push(religion_btn_2.clock.getTime());
          // store time clicked until
          religion_btn_2.timesOff.push(religion_btn_2.clock.getTime());
        } else {
          // update time clicked until;
          religion_btn_2.timesOff[religion_btn_2.timesOff.length - 1] = religion_btn_2.clock.getTime();
        }
        if (!religion_btn_2.wasClicked) {
          // end routine when religion_btn_2 is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("religion_type", "\u57fa\u7763\u6559");
        }
        // if religion_btn_2 is still clicked next frame, it is not a new click
        religion_btn_2.wasClicked = true;
      } else {
        // if religion_btn_2 is clicked next frame, it is a new click
        religion_btn_2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if religion_btn_2 hasn't started / has finished
      religion_btn_2.clock.reset();
      // if religion_btn_2 is clicked next frame, it is a new click
      religion_btn_2.wasClicked = false;
    }
    
    // *religion_btn_3* updates
    if (t >= 0 && religion_btn_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      religion_btn_3.tStart = t;  // (not accounting for frame time here)
      religion_btn_3.frameNStart = frameN;  // exact frame index
      
      religion_btn_3.setAutoDraw(true);
    }
    
    
    // if religion_btn_3 is active this frame...
    if (religion_btn_3.status === PsychoJS.Status.STARTED) {
    }
    
    if (religion_btn_3.status === PsychoJS.Status.STARTED) {
      // check whether religion_btn_3 has been pressed
      if (religion_btn_3.isClicked) {
        if (!religion_btn_3.wasClicked) {
          // store time of first click
          religion_btn_3.timesOn.push(religion_btn_3.clock.getTime());
          // store time clicked until
          religion_btn_3.timesOff.push(religion_btn_3.clock.getTime());
        } else {
          // update time clicked until;
          religion_btn_3.timesOff[religion_btn_3.timesOff.length - 1] = religion_btn_3.clock.getTime();
        }
        if (!religion_btn_3.wasClicked) {
          // end routine when religion_btn_3 is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("religion_type", "\u4f0a\u65af\u5170\u6559");
        }
        // if religion_btn_3 is still clicked next frame, it is not a new click
        religion_btn_3.wasClicked = true;
      } else {
        // if religion_btn_3 is clicked next frame, it is a new click
        religion_btn_3.wasClicked = false;
      }
    } else {
      // keep clock at 0 if religion_btn_3 hasn't started / has finished
      religion_btn_3.clock.reset();
      // if religion_btn_3 is clicked next frame, it is a new click
      religion_btn_3.wasClicked = false;
    }
    
    // *religion_btn_4* updates
    if (t >= 0 && religion_btn_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      religion_btn_4.tStart = t;  // (not accounting for frame time here)
      religion_btn_4.frameNStart = frameN;  // exact frame index
      
      religion_btn_4.setAutoDraw(true);
    }
    
    
    // if religion_btn_4 is active this frame...
    if (religion_btn_4.status === PsychoJS.Status.STARTED) {
    }
    
    if (religion_btn_4.status === PsychoJS.Status.STARTED) {
      // check whether religion_btn_4 has been pressed
      if (religion_btn_4.isClicked) {
        if (!religion_btn_4.wasClicked) {
          // store time of first click
          religion_btn_4.timesOn.push(religion_btn_4.clock.getTime());
          // store time clicked until
          religion_btn_4.timesOff.push(religion_btn_4.clock.getTime());
        } else {
          // update time clicked until;
          religion_btn_4.timesOff[religion_btn_4.timesOff.length - 1] = religion_btn_4.clock.getTime();
        }
        if (!religion_btn_4.wasClicked) {
          // end routine when religion_btn_4 is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("religion_type", "\u5370\u5ea6\u6559");
        }
        // if religion_btn_4 is still clicked next frame, it is not a new click
        religion_btn_4.wasClicked = true;
      } else {
        // if religion_btn_4 is clicked next frame, it is a new click
        religion_btn_4.wasClicked = false;
      }
    } else {
      // keep clock at 0 if religion_btn_4 hasn't started / has finished
      religion_btn_4.clock.reset();
      // if religion_btn_4 is clicked next frame, it is a new click
      religion_btn_4.wasClicked = false;
    }
    
    // *religion_btn_5* updates
    if (t >= 0 && religion_btn_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      religion_btn_5.tStart = t;  // (not accounting for frame time here)
      religion_btn_5.frameNStart = frameN;  // exact frame index
      
      religion_btn_5.setAutoDraw(true);
    }
    
    
    // if religion_btn_5 is active this frame...
    if (religion_btn_5.status === PsychoJS.Status.STARTED) {
    }
    
    if (religion_btn_5.status === PsychoJS.Status.STARTED) {
      // check whether religion_btn_5 has been pressed
      if (religion_btn_5.isClicked) {
        if (!religion_btn_5.wasClicked) {
          // store time of first click
          religion_btn_5.timesOn.push(religion_btn_5.clock.getTime());
          // store time clicked until
          religion_btn_5.timesOff.push(religion_btn_5.clock.getTime());
        } else {
          // update time clicked until;
          religion_btn_5.timesOff[religion_btn_5.timesOff.length - 1] = religion_btn_5.clock.getTime();
        }
        if (!religion_btn_5.wasClicked) {
          // end routine when religion_btn_5 is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("religion_type", "\u9053\u6559");
        }
        // if religion_btn_5 is still clicked next frame, it is not a new click
        religion_btn_5.wasClicked = true;
      } else {
        // if religion_btn_5 is clicked next frame, it is a new click
        religion_btn_5.wasClicked = false;
      }
    } else {
      // keep clock at 0 if religion_btn_5 hasn't started / has finished
      religion_btn_5.clock.reset();
      // if religion_btn_5 is clicked next frame, it is a new click
      religion_btn_5.wasClicked = false;
    }
    
    // *religion_btn_6* updates
    if (t >= 0 && religion_btn_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      religion_btn_6.tStart = t;  // (not accounting for frame time here)
      religion_btn_6.frameNStart = frameN;  // exact frame index
      
      religion_btn_6.setAutoDraw(true);
    }
    
    
    // if religion_btn_6 is active this frame...
    if (religion_btn_6.status === PsychoJS.Status.STARTED) {
    }
    
    if (religion_btn_6.status === PsychoJS.Status.STARTED) {
      // check whether religion_btn_6 has been pressed
      if (religion_btn_6.isClicked) {
        if (!religion_btn_6.wasClicked) {
          // store time of first click
          religion_btn_6.timesOn.push(religion_btn_6.clock.getTime());
          // store time clicked until
          religion_btn_6.timesOff.push(religion_btn_6.clock.getTime());
        } else {
          // update time clicked until;
          religion_btn_6.timesOff[religion_btn_6.timesOff.length - 1] = religion_btn_6.clock.getTime();
        }
        if (!religion_btn_6.wasClicked) {
          // end routine when religion_btn_6 is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("religion_type", "\u65e0\u5b97\u6559");
        }
        // if religion_btn_6 is still clicked next frame, it is not a new click
        religion_btn_6.wasClicked = true;
      } else {
        // if religion_btn_6 is clicked next frame, it is a new click
        religion_btn_6.wasClicked = false;
      }
    } else {
      // keep clock at 0 if religion_btn_6 hasn't started / has finished
      religion_btn_6.clock.reset();
      // if religion_btn_6 is clicked next frame, it is a new click
      religion_btn_6.wasClicked = false;
    }
    
    // *religion_btn_7* updates
    if (t >= 0 && religion_btn_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      religion_btn_7.tStart = t;  // (not accounting for frame time here)
      religion_btn_7.frameNStart = frameN;  // exact frame index
      
      religion_btn_7.setAutoDraw(true);
    }
    
    
    // if religion_btn_7 is active this frame...
    if (religion_btn_7.status === PsychoJS.Status.STARTED) {
    }
    
    if (religion_btn_7.status === PsychoJS.Status.STARTED) {
      // check whether religion_btn_7 has been pressed
      if (religion_btn_7.isClicked) {
        if (!religion_btn_7.wasClicked) {
          // store time of first click
          religion_btn_7.timesOn.push(religion_btn_7.clock.getTime());
          // store time clicked until
          religion_btn_7.timesOff.push(religion_btn_7.clock.getTime());
        } else {
          // update time clicked until;
          religion_btn_7.timesOff[religion_btn_7.timesOff.length - 1] = religion_btn_7.clock.getTime();
        }
        if (!religion_btn_7.wasClicked) {
          // end routine when religion_btn_7 is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("religion_type", "\u5176\u5b83");
        }
        // if religion_btn_7 is still clicked next frame, it is not a new click
        religion_btn_7.wasClicked = true;
      } else {
        // if religion_btn_7 is clicked next frame, it is a new click
        religion_btn_7.wasClicked = false;
      }
    } else {
      // keep clock at 0 if religion_btn_7 hasn't started / has finished
      religion_btn_7.clock.reset();
      // if religion_btn_7 is clicked next frame, it is a new click
      religion_btn_7.wasClicked = false;
    }
    
    // *Q6* updates
    if (t >= 0.0 && Q6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q6.tStart = t;  // (not accounting for frame time here)
      Q6.frameNStart = frameN;  // exact frame index
      
      Q6.setAutoDraw(true);
    }
    
    
    // if Q6 is active this frame...
    if (Q6.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    religionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function religionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'religion' ---
    religionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('religion.stopped', globalClock.getTime());
    psychoJS.experiment.addData('religion_btn_1.numClicks', religion_btn_1.numClicks);
    psychoJS.experiment.addData('religion_btn_1.timesOn', religion_btn_1.timesOn);
    psychoJS.experiment.addData('religion_btn_1.timesOff', religion_btn_1.timesOff);
    psychoJS.experiment.addData('religion_btn_2.numClicks', religion_btn_2.numClicks);
    psychoJS.experiment.addData('religion_btn_2.timesOn', religion_btn_2.timesOn);
    psychoJS.experiment.addData('religion_btn_2.timesOff', religion_btn_2.timesOff);
    psychoJS.experiment.addData('religion_btn_3.numClicks', religion_btn_3.numClicks);
    psychoJS.experiment.addData('religion_btn_3.timesOn', religion_btn_3.timesOn);
    psychoJS.experiment.addData('religion_btn_3.timesOff', religion_btn_3.timesOff);
    psychoJS.experiment.addData('religion_btn_4.numClicks', religion_btn_4.numClicks);
    psychoJS.experiment.addData('religion_btn_4.timesOn', religion_btn_4.timesOn);
    psychoJS.experiment.addData('religion_btn_4.timesOff', religion_btn_4.timesOff);
    psychoJS.experiment.addData('religion_btn_5.numClicks', religion_btn_5.numClicks);
    psychoJS.experiment.addData('religion_btn_5.timesOn', religion_btn_5.timesOn);
    psychoJS.experiment.addData('religion_btn_5.timesOff', religion_btn_5.timesOff);
    psychoJS.experiment.addData('religion_btn_6.numClicks', religion_btn_6.numClicks);
    psychoJS.experiment.addData('religion_btn_6.timesOn', religion_btn_6.timesOn);
    psychoJS.experiment.addData('religion_btn_6.timesOff', religion_btn_6.timesOff);
    psychoJS.experiment.addData('religion_btn_7.numClicks', religion_btn_7.numClicks);
    psychoJS.experiment.addData('religion_btn_7.timesOn', religion_btn_7.timesOn);
    psychoJS.experiment.addData('religion_btn_7.timesOff', religion_btn_7.timesOff);
    // the Routine "religion" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ethnicityMaxDurationReached;
var ethnicityMaxDuration;
var ethnicityComponents;
function ethnicityRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ethnicity' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    ethnicityClock.reset();
    routineTimer.reset();
    ethnicityMaxDurationReached = false;
    // update component parameters for each repeat
    // reset ethnicity_btn_1 to account for continued clicks & clear times on/off
    ethnicity_btn_1.reset()
    // reset ethnicity_btn_2 to account for continued clicks & clear times on/off
    ethnicity_btn_2.reset()
    // reset ethnicity_3 to account for continued clicks & clear times on/off
    ethnicity_3.reset()
    psychoJS.experiment.addData('ethnicity.started', globalClock.getTime());
    ethnicityMaxDuration = null
    // keep track of which components have finished
    ethnicityComponents = [];
    ethnicityComponents.push(Q_ethnicity_text);
    ethnicityComponents.push(ethnicity_btn_1);
    ethnicityComponents.push(ethnicity_btn_2);
    ethnicityComponents.push(ethnicity_3);
    ethnicityComponents.push(Q7);
    
    ethnicityComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function ethnicityRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ethnicity' ---
    // get current time
    t = ethnicityClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Q_ethnicity_text* updates
    if (t >= 0.0 && Q_ethnicity_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q_ethnicity_text.tStart = t;  // (not accounting for frame time here)
      Q_ethnicity_text.frameNStart = frameN;  // exact frame index
      
      Q_ethnicity_text.setAutoDraw(true);
    }
    
    
    // if Q_ethnicity_text is active this frame...
    if (Q_ethnicity_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *ethnicity_btn_1* updates
    if (t >= 0 && ethnicity_btn_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ethnicity_btn_1.tStart = t;  // (not accounting for frame time here)
      ethnicity_btn_1.frameNStart = frameN;  // exact frame index
      
      ethnicity_btn_1.setAutoDraw(true);
    }
    
    
    // if ethnicity_btn_1 is active this frame...
    if (ethnicity_btn_1.status === PsychoJS.Status.STARTED) {
    }
    
    if (ethnicity_btn_1.status === PsychoJS.Status.STARTED) {
      // check whether ethnicity_btn_1 has been pressed
      if (ethnicity_btn_1.isClicked) {
        if (!ethnicity_btn_1.wasClicked) {
          // store time of first click
          ethnicity_btn_1.timesOn.push(ethnicity_btn_1.clock.getTime());
          // store time clicked until
          ethnicity_btn_1.timesOff.push(ethnicity_btn_1.clock.getTime());
        } else {
          // update time clicked until;
          ethnicity_btn_1.timesOff[ethnicity_btn_1.timesOff.length - 1] = ethnicity_btn_1.clock.getTime();
        }
        if (!ethnicity_btn_1.wasClicked) {
          // end routine when ethnicity_btn_1 is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("ethnicity", "\u6c49\u65cf");
        }
        // if ethnicity_btn_1 is still clicked next frame, it is not a new click
        ethnicity_btn_1.wasClicked = true;
      } else {
        // if ethnicity_btn_1 is clicked next frame, it is a new click
        ethnicity_btn_1.wasClicked = false;
      }
    } else {
      // keep clock at 0 if ethnicity_btn_1 hasn't started / has finished
      ethnicity_btn_1.clock.reset();
      // if ethnicity_btn_1 is clicked next frame, it is a new click
      ethnicity_btn_1.wasClicked = false;
    }
    
    // *ethnicity_btn_2* updates
    if (t >= 0 && ethnicity_btn_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ethnicity_btn_2.tStart = t;  // (not accounting for frame time here)
      ethnicity_btn_2.frameNStart = frameN;  // exact frame index
      
      ethnicity_btn_2.setAutoDraw(true);
    }
    
    
    // if ethnicity_btn_2 is active this frame...
    if (ethnicity_btn_2.status === PsychoJS.Status.STARTED) {
    }
    
    if (ethnicity_btn_2.status === PsychoJS.Status.STARTED) {
      // check whether ethnicity_btn_2 has been pressed
      if (ethnicity_btn_2.isClicked) {
        if (!ethnicity_btn_2.wasClicked) {
          // store time of first click
          ethnicity_btn_2.timesOn.push(ethnicity_btn_2.clock.getTime());
          // store time clicked until
          ethnicity_btn_2.timesOff.push(ethnicity_btn_2.clock.getTime());
        } else {
          // update time clicked until;
          ethnicity_btn_2.timesOff[ethnicity_btn_2.timesOff.length - 1] = ethnicity_btn_2.clock.getTime();
        }
        if (!ethnicity_btn_2.wasClicked) {
          // end routine when ethnicity_btn_2 is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("ethnicity", "\u5c11\u6570\u6c11\u65cf");
        }
        // if ethnicity_btn_2 is still clicked next frame, it is not a new click
        ethnicity_btn_2.wasClicked = true;
      } else {
        // if ethnicity_btn_2 is clicked next frame, it is a new click
        ethnicity_btn_2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if ethnicity_btn_2 hasn't started / has finished
      ethnicity_btn_2.clock.reset();
      // if ethnicity_btn_2 is clicked next frame, it is a new click
      ethnicity_btn_2.wasClicked = false;
    }
    
    // *ethnicity_3* updates
    if (t >= 0 && ethnicity_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ethnicity_3.tStart = t;  // (not accounting for frame time here)
      ethnicity_3.frameNStart = frameN;  // exact frame index
      
      ethnicity_3.setAutoDraw(true);
    }
    
    
    // if ethnicity_3 is active this frame...
    if (ethnicity_3.status === PsychoJS.Status.STARTED) {
    }
    
    if (ethnicity_3.status === PsychoJS.Status.STARTED) {
      // check whether ethnicity_3 has been pressed
      if (ethnicity_3.isClicked) {
        if (!ethnicity_3.wasClicked) {
          // store time of first click
          ethnicity_3.timesOn.push(ethnicity_3.clock.getTime());
          // store time clicked until
          ethnicity_3.timesOff.push(ethnicity_3.clock.getTime());
        } else {
          // update time clicked until;
          ethnicity_3.timesOff[ethnicity_3.timesOff.length - 1] = ethnicity_3.clock.getTime();
        }
        if (!ethnicity_3.wasClicked) {
          // end routine when ethnicity_3 is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("ethnicity", "\u5176\u4ed6");
        }
        // if ethnicity_3 is still clicked next frame, it is not a new click
        ethnicity_3.wasClicked = true;
      } else {
        // if ethnicity_3 is clicked next frame, it is a new click
        ethnicity_3.wasClicked = false;
      }
    } else {
      // keep clock at 0 if ethnicity_3 hasn't started / has finished
      ethnicity_3.clock.reset();
      // if ethnicity_3 is clicked next frame, it is a new click
      ethnicity_3.wasClicked = false;
    }
    
    // *Q7* updates
    if (t >= 0.0 && Q7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q7.tStart = t;  // (not accounting for frame time here)
      Q7.frameNStart = frameN;  // exact frame index
      
      Q7.setAutoDraw(true);
    }
    
    
    // if Q7 is active this frame...
    if (Q7.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ethnicityComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ethnicityRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ethnicity' ---
    ethnicityComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('ethnicity.stopped', globalClock.getTime());
    psychoJS.experiment.addData('ethnicity_btn_1.numClicks', ethnicity_btn_1.numClicks);
    psychoJS.experiment.addData('ethnicity_btn_1.timesOn', ethnicity_btn_1.timesOn);
    psychoJS.experiment.addData('ethnicity_btn_1.timesOff', ethnicity_btn_1.timesOff);
    psychoJS.experiment.addData('ethnicity_btn_2.numClicks', ethnicity_btn_2.numClicks);
    psychoJS.experiment.addData('ethnicity_btn_2.timesOn', ethnicity_btn_2.timesOn);
    psychoJS.experiment.addData('ethnicity_btn_2.timesOff', ethnicity_btn_2.timesOff);
    psychoJS.experiment.addData('ethnicity_3.numClicks', ethnicity_3.numClicks);
    psychoJS.experiment.addData('ethnicity_3.timesOn', ethnicity_3.timesOn);
    psychoJS.experiment.addData('ethnicity_3.timesOff', ethnicity_3.timesOff);
    // the Routine "ethnicity" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var HouseholdStructureMaxDurationReached;
var HouseholdStructureMaxDuration;
var HouseholdStructureComponents;
function HouseholdStructureRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'HouseholdStructure' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    HouseholdStructureClock.reset();
    routineTimer.reset();
    HouseholdStructureMaxDurationReached = false;
    // update component parameters for each repeat
    textbox_household.setText('');
    textbox_household.refresh();
    psychoJS.experiment.addData('HouseholdStructure.started', globalClock.getTime());
    HouseholdStructureMaxDuration = null
    // keep track of which components have finished
    HouseholdStructureComponents = [];
    HouseholdStructureComponents.push(householdstructure_question_text);
    HouseholdStructureComponents.push(textbox_household);
    HouseholdStructureComponents.push(textbox_ABCDE);
    HouseholdStructureComponents.push(textbox_FGHI);
    HouseholdStructureComponents.push(Q8);
    HouseholdStructureComponents.push(hint_household);
    HouseholdStructureComponents.push(hint_household1);
    
    HouseholdStructureComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function HouseholdStructureRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'HouseholdStructure' ---
    // get current time
    t = HouseholdStructureClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *householdstructure_question_text* updates
    if (t >= 0.0 && householdstructure_question_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      householdstructure_question_text.tStart = t;  // (not accounting for frame time here)
      householdstructure_question_text.frameNStart = frameN;  // exact frame index
      
      householdstructure_question_text.setAutoDraw(true);
    }
    
    
    // if householdstructure_question_text is active this frame...
    if (householdstructure_question_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *textbox_household* updates
    if (t >= 0.0 && textbox_household.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_household.tStart = t;  // (not accounting for frame time here)
      textbox_household.frameNStart = frameN;  // exact frame index
      
      textbox_household.setAutoDraw(true);
    }
    
    
    // if textbox_household is active this frame...
    if (textbox_household.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *textbox_ABCDE* updates
    if (t >= 0.0 && textbox_ABCDE.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_ABCDE.tStart = t;  // (not accounting for frame time here)
      textbox_ABCDE.frameNStart = frameN;  // exact frame index
      
      textbox_ABCDE.setAutoDraw(true);
    }
    
    
    // if textbox_ABCDE is active this frame...
    if (textbox_ABCDE.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *textbox_FGHI* updates
    if (t >= 0.0 && textbox_FGHI.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_FGHI.tStart = t;  // (not accounting for frame time here)
      textbox_FGHI.frameNStart = frameN;  // exact frame index
      
      textbox_FGHI.setAutoDraw(true);
    }
    
    
    // if textbox_FGHI is active this frame...
    if (textbox_FGHI.status === PsychoJS.Status.STARTED) {
    }
    
    // Run 'Each Frame' code from code_6
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if ((! ("allow_advance_household" in psychoJS.experiment))) {
        psychoJS.experiment.allow_advance_household = false;
    }
    keys = psychoJS.eventManager.getKeys();
    if (_pj.in_es6("return", keys)) {
        user_input = textbox_household.text.trim();
        if ((user_input !== "")) {
            psychoJS.experiment.allow_advance_household = true;
        }
    }
    if (psychoJS.experiment.allow_advance_household) {
        continueRoutine = false;
    }
    
    
    // *Q8* updates
    if (t >= 0.0 && Q8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q8.tStart = t;  // (not accounting for frame time here)
      Q8.frameNStart = frameN;  // exact frame index
      
      Q8.setAutoDraw(true);
    }
    
    
    // if Q8 is active this frame...
    if (Q8.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *hint_household* updates
    if (t >= 0.0 && hint_household.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      hint_household.tStart = t;  // (not accounting for frame time here)
      hint_household.frameNStart = frameN;  // exact frame index
      
      hint_household.setAutoDraw(true);
    }
    
    
    // if hint_household is active this frame...
    if (hint_household.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *hint_household1* updates
    if (t >= 0.0 && hint_household1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      hint_household1.tStart = t;  // (not accounting for frame time here)
      hint_household1.frameNStart = frameN;  // exact frame index
      
      hint_household1.setAutoDraw(true);
    }
    
    
    // if hint_household1 is active this frame...
    if (hint_household1.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    HouseholdStructureComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function HouseholdStructureRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'HouseholdStructure' ---
    HouseholdStructureComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('HouseholdStructure.stopped', globalClock.getTime());
    psychoJS.experiment.addData('textbox_household.text',textbox_household.text)
    // Run 'End Routine' code from code_6
    psychoJS.experiment.addData("age", textbox_household.text);
    
    // the Routine "HouseholdStructure" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var occupation_typeMaxDurationReached;
var occupation_typeMaxDuration;
var occupation_typeComponents;
function occupation_typeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'occupation_type' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    occupation_typeClock.reset();
    routineTimer.reset();
    occupation_typeMaxDurationReached = false;
    // update component parameters for each repeat
    // reset occupation_Education to account for continued clicks & clear times on/off
    occupation_Education.reset()
    // reset occupation_Healthcare to account for continued clicks & clear times on/off
    occupation_Healthcare.reset()
    // reset occupation_Government to account for continued clicks & clear times on/off
    occupation_Government.reset()
    // reset occupation_Business to account for continued clicks & clear times on/off
    occupation_Business.reset()
    // reset occupation_Selfemployed to account for continued clicks & clear times on/off
    occupation_Selfemployed.reset()
    // reset occupation_Homemaker to account for continued clicks & clear times on/off
    occupation_Homemaker.reset()
    // reset occupation_Student to account for continued clicks & clear times on/off
    occupation_Student.reset()
    // reset occupation_Unemployed to account for continued clicks & clear times on/off
    occupation_Unemployed.reset()
    // reset occupation_Other to account for continued clicks & clear times on/off
    occupation_Other.reset()
    // reset occupation_retired to account for continued clicks & clear times on/off
    occupation_retired.reset()
    psychoJS.experiment.addData('occupation_type.started', globalClock.getTime());
    occupation_typeMaxDuration = null
    // keep track of which components have finished
    occupation_typeComponents = [];
    occupation_typeComponents.push(Q_occupation);
    occupation_typeComponents.push(occupation_Education);
    occupation_typeComponents.push(occupation_Healthcare);
    occupation_typeComponents.push(occupation_Government);
    occupation_typeComponents.push(occupation_Business);
    occupation_typeComponents.push(occupation_Selfemployed);
    occupation_typeComponents.push(occupation_Homemaker);
    occupation_typeComponents.push(occupation_Student);
    occupation_typeComponents.push(occupation_Unemployed);
    occupation_typeComponents.push(occupation_Other);
    occupation_typeComponents.push(occupation_retired);
    occupation_typeComponents.push(Q9);
    
    occupation_typeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function occupation_typeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'occupation_type' ---
    // get current time
    t = occupation_typeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Q_occupation* updates
    if (t >= 0.0 && Q_occupation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q_occupation.tStart = t;  // (not accounting for frame time here)
      Q_occupation.frameNStart = frameN;  // exact frame index
      
      Q_occupation.setAutoDraw(true);
    }
    
    
    // if Q_occupation is active this frame...
    if (Q_occupation.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *occupation_Education* updates
    if (t >= 0 && occupation_Education.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      occupation_Education.tStart = t;  // (not accounting for frame time here)
      occupation_Education.frameNStart = frameN;  // exact frame index
      
      occupation_Education.setAutoDraw(true);
    }
    
    
    // if occupation_Education is active this frame...
    if (occupation_Education.status === PsychoJS.Status.STARTED) {
    }
    
    if (occupation_Education.status === PsychoJS.Status.STARTED) {
      // check whether occupation_Education has been pressed
      if (occupation_Education.isClicked) {
        if (!occupation_Education.wasClicked) {
          // store time of first click
          occupation_Education.timesOn.push(occupation_Education.clock.getTime());
          // store time clicked until
          occupation_Education.timesOff.push(occupation_Education.clock.getTime());
        } else {
          // update time clicked until;
          occupation_Education.timesOff[occupation_Education.timesOff.length - 1] = occupation_Education.clock.getTime();
        }
        if (!occupation_Education.wasClicked) {
          // end routine when occupation_Education is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("occupation_level", "\u6559\u80b2");
        }
        // if occupation_Education is still clicked next frame, it is not a new click
        occupation_Education.wasClicked = true;
      } else {
        // if occupation_Education is clicked next frame, it is a new click
        occupation_Education.wasClicked = false;
      }
    } else {
      // keep clock at 0 if occupation_Education hasn't started / has finished
      occupation_Education.clock.reset();
      // if occupation_Education is clicked next frame, it is a new click
      occupation_Education.wasClicked = false;
    }
    
    // *occupation_Healthcare* updates
    if (t >= 0 && occupation_Healthcare.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      occupation_Healthcare.tStart = t;  // (not accounting for frame time here)
      occupation_Healthcare.frameNStart = frameN;  // exact frame index
      
      occupation_Healthcare.setAutoDraw(true);
    }
    
    
    // if occupation_Healthcare is active this frame...
    if (occupation_Healthcare.status === PsychoJS.Status.STARTED) {
    }
    
    if (occupation_Healthcare.status === PsychoJS.Status.STARTED) {
      // check whether occupation_Healthcare has been pressed
      if (occupation_Healthcare.isClicked) {
        if (!occupation_Healthcare.wasClicked) {
          // store time of first click
          occupation_Healthcare.timesOn.push(occupation_Healthcare.clock.getTime());
          // store time clicked until
          occupation_Healthcare.timesOff.push(occupation_Healthcare.clock.getTime());
        } else {
          // update time clicked until;
          occupation_Healthcare.timesOff[occupation_Healthcare.timesOff.length - 1] = occupation_Healthcare.clock.getTime();
        }
        if (!occupation_Healthcare.wasClicked) {
          // end routine when occupation_Healthcare is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("occupation_level", "\u533b\u7597");
        }
        // if occupation_Healthcare is still clicked next frame, it is not a new click
        occupation_Healthcare.wasClicked = true;
      } else {
        // if occupation_Healthcare is clicked next frame, it is a new click
        occupation_Healthcare.wasClicked = false;
      }
    } else {
      // keep clock at 0 if occupation_Healthcare hasn't started / has finished
      occupation_Healthcare.clock.reset();
      // if occupation_Healthcare is clicked next frame, it is a new click
      occupation_Healthcare.wasClicked = false;
    }
    
    // *occupation_Government* updates
    if (t >= 0 && occupation_Government.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      occupation_Government.tStart = t;  // (not accounting for frame time here)
      occupation_Government.frameNStart = frameN;  // exact frame index
      
      occupation_Government.setAutoDraw(true);
    }
    
    
    // if occupation_Government is active this frame...
    if (occupation_Government.status === PsychoJS.Status.STARTED) {
    }
    
    if (occupation_Government.status === PsychoJS.Status.STARTED) {
      // check whether occupation_Government has been pressed
      if (occupation_Government.isClicked) {
        if (!occupation_Government.wasClicked) {
          // store time of first click
          occupation_Government.timesOn.push(occupation_Government.clock.getTime());
          // store time clicked until
          occupation_Government.timesOff.push(occupation_Government.clock.getTime());
        } else {
          // update time clicked until;
          occupation_Government.timesOff[occupation_Government.timesOff.length - 1] = occupation_Government.clock.getTime();
        }
        if (!occupation_Government.wasClicked) {
          // end routine when occupation_Government is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("occupation_level", "\u653f\u5e9c");
        }
        // if occupation_Government is still clicked next frame, it is not a new click
        occupation_Government.wasClicked = true;
      } else {
        // if occupation_Government is clicked next frame, it is a new click
        occupation_Government.wasClicked = false;
      }
    } else {
      // keep clock at 0 if occupation_Government hasn't started / has finished
      occupation_Government.clock.reset();
      // if occupation_Government is clicked next frame, it is a new click
      occupation_Government.wasClicked = false;
    }
    
    // *occupation_Business* updates
    if (t >= 0 && occupation_Business.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      occupation_Business.tStart = t;  // (not accounting for frame time here)
      occupation_Business.frameNStart = frameN;  // exact frame index
      
      occupation_Business.setAutoDraw(true);
    }
    
    
    // if occupation_Business is active this frame...
    if (occupation_Business.status === PsychoJS.Status.STARTED) {
    }
    
    if (occupation_Business.status === PsychoJS.Status.STARTED) {
      // check whether occupation_Business has been pressed
      if (occupation_Business.isClicked) {
        if (!occupation_Business.wasClicked) {
          // store time of first click
          occupation_Business.timesOn.push(occupation_Business.clock.getTime());
          // store time clicked until
          occupation_Business.timesOff.push(occupation_Business.clock.getTime());
        } else {
          // update time clicked until;
          occupation_Business.timesOff[occupation_Business.timesOff.length - 1] = occupation_Business.clock.getTime();
        }
        if (!occupation_Business.wasClicked) {
          // end routine when occupation_Business is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("occupation_level", "\u4f01\u4e1a");
        }
        // if occupation_Business is still clicked next frame, it is not a new click
        occupation_Business.wasClicked = true;
      } else {
        // if occupation_Business is clicked next frame, it is a new click
        occupation_Business.wasClicked = false;
      }
    } else {
      // keep clock at 0 if occupation_Business hasn't started / has finished
      occupation_Business.clock.reset();
      // if occupation_Business is clicked next frame, it is a new click
      occupation_Business.wasClicked = false;
    }
    
    // *occupation_Selfemployed* updates
    if (t >= 0 && occupation_Selfemployed.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      occupation_Selfemployed.tStart = t;  // (not accounting for frame time here)
      occupation_Selfemployed.frameNStart = frameN;  // exact frame index
      
      occupation_Selfemployed.setAutoDraw(true);
    }
    
    
    // if occupation_Selfemployed is active this frame...
    if (occupation_Selfemployed.status === PsychoJS.Status.STARTED) {
    }
    
    if (occupation_Selfemployed.status === PsychoJS.Status.STARTED) {
      // check whether occupation_Selfemployed has been pressed
      if (occupation_Selfemployed.isClicked) {
        if (!occupation_Selfemployed.wasClicked) {
          // store time of first click
          occupation_Selfemployed.timesOn.push(occupation_Selfemployed.clock.getTime());
          // store time clicked until
          occupation_Selfemployed.timesOff.push(occupation_Selfemployed.clock.getTime());
        } else {
          // update time clicked until;
          occupation_Selfemployed.timesOff[occupation_Selfemployed.timesOff.length - 1] = occupation_Selfemployed.clock.getTime();
        }
        if (!occupation_Selfemployed.wasClicked) {
          // end routine when occupation_Selfemployed is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("occupation_level", "\u81ea\u7531\u804c\u4e1a");
        }
        // if occupation_Selfemployed is still clicked next frame, it is not a new click
        occupation_Selfemployed.wasClicked = true;
      } else {
        // if occupation_Selfemployed is clicked next frame, it is a new click
        occupation_Selfemployed.wasClicked = false;
      }
    } else {
      // keep clock at 0 if occupation_Selfemployed hasn't started / has finished
      occupation_Selfemployed.clock.reset();
      // if occupation_Selfemployed is clicked next frame, it is a new click
      occupation_Selfemployed.wasClicked = false;
    }
    
    // *occupation_Homemaker* updates
    if (t >= 0 && occupation_Homemaker.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      occupation_Homemaker.tStart = t;  // (not accounting for frame time here)
      occupation_Homemaker.frameNStart = frameN;  // exact frame index
      
      occupation_Homemaker.setAutoDraw(true);
    }
    
    
    // if occupation_Homemaker is active this frame...
    if (occupation_Homemaker.status === PsychoJS.Status.STARTED) {
    }
    
    if (occupation_Homemaker.status === PsychoJS.Status.STARTED) {
      // check whether occupation_Homemaker has been pressed
      if (occupation_Homemaker.isClicked) {
        if (!occupation_Homemaker.wasClicked) {
          // store time of first click
          occupation_Homemaker.timesOn.push(occupation_Homemaker.clock.getTime());
          // store time clicked until
          occupation_Homemaker.timesOff.push(occupation_Homemaker.clock.getTime());
        } else {
          // update time clicked until;
          occupation_Homemaker.timesOff[occupation_Homemaker.timesOff.length - 1] = occupation_Homemaker.clock.getTime();
        }
        if (!occupation_Homemaker.wasClicked) {
          // end routine when occupation_Homemaker is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("occupation_level", "\u5bb6\u52a1\u52b3\u52a8\u8005");
        }
        // if occupation_Homemaker is still clicked next frame, it is not a new click
        occupation_Homemaker.wasClicked = true;
      } else {
        // if occupation_Homemaker is clicked next frame, it is a new click
        occupation_Homemaker.wasClicked = false;
      }
    } else {
      // keep clock at 0 if occupation_Homemaker hasn't started / has finished
      occupation_Homemaker.clock.reset();
      // if occupation_Homemaker is clicked next frame, it is a new click
      occupation_Homemaker.wasClicked = false;
    }
    
    // *occupation_Student* updates
    if (t >= 0 && occupation_Student.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      occupation_Student.tStart = t;  // (not accounting for frame time here)
      occupation_Student.frameNStart = frameN;  // exact frame index
      
      occupation_Student.setAutoDraw(true);
    }
    
    
    // if occupation_Student is active this frame...
    if (occupation_Student.status === PsychoJS.Status.STARTED) {
    }
    
    if (occupation_Student.status === PsychoJS.Status.STARTED) {
      // check whether occupation_Student has been pressed
      if (occupation_Student.isClicked) {
        if (!occupation_Student.wasClicked) {
          // store time of first click
          occupation_Student.timesOn.push(occupation_Student.clock.getTime());
          // store time clicked until
          occupation_Student.timesOff.push(occupation_Student.clock.getTime());
        } else {
          // update time clicked until;
          occupation_Student.timesOff[occupation_Student.timesOff.length - 1] = occupation_Student.clock.getTime();
        }
        if (!occupation_Student.wasClicked) {
          // end routine when occupation_Student is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("occupation_level", "\u5b66\u751f");
        }
        // if occupation_Student is still clicked next frame, it is not a new click
        occupation_Student.wasClicked = true;
      } else {
        // if occupation_Student is clicked next frame, it is a new click
        occupation_Student.wasClicked = false;
      }
    } else {
      // keep clock at 0 if occupation_Student hasn't started / has finished
      occupation_Student.clock.reset();
      // if occupation_Student is clicked next frame, it is a new click
      occupation_Student.wasClicked = false;
    }
    
    // *occupation_Unemployed* updates
    if (t >= 0 && occupation_Unemployed.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      occupation_Unemployed.tStart = t;  // (not accounting for frame time here)
      occupation_Unemployed.frameNStart = frameN;  // exact frame index
      
      occupation_Unemployed.setAutoDraw(true);
    }
    
    
    // if occupation_Unemployed is active this frame...
    if (occupation_Unemployed.status === PsychoJS.Status.STARTED) {
    }
    
    if (occupation_Unemployed.status === PsychoJS.Status.STARTED) {
      // check whether occupation_Unemployed has been pressed
      if (occupation_Unemployed.isClicked) {
        if (!occupation_Unemployed.wasClicked) {
          // store time of first click
          occupation_Unemployed.timesOn.push(occupation_Unemployed.clock.getTime());
          // store time clicked until
          occupation_Unemployed.timesOff.push(occupation_Unemployed.clock.getTime());
        } else {
          // update time clicked until;
          occupation_Unemployed.timesOff[occupation_Unemployed.timesOff.length - 1] = occupation_Unemployed.clock.getTime();
        }
        if (!occupation_Unemployed.wasClicked) {
          // end routine when occupation_Unemployed is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("occupation_level", "\u65e0\u4e1a");
        }
        // if occupation_Unemployed is still clicked next frame, it is not a new click
        occupation_Unemployed.wasClicked = true;
      } else {
        // if occupation_Unemployed is clicked next frame, it is a new click
        occupation_Unemployed.wasClicked = false;
      }
    } else {
      // keep clock at 0 if occupation_Unemployed hasn't started / has finished
      occupation_Unemployed.clock.reset();
      // if occupation_Unemployed is clicked next frame, it is a new click
      occupation_Unemployed.wasClicked = false;
    }
    
    // *occupation_Other* updates
    if (t >= 0 && occupation_Other.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      occupation_Other.tStart = t;  // (not accounting for frame time here)
      occupation_Other.frameNStart = frameN;  // exact frame index
      
      occupation_Other.setAutoDraw(true);
    }
    
    
    // if occupation_Other is active this frame...
    if (occupation_Other.status === PsychoJS.Status.STARTED) {
    }
    
    if (occupation_Other.status === PsychoJS.Status.STARTED) {
      // check whether occupation_Other has been pressed
      if (occupation_Other.isClicked) {
        if (!occupation_Other.wasClicked) {
          // store time of first click
          occupation_Other.timesOn.push(occupation_Other.clock.getTime());
          // store time clicked until
          occupation_Other.timesOff.push(occupation_Other.clock.getTime());
        } else {
          // update time clicked until;
          occupation_Other.timesOff[occupation_Other.timesOff.length - 1] = occupation_Other.clock.getTime();
        }
        if (!occupation_Other.wasClicked) {
          // end routine when occupation_Other is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("occupation_level", "\u5176\u5b83");
        }
        // if occupation_Other is still clicked next frame, it is not a new click
        occupation_Other.wasClicked = true;
      } else {
        // if occupation_Other is clicked next frame, it is a new click
        occupation_Other.wasClicked = false;
      }
    } else {
      // keep clock at 0 if occupation_Other hasn't started / has finished
      occupation_Other.clock.reset();
      // if occupation_Other is clicked next frame, it is a new click
      occupation_Other.wasClicked = false;
    }
    
    // *occupation_retired* updates
    if (t >= 0 && occupation_retired.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      occupation_retired.tStart = t;  // (not accounting for frame time here)
      occupation_retired.frameNStart = frameN;  // exact frame index
      
      occupation_retired.setAutoDraw(true);
    }
    
    
    // if occupation_retired is active this frame...
    if (occupation_retired.status === PsychoJS.Status.STARTED) {
    }
    
    if (occupation_retired.status === PsychoJS.Status.STARTED) {
      // check whether occupation_retired has been pressed
      if (occupation_retired.isClicked) {
        if (!occupation_retired.wasClicked) {
          // store time of first click
          occupation_retired.timesOn.push(occupation_retired.clock.getTime());
          // store time clicked until
          occupation_retired.timesOff.push(occupation_retired.clock.getTime());
        } else {
          // update time clicked until;
          occupation_retired.timesOff[occupation_retired.timesOff.length - 1] = occupation_retired.clock.getTime();
        }
        if (!occupation_retired.wasClicked) {
          // end routine when occupation_retired is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("occupation_level", "\u9000\u4f11");
        }
        // if occupation_retired is still clicked next frame, it is not a new click
        occupation_retired.wasClicked = true;
      } else {
        // if occupation_retired is clicked next frame, it is a new click
        occupation_retired.wasClicked = false;
      }
    } else {
      // keep clock at 0 if occupation_retired hasn't started / has finished
      occupation_retired.clock.reset();
      // if occupation_retired is clicked next frame, it is a new click
      occupation_retired.wasClicked = false;
    }
    
    // *Q9* updates
    if (t >= 0.0 && Q9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q9.tStart = t;  // (not accounting for frame time here)
      Q9.frameNStart = frameN;  // exact frame index
      
      Q9.setAutoDraw(true);
    }
    
    
    // if Q9 is active this frame...
    if (Q9.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    occupation_typeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function occupation_typeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'occupation_type' ---
    occupation_typeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('occupation_type.stopped', globalClock.getTime());
    psychoJS.experiment.addData('occupation_Education.numClicks', occupation_Education.numClicks);
    psychoJS.experiment.addData('occupation_Education.timesOn', occupation_Education.timesOn);
    psychoJS.experiment.addData('occupation_Education.timesOff', occupation_Education.timesOff);
    psychoJS.experiment.addData('occupation_Healthcare.numClicks', occupation_Healthcare.numClicks);
    psychoJS.experiment.addData('occupation_Healthcare.timesOn', occupation_Healthcare.timesOn);
    psychoJS.experiment.addData('occupation_Healthcare.timesOff', occupation_Healthcare.timesOff);
    psychoJS.experiment.addData('occupation_Government.numClicks', occupation_Government.numClicks);
    psychoJS.experiment.addData('occupation_Government.timesOn', occupation_Government.timesOn);
    psychoJS.experiment.addData('occupation_Government.timesOff', occupation_Government.timesOff);
    psychoJS.experiment.addData('occupation_Business.numClicks', occupation_Business.numClicks);
    psychoJS.experiment.addData('occupation_Business.timesOn', occupation_Business.timesOn);
    psychoJS.experiment.addData('occupation_Business.timesOff', occupation_Business.timesOff);
    psychoJS.experiment.addData('occupation_Selfemployed.numClicks', occupation_Selfemployed.numClicks);
    psychoJS.experiment.addData('occupation_Selfemployed.timesOn', occupation_Selfemployed.timesOn);
    psychoJS.experiment.addData('occupation_Selfemployed.timesOff', occupation_Selfemployed.timesOff);
    psychoJS.experiment.addData('occupation_Homemaker.numClicks', occupation_Homemaker.numClicks);
    psychoJS.experiment.addData('occupation_Homemaker.timesOn', occupation_Homemaker.timesOn);
    psychoJS.experiment.addData('occupation_Homemaker.timesOff', occupation_Homemaker.timesOff);
    psychoJS.experiment.addData('occupation_Student.numClicks', occupation_Student.numClicks);
    psychoJS.experiment.addData('occupation_Student.timesOn', occupation_Student.timesOn);
    psychoJS.experiment.addData('occupation_Student.timesOff', occupation_Student.timesOff);
    psychoJS.experiment.addData('occupation_Unemployed.numClicks', occupation_Unemployed.numClicks);
    psychoJS.experiment.addData('occupation_Unemployed.timesOn', occupation_Unemployed.timesOn);
    psychoJS.experiment.addData('occupation_Unemployed.timesOff', occupation_Unemployed.timesOff);
    psychoJS.experiment.addData('occupation_Other.numClicks', occupation_Other.numClicks);
    psychoJS.experiment.addData('occupation_Other.timesOn', occupation_Other.timesOn);
    psychoJS.experiment.addData('occupation_Other.timesOff', occupation_Other.timesOff);
    psychoJS.experiment.addData('occupation_retired.numClicks', occupation_retired.numClicks);
    psychoJS.experiment.addData('occupation_retired.timesOn', occupation_retired.timesOn);
    psychoJS.experiment.addData('occupation_retired.timesOff', occupation_retired.timesOff);
    // the Routine "occupation_type" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var family_incomeMaxDurationReached;
var family_incomeMaxDuration;
var family_incomeComponents;
function family_incomeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'family_income' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    family_incomeClock.reset();
    routineTimer.reset();
    family_incomeMaxDurationReached = false;
    // update component parameters for each repeat
    // reset income_20000 to account for continued clicks & clear times on/off
    income_20000.reset()
    // reset income_20001to50000 to account for continued clicks & clear times on/off
    income_20001to50000.reset()
    // reset income_50001to100000 to account for continued clicks & clear times on/off
    income_50001to100000.reset()
    // reset income_100001to150000 to account for continued clicks & clear times on/off
    income_100001to150000.reset()
    // reset income_150001to200000 to account for continued clicks & clear times on/off
    income_150001to200000.reset()
    // reset income_Morethan200000 to account for continued clicks & clear times on/off
    income_Morethan200000.reset()
    // reset income_Prefernottosay to account for continued clicks & clear times on/off
    income_Prefernottosay.reset()
    psychoJS.experiment.addData('family_income.started', globalClock.getTime());
    family_incomeMaxDuration = null
    // keep track of which components have finished
    family_incomeComponents = [];
    family_incomeComponents.push(Q_family_income);
    family_incomeComponents.push(income_20000);
    family_incomeComponents.push(income_20001to50000);
    family_incomeComponents.push(income_50001to100000);
    family_incomeComponents.push(income_100001to150000);
    family_incomeComponents.push(income_150001to200000);
    family_incomeComponents.push(income_Morethan200000);
    family_incomeComponents.push(income_Prefernottosay);
    family_incomeComponents.push(Q10);
    family_incomeComponents.push(hint_family_income);
    
    family_incomeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function family_incomeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'family_income' ---
    // get current time
    t = family_incomeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Q_family_income* updates
    if (t >= 0.0 && Q_family_income.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q_family_income.tStart = t;  // (not accounting for frame time here)
      Q_family_income.frameNStart = frameN;  // exact frame index
      
      Q_family_income.setAutoDraw(true);
    }
    
    
    // if Q_family_income is active this frame...
    if (Q_family_income.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *income_20000* updates
    if (t >= 0 && income_20000.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      income_20000.tStart = t;  // (not accounting for frame time here)
      income_20000.frameNStart = frameN;  // exact frame index
      
      income_20000.setAutoDraw(true);
    }
    
    
    // if income_20000 is active this frame...
    if (income_20000.status === PsychoJS.Status.STARTED) {
    }
    
    if (income_20000.status === PsychoJS.Status.STARTED) {
      // check whether income_20000 has been pressed
      if (income_20000.isClicked) {
        if (!income_20000.wasClicked) {
          // store time of first click
          income_20000.timesOn.push(income_20000.clock.getTime());
          // store time clicked until
          income_20000.timesOff.push(income_20000.clock.getTime());
        } else {
          // update time clicked until;
          income_20000.timesOff[income_20000.timesOff.length - 1] = income_20000.clock.getTime();
        }
        if (!income_20000.wasClicked) {
          // end routine when income_20000 is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("family_income_level", "2W");
        }
        // if income_20000 is still clicked next frame, it is not a new click
        income_20000.wasClicked = true;
      } else {
        // if income_20000 is clicked next frame, it is a new click
        income_20000.wasClicked = false;
      }
    } else {
      // keep clock at 0 if income_20000 hasn't started / has finished
      income_20000.clock.reset();
      // if income_20000 is clicked next frame, it is a new click
      income_20000.wasClicked = false;
    }
    
    // *income_20001to50000* updates
    if (t >= 0 && income_20001to50000.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      income_20001to50000.tStart = t;  // (not accounting for frame time here)
      income_20001to50000.frameNStart = frameN;  // exact frame index
      
      income_20001to50000.setAutoDraw(true);
    }
    
    
    // if income_20001to50000 is active this frame...
    if (income_20001to50000.status === PsychoJS.Status.STARTED) {
    }
    
    if (income_20001to50000.status === PsychoJS.Status.STARTED) {
      // check whether income_20001to50000 has been pressed
      if (income_20001to50000.isClicked) {
        if (!income_20001to50000.wasClicked) {
          // store time of first click
          income_20001to50000.timesOn.push(income_20001to50000.clock.getTime());
          // store time clicked until
          income_20001to50000.timesOff.push(income_20001to50000.clock.getTime());
        } else {
          // update time clicked until;
          income_20001to50000.timesOff[income_20001to50000.timesOff.length - 1] = income_20001to50000.clock.getTime();
        }
        if (!income_20001to50000.wasClicked) {
          // end routine when income_20001to50000 is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("family_income_level", "2W\u52305W");
        }
        // if income_20001to50000 is still clicked next frame, it is not a new click
        income_20001to50000.wasClicked = true;
      } else {
        // if income_20001to50000 is clicked next frame, it is a new click
        income_20001to50000.wasClicked = false;
      }
    } else {
      // keep clock at 0 if income_20001to50000 hasn't started / has finished
      income_20001to50000.clock.reset();
      // if income_20001to50000 is clicked next frame, it is a new click
      income_20001to50000.wasClicked = false;
    }
    
    // *income_50001to100000* updates
    if (t >= 0 && income_50001to100000.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      income_50001to100000.tStart = t;  // (not accounting for frame time here)
      income_50001to100000.frameNStart = frameN;  // exact frame index
      
      income_50001to100000.setAutoDraw(true);
    }
    
    
    // if income_50001to100000 is active this frame...
    if (income_50001to100000.status === PsychoJS.Status.STARTED) {
    }
    
    if (income_50001to100000.status === PsychoJS.Status.STARTED) {
      // check whether income_50001to100000 has been pressed
      if (income_50001to100000.isClicked) {
        if (!income_50001to100000.wasClicked) {
          // store time of first click
          income_50001to100000.timesOn.push(income_50001to100000.clock.getTime());
          // store time clicked until
          income_50001to100000.timesOff.push(income_50001to100000.clock.getTime());
        } else {
          // update time clicked until;
          income_50001to100000.timesOff[income_50001to100000.timesOff.length - 1] = income_50001to100000.clock.getTime();
        }
        if (!income_50001to100000.wasClicked) {
          // end routine when income_50001to100000 is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("family_income_level", "5W\u523010W");
        }
        // if income_50001to100000 is still clicked next frame, it is not a new click
        income_50001to100000.wasClicked = true;
      } else {
        // if income_50001to100000 is clicked next frame, it is a new click
        income_50001to100000.wasClicked = false;
      }
    } else {
      // keep clock at 0 if income_50001to100000 hasn't started / has finished
      income_50001to100000.clock.reset();
      // if income_50001to100000 is clicked next frame, it is a new click
      income_50001to100000.wasClicked = false;
    }
    
    // *income_100001to150000* updates
    if (t >= 0 && income_100001to150000.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      income_100001to150000.tStart = t;  // (not accounting for frame time here)
      income_100001to150000.frameNStart = frameN;  // exact frame index
      
      income_100001to150000.setAutoDraw(true);
    }
    
    
    // if income_100001to150000 is active this frame...
    if (income_100001to150000.status === PsychoJS.Status.STARTED) {
    }
    
    if (income_100001to150000.status === PsychoJS.Status.STARTED) {
      // check whether income_100001to150000 has been pressed
      if (income_100001to150000.isClicked) {
        if (!income_100001to150000.wasClicked) {
          // store time of first click
          income_100001to150000.timesOn.push(income_100001to150000.clock.getTime());
          // store time clicked until
          income_100001to150000.timesOff.push(income_100001to150000.clock.getTime());
        } else {
          // update time clicked until;
          income_100001to150000.timesOff[income_100001to150000.timesOff.length - 1] = income_100001to150000.clock.getTime();
        }
        if (!income_100001to150000.wasClicked) {
          // end routine when income_100001to150000 is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("family_income_level", "10W\u523015W");
        }
        // if income_100001to150000 is still clicked next frame, it is not a new click
        income_100001to150000.wasClicked = true;
      } else {
        // if income_100001to150000 is clicked next frame, it is a new click
        income_100001to150000.wasClicked = false;
      }
    } else {
      // keep clock at 0 if income_100001to150000 hasn't started / has finished
      income_100001to150000.clock.reset();
      // if income_100001to150000 is clicked next frame, it is a new click
      income_100001to150000.wasClicked = false;
    }
    
    // *income_150001to200000* updates
    if (t >= 0 && income_150001to200000.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      income_150001to200000.tStart = t;  // (not accounting for frame time here)
      income_150001to200000.frameNStart = frameN;  // exact frame index
      
      income_150001to200000.setAutoDraw(true);
    }
    
    
    // if income_150001to200000 is active this frame...
    if (income_150001to200000.status === PsychoJS.Status.STARTED) {
    }
    
    if (income_150001to200000.status === PsychoJS.Status.STARTED) {
      // check whether income_150001to200000 has been pressed
      if (income_150001to200000.isClicked) {
        if (!income_150001to200000.wasClicked) {
          // store time of first click
          income_150001to200000.timesOn.push(income_150001to200000.clock.getTime());
          // store time clicked until
          income_150001to200000.timesOff.push(income_150001to200000.clock.getTime());
        } else {
          // update time clicked until;
          income_150001to200000.timesOff[income_150001to200000.timesOff.length - 1] = income_150001to200000.clock.getTime();
        }
        if (!income_150001to200000.wasClicked) {
          // end routine when income_150001to200000 is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("family_income_level", "15W\u523020W");
        }
        // if income_150001to200000 is still clicked next frame, it is not a new click
        income_150001to200000.wasClicked = true;
      } else {
        // if income_150001to200000 is clicked next frame, it is a new click
        income_150001to200000.wasClicked = false;
      }
    } else {
      // keep clock at 0 if income_150001to200000 hasn't started / has finished
      income_150001to200000.clock.reset();
      // if income_150001to200000 is clicked next frame, it is a new click
      income_150001to200000.wasClicked = false;
    }
    
    // *income_Morethan200000* updates
    if (t >= 0 && income_Morethan200000.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      income_Morethan200000.tStart = t;  // (not accounting for frame time here)
      income_Morethan200000.frameNStart = frameN;  // exact frame index
      
      income_Morethan200000.setAutoDraw(true);
    }
    
    
    // if income_Morethan200000 is active this frame...
    if (income_Morethan200000.status === PsychoJS.Status.STARTED) {
    }
    
    if (income_Morethan200000.status === PsychoJS.Status.STARTED) {
      // check whether income_Morethan200000 has been pressed
      if (income_Morethan200000.isClicked) {
        if (!income_Morethan200000.wasClicked) {
          // store time of first click
          income_Morethan200000.timesOn.push(income_Morethan200000.clock.getTime());
          // store time clicked until
          income_Morethan200000.timesOff.push(income_Morethan200000.clock.getTime());
        } else {
          // update time clicked until;
          income_Morethan200000.timesOff[income_Morethan200000.timesOff.length - 1] = income_Morethan200000.clock.getTime();
        }
        if (!income_Morethan200000.wasClicked) {
          // end routine when income_Morethan200000 is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("family_income_level", "\u8d85\u8fc720W");
        }
        // if income_Morethan200000 is still clicked next frame, it is not a new click
        income_Morethan200000.wasClicked = true;
      } else {
        // if income_Morethan200000 is clicked next frame, it is a new click
        income_Morethan200000.wasClicked = false;
      }
    } else {
      // keep clock at 0 if income_Morethan200000 hasn't started / has finished
      income_Morethan200000.clock.reset();
      // if income_Morethan200000 is clicked next frame, it is a new click
      income_Morethan200000.wasClicked = false;
    }
    
    // *income_Prefernottosay* updates
    if (t >= 0 && income_Prefernottosay.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      income_Prefernottosay.tStart = t;  // (not accounting for frame time here)
      income_Prefernottosay.frameNStart = frameN;  // exact frame index
      
      income_Prefernottosay.setAutoDraw(true);
    }
    
    
    // if income_Prefernottosay is active this frame...
    if (income_Prefernottosay.status === PsychoJS.Status.STARTED) {
    }
    
    if (income_Prefernottosay.status === PsychoJS.Status.STARTED) {
      // check whether income_Prefernottosay has been pressed
      if (income_Prefernottosay.isClicked) {
        if (!income_Prefernottosay.wasClicked) {
          // store time of first click
          income_Prefernottosay.timesOn.push(income_Prefernottosay.clock.getTime());
          // store time clicked until
          income_Prefernottosay.timesOff.push(income_Prefernottosay.clock.getTime());
        } else {
          // update time clicked until;
          income_Prefernottosay.timesOff[income_Prefernottosay.timesOff.length - 1] = income_Prefernottosay.clock.getTime();
        }
        if (!income_Prefernottosay.wasClicked) {
          // end routine when income_Prefernottosay is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("family_income_level", "\u4e0d\u613f\u900f\u9732");
        }
        // if income_Prefernottosay is still clicked next frame, it is not a new click
        income_Prefernottosay.wasClicked = true;
      } else {
        // if income_Prefernottosay is clicked next frame, it is a new click
        income_Prefernottosay.wasClicked = false;
      }
    } else {
      // keep clock at 0 if income_Prefernottosay hasn't started / has finished
      income_Prefernottosay.clock.reset();
      // if income_Prefernottosay is clicked next frame, it is a new click
      income_Prefernottosay.wasClicked = false;
    }
    
    // *Q10* updates
    if (t >= 0.0 && Q10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q10.tStart = t;  // (not accounting for frame time here)
      Q10.frameNStart = frameN;  // exact frame index
      
      Q10.setAutoDraw(true);
    }
    
    
    // if Q10 is active this frame...
    if (Q10.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *hint_family_income* updates
    if (t >= 0.0 && hint_family_income.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      hint_family_income.tStart = t;  // (not accounting for frame time here)
      hint_family_income.frameNStart = frameN;  // exact frame index
      
      hint_family_income.setAutoDraw(true);
    }
    
    
    // if hint_family_income is active this frame...
    if (hint_family_income.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    family_incomeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function family_incomeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'family_income' ---
    family_incomeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('family_income.stopped', globalClock.getTime());
    psychoJS.experiment.addData('income_20000.numClicks', income_20000.numClicks);
    psychoJS.experiment.addData('income_20000.timesOn', income_20000.timesOn);
    psychoJS.experiment.addData('income_20000.timesOff', income_20000.timesOff);
    psychoJS.experiment.addData('income_20001to50000.numClicks', income_20001to50000.numClicks);
    psychoJS.experiment.addData('income_20001to50000.timesOn', income_20001to50000.timesOn);
    psychoJS.experiment.addData('income_20001to50000.timesOff', income_20001to50000.timesOff);
    psychoJS.experiment.addData('income_50001to100000.numClicks', income_50001to100000.numClicks);
    psychoJS.experiment.addData('income_50001to100000.timesOn', income_50001to100000.timesOn);
    psychoJS.experiment.addData('income_50001to100000.timesOff', income_50001to100000.timesOff);
    psychoJS.experiment.addData('income_100001to150000.numClicks', income_100001to150000.numClicks);
    psychoJS.experiment.addData('income_100001to150000.timesOn', income_100001to150000.timesOn);
    psychoJS.experiment.addData('income_100001to150000.timesOff', income_100001to150000.timesOff);
    psychoJS.experiment.addData('income_150001to200000.numClicks', income_150001to200000.numClicks);
    psychoJS.experiment.addData('income_150001to200000.timesOn', income_150001to200000.timesOn);
    psychoJS.experiment.addData('income_150001to200000.timesOff', income_150001to200000.timesOff);
    psychoJS.experiment.addData('income_Morethan200000.numClicks', income_Morethan200000.numClicks);
    psychoJS.experiment.addData('income_Morethan200000.timesOn', income_Morethan200000.timesOn);
    psychoJS.experiment.addData('income_Morethan200000.timesOff', income_Morethan200000.timesOff);
    psychoJS.experiment.addData('income_Prefernottosay.numClicks', income_Prefernottosay.numClicks);
    psychoJS.experiment.addData('income_Prefernottosay.timesOn', income_Prefernottosay.timesOn);
    psychoJS.experiment.addData('income_Prefernottosay.timesOff', income_Prefernottosay.timesOff);
    // the Routine "family_income" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var heightMaxDurationReached;
var heightMaxDuration;
var heightComponents;
function heightRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'height' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    heightClock.reset();
    routineTimer.reset();
    heightMaxDurationReached = false;
    // update component parameters for each repeat
    textbox_height.setText('');
    textbox_height.refresh();
    psychoJS.experiment.addData('height.started', globalClock.getTime());
    heightMaxDuration = null
    // keep track of which components have finished
    heightComponents = [];
    heightComponents.push(Q_height_text);
    heightComponents.push(textbox_height);
    heightComponents.push(height_hint);
    heightComponents.push(Q11);
    
    heightComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function heightRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'height' ---
    // get current time
    t = heightClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Q_height_text* updates
    if (t >= 0.0 && Q_height_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q_height_text.tStart = t;  // (not accounting for frame time here)
      Q_height_text.frameNStart = frameN;  // exact frame index
      
      Q_height_text.setAutoDraw(true);
    }
    
    
    // if Q_height_text is active this frame...
    if (Q_height_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *textbox_height* updates
    if (t >= 0.0 && textbox_height.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_height.tStart = t;  // (not accounting for frame time here)
      textbox_height.frameNStart = frameN;  // exact frame index
      
      textbox_height.setAutoDraw(true);
    }
    
    
    // if textbox_height is active this frame...
    if (textbox_height.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *height_hint* updates
    if (t >= 0.0 && height_hint.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      height_hint.tStart = t;  // (not accounting for frame time here)
      height_hint.frameNStart = frameN;  // exact frame index
      
      height_hint.setAutoDraw(true);
    }
    
    
    // if height_hint is active this frame...
    if (height_hint.status === PsychoJS.Status.STARTED) {
    }
    
    // Run 'Each Frame' code from code_height
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if ((! ("allow_advance_height" in psychoJS.experiment))) {
        psychoJS.experiment.allow_advance_height = false;
    }
    keys = psychoJS.eventManager.getKeys();
    if (_pj.in_es6("return", keys)) {
        user_input = textbox_height.text.trim();
        if ((user_input !== "")) {
            psychoJS.experiment.allow_advance_height = true;
        }
    }
    if (psychoJS.experiment.allow_advance_height) {
        continueRoutine = false;
    }
    
    
    // *Q11* updates
    if (t >= 0.0 && Q11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q11.tStart = t;  // (not accounting for frame time here)
      Q11.frameNStart = frameN;  // exact frame index
      
      Q11.setAutoDraw(true);
    }
    
    
    // if Q11 is active this frame...
    if (Q11.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    heightComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function heightRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'height' ---
    heightComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('height.stopped', globalClock.getTime());
    psychoJS.experiment.addData('textbox_height.text',textbox_height.text)
    // Run 'End Routine' code from code_height
    psychoJS.experiment.addData("height", textbox_height.text);
    
    // the Routine "height" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var weightMaxDurationReached;
var weightMaxDuration;
var weightComponents;
function weightRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'weight' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    weightClock.reset();
    routineTimer.reset();
    weightMaxDurationReached = false;
    // update component parameters for each repeat
    textbox_weight.setText('');
    textbox_weight.refresh();
    psychoJS.experiment.addData('weight.started', globalClock.getTime());
    weightMaxDuration = null
    // keep track of which components have finished
    weightComponents = [];
    weightComponents.push(Q_weight_text);
    weightComponents.push(textbox_weight);
    weightComponents.push(weight_hint);
    weightComponents.push(Q12);
    
    weightComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function weightRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'weight' ---
    // get current time
    t = weightClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Q_weight_text* updates
    if (t >= 0.0 && Q_weight_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q_weight_text.tStart = t;  // (not accounting for frame time here)
      Q_weight_text.frameNStart = frameN;  // exact frame index
      
      Q_weight_text.setAutoDraw(true);
    }
    
    
    // if Q_weight_text is active this frame...
    if (Q_weight_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *textbox_weight* updates
    if (t >= 0.0 && textbox_weight.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_weight.tStart = t;  // (not accounting for frame time here)
      textbox_weight.frameNStart = frameN;  // exact frame index
      
      textbox_weight.setAutoDraw(true);
    }
    
    
    // if textbox_weight is active this frame...
    if (textbox_weight.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *weight_hint* updates
    if (t >= 0.0 && weight_hint.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      weight_hint.tStart = t;  // (not accounting for frame time here)
      weight_hint.frameNStart = frameN;  // exact frame index
      
      weight_hint.setAutoDraw(true);
    }
    
    
    // if weight_hint is active this frame...
    if (weight_hint.status === PsychoJS.Status.STARTED) {
    }
    
    // Run 'Each Frame' code from code_weight
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if ((! ("allow_advance_weight" in psychoJS.experiment))) {
        psychoJS.experiment.allow_advance_weight = false;
    }
    keys = psychoJS.eventManager.getKeys();
    if (_pj.in_es6("return", keys)) {
        user_input = textbox_weight.text.trim();
        if ((user_input !== "")) {
            psychoJS.experiment.allow_advance_weight = true;
        }
    }
    if (psychoJS.experiment.allow_advance_weight) {
        continueRoutine = false;
    }
    
    
    // *Q12* updates
    if (t >= 0.0 && Q12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q12.tStart = t;  // (not accounting for frame time here)
      Q12.frameNStart = frameN;  // exact frame index
      
      Q12.setAutoDraw(true);
    }
    
    
    // if Q12 is active this frame...
    if (Q12.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    weightComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function weightRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'weight' ---
    weightComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('weight.stopped', globalClock.getTime());
    psychoJS.experiment.addData('textbox_weight.text',textbox_weight.text)
    // Run 'End Routine' code from code_weight
    psychoJS.experiment.addData("weight", textbox_weight.text.trim());
    
    // the Routine "weight" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var waistlineMaxDurationReached;
var waistlineMaxDuration;
var waistlineComponents;
function waistlineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'waistline' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    waistlineClock.reset();
    routineTimer.reset();
    waistlineMaxDurationReached = false;
    // update component parameters for each repeat
    textbox_waistline.setText('');
    textbox_waistline.refresh();
    psychoJS.experiment.addData('waistline.started', globalClock.getTime());
    waistlineMaxDuration = null
    // keep track of which components have finished
    waistlineComponents = [];
    waistlineComponents.push(Q_waistline_text);
    waistlineComponents.push(textbox_waistline);
    waistlineComponents.push(waistline_hint);
    waistlineComponents.push(Q13);
    
    waistlineComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function waistlineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'waistline' ---
    // get current time
    t = waistlineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Q_waistline_text* updates
    if (t >= 0.0 && Q_waistline_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q_waistline_text.tStart = t;  // (not accounting for frame time here)
      Q_waistline_text.frameNStart = frameN;  // exact frame index
      
      Q_waistline_text.setAutoDraw(true);
    }
    
    
    // if Q_waistline_text is active this frame...
    if (Q_waistline_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *textbox_waistline* updates
    if (t >= 0.0 && textbox_waistline.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_waistline.tStart = t;  // (not accounting for frame time here)
      textbox_waistline.frameNStart = frameN;  // exact frame index
      
      textbox_waistline.setAutoDraw(true);
    }
    
    
    // if textbox_waistline is active this frame...
    if (textbox_waistline.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *waistline_hint* updates
    if (t >= 0.0 && waistline_hint.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      waistline_hint.tStart = t;  // (not accounting for frame time here)
      waistline_hint.frameNStart = frameN;  // exact frame index
      
      waistline_hint.setAutoDraw(true);
    }
    
    
    // if waistline_hint is active this frame...
    if (waistline_hint.status === PsychoJS.Status.STARTED) {
    }
    
    // Run 'Each Frame' code from code_waistline_2
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if ((! ("allow_advance_waistline" in psychoJS.experiment))) {
        psychoJS.experiment.allow_advance_waistline = false;
    }
    keys = psychoJS.eventManager.getKeys();
    if (_pj.in_es6("return", keys)) {
        user_input = textbox_waistline.text.trim();
        if ((user_input !== "")) {
            psychoJS.experiment.allow_advance_waistline = true;
        }
    }
    if (psychoJS.experiment.allow_advance_waistline) {
        continueRoutine = false;
    }
    
    
    // *Q13* updates
    if (t >= 0.0 && Q13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q13.tStart = t;  // (not accounting for frame time here)
      Q13.frameNStart = frameN;  // exact frame index
      
      Q13.setAutoDraw(true);
    }
    
    
    // if Q13 is active this frame...
    if (Q13.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    waistlineComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function waistlineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'waistline' ---
    waistlineComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('waistline.stopped', globalClock.getTime());
    psychoJS.experiment.addData('textbox_waistline.text',textbox_waistline.text)
    // Run 'End Routine' code from code_waistline_2
    psychoJS.experiment.addData("waistline", textbox_waistline.text.trim());
    
    // the Routine "waistline" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ever_drink_alcoholMaxDurationReached;
var ever_drink_alcoholMaxDuration;
var ever_drink_alcoholComponents;
function ever_drink_alcoholRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ever_drink_alcohol' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    ever_drink_alcoholClock.reset();
    routineTimer.reset();
    ever_drink_alcoholMaxDurationReached = false;
    // update component parameters for each repeat
    // reset ever_drink_alcohol_yes to account for continued clicks & clear times on/off
    ever_drink_alcohol_yes.reset()
    // reset ever_drink_alcohol_no to account for continued clicks & clear times on/off
    ever_drink_alcohol_no.reset()
    psychoJS.experiment.addData('ever_drink_alcohol.started', globalClock.getTime());
    ever_drink_alcoholMaxDuration = null
    // keep track of which components have finished
    ever_drink_alcoholComponents = [];
    ever_drink_alcoholComponents.push(Q_ever_drink_alcohol);
    ever_drink_alcoholComponents.push(ever_drink_alcohol_yes);
    ever_drink_alcoholComponents.push(ever_drink_alcohol_no);
    ever_drink_alcoholComponents.push(Q14);
    
    ever_drink_alcoholComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function ever_drink_alcoholRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ever_drink_alcohol' ---
    // get current time
    t = ever_drink_alcoholClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Q_ever_drink_alcohol* updates
    if (t >= 0.0 && Q_ever_drink_alcohol.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q_ever_drink_alcohol.tStart = t;  // (not accounting for frame time here)
      Q_ever_drink_alcohol.frameNStart = frameN;  // exact frame index
      
      Q_ever_drink_alcohol.setAutoDraw(true);
    }
    
    
    // if Q_ever_drink_alcohol is active this frame...
    if (Q_ever_drink_alcohol.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *ever_drink_alcohol_yes* updates
    if (t >= 0 && ever_drink_alcohol_yes.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ever_drink_alcohol_yes.tStart = t;  // (not accounting for frame time here)
      ever_drink_alcohol_yes.frameNStart = frameN;  // exact frame index
      
      ever_drink_alcohol_yes.setAutoDraw(true);
    }
    
    
    // if ever_drink_alcohol_yes is active this frame...
    if (ever_drink_alcohol_yes.status === PsychoJS.Status.STARTED) {
    }
    
    if (ever_drink_alcohol_yes.status === PsychoJS.Status.STARTED) {
      // check whether ever_drink_alcohol_yes has been pressed
      if (ever_drink_alcohol_yes.isClicked) {
        if (!ever_drink_alcohol_yes.wasClicked) {
          // store time of first click
          ever_drink_alcohol_yes.timesOn.push(ever_drink_alcohol_yes.clock.getTime());
          // store time clicked until
          ever_drink_alcohol_yes.timesOff.push(ever_drink_alcohol_yes.clock.getTime());
        } else {
          // update time clicked until;
          ever_drink_alcohol_yes.timesOff[ever_drink_alcohol_yes.timesOff.length - 1] = ever_drink_alcohol_yes.clock.getTime();
        }
        if (!ever_drink_alcohol_yes.wasClicked) {
          // end routine when ever_drink_alcohol_yes is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("ever_drink_alcohol", "\u662f");
        }
        // if ever_drink_alcohol_yes is still clicked next frame, it is not a new click
        ever_drink_alcohol_yes.wasClicked = true;
      } else {
        // if ever_drink_alcohol_yes is clicked next frame, it is a new click
        ever_drink_alcohol_yes.wasClicked = false;
      }
    } else {
      // keep clock at 0 if ever_drink_alcohol_yes hasn't started / has finished
      ever_drink_alcohol_yes.clock.reset();
      // if ever_drink_alcohol_yes is clicked next frame, it is a new click
      ever_drink_alcohol_yes.wasClicked = false;
    }
    
    // *ever_drink_alcohol_no* updates
    if (t >= 0 && ever_drink_alcohol_no.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ever_drink_alcohol_no.tStart = t;  // (not accounting for frame time here)
      ever_drink_alcohol_no.frameNStart = frameN;  // exact frame index
      
      ever_drink_alcohol_no.setAutoDraw(true);
    }
    
    
    // if ever_drink_alcohol_no is active this frame...
    if (ever_drink_alcohol_no.status === PsychoJS.Status.STARTED) {
    }
    
    if (ever_drink_alcohol_no.status === PsychoJS.Status.STARTED) {
      // check whether ever_drink_alcohol_no has been pressed
      if (ever_drink_alcohol_no.isClicked) {
        if (!ever_drink_alcohol_no.wasClicked) {
          // store time of first click
          ever_drink_alcohol_no.timesOn.push(ever_drink_alcohol_no.clock.getTime());
          // store time clicked until
          ever_drink_alcohol_no.timesOff.push(ever_drink_alcohol_no.clock.getTime());
        } else {
          // update time clicked until;
          ever_drink_alcohol_no.timesOff[ever_drink_alcohol_no.timesOff.length - 1] = ever_drink_alcohol_no.clock.getTime();
        }
        if (!ever_drink_alcohol_no.wasClicked) {
          // end routine when ever_drink_alcohol_no is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("ever_drink_alcohol", "\u5426");
        }
        // if ever_drink_alcohol_no is still clicked next frame, it is not a new click
        ever_drink_alcohol_no.wasClicked = true;
      } else {
        // if ever_drink_alcohol_no is clicked next frame, it is a new click
        ever_drink_alcohol_no.wasClicked = false;
      }
    } else {
      // keep clock at 0 if ever_drink_alcohol_no hasn't started / has finished
      ever_drink_alcohol_no.clock.reset();
      // if ever_drink_alcohol_no is clicked next frame, it is a new click
      ever_drink_alcohol_no.wasClicked = false;
    }
    
    // *Q14* updates
    if (t >= 0.0 && Q14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q14.tStart = t;  // (not accounting for frame time here)
      Q14.frameNStart = frameN;  // exact frame index
      
      Q14.setAutoDraw(true);
    }
    
    
    // if Q14 is active this frame...
    if (Q14.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ever_drink_alcoholComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ever_drink_alcoholRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ever_drink_alcohol' ---
    ever_drink_alcoholComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('ever_drink_alcohol.stopped', globalClock.getTime());
    psychoJS.experiment.addData('ever_drink_alcohol_yes.numClicks', ever_drink_alcohol_yes.numClicks);
    psychoJS.experiment.addData('ever_drink_alcohol_yes.timesOn', ever_drink_alcohol_yes.timesOn);
    psychoJS.experiment.addData('ever_drink_alcohol_yes.timesOff', ever_drink_alcohol_yes.timesOff);
    psychoJS.experiment.addData('ever_drink_alcohol_no.numClicks', ever_drink_alcohol_no.numClicks);
    psychoJS.experiment.addData('ever_drink_alcohol_no.timesOn', ever_drink_alcohol_no.timesOn);
    psychoJS.experiment.addData('ever_drink_alcohol_no.timesOff', ever_drink_alcohol_no.timesOff);
    // the Routine "ever_drink_alcohol" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var last_drink_timeMaxDurationReached;
var last_drink_timeMaxDuration;
var last_drink_timeComponents;
function last_drink_timeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'last_drink_time' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    last_drink_timeClock.reset();
    routineTimer.reset();
    last_drink_timeMaxDurationReached = false;
    // update component parameters for each repeat
    // reset last_drink_time_30days to account for continued clicks & clear times on/off
    last_drink_time_30days.reset()
    // reset last_drink_time_in12mons to account for continued clicks & clear times on/off
    last_drink_time_in12mons.reset()
    // reset last_drink_time_over12mons to account for continued clicks & clear times on/off
    last_drink_time_over12mons.reset()
    // reset last_drink_time_never to account for continued clicks & clear times on/off
    last_drink_time_never.reset()
    psychoJS.experiment.addData('last_drink_time.started', globalClock.getTime());
    last_drink_timeMaxDuration = null
    // keep track of which components have finished
    last_drink_timeComponents = [];
    last_drink_timeComponents.push(Q_last_drink_time);
    last_drink_timeComponents.push(last_drink_time_30days);
    last_drink_timeComponents.push(last_drink_time_in12mons);
    last_drink_timeComponents.push(last_drink_time_over12mons);
    last_drink_timeComponents.push(last_drink_time_never);
    last_drink_timeComponents.push(Q15);
    
    last_drink_timeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function last_drink_timeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'last_drink_time' ---
    // get current time
    t = last_drink_timeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Q_last_drink_time* updates
    if (t >= 0.0 && Q_last_drink_time.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q_last_drink_time.tStart = t;  // (not accounting for frame time here)
      Q_last_drink_time.frameNStart = frameN;  // exact frame index
      
      Q_last_drink_time.setAutoDraw(true);
    }
    
    
    // if Q_last_drink_time is active this frame...
    if (Q_last_drink_time.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *last_drink_time_30days* updates
    if (t >= 0 && last_drink_time_30days.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      last_drink_time_30days.tStart = t;  // (not accounting for frame time here)
      last_drink_time_30days.frameNStart = frameN;  // exact frame index
      
      last_drink_time_30days.setAutoDraw(true);
    }
    
    
    // if last_drink_time_30days is active this frame...
    if (last_drink_time_30days.status === PsychoJS.Status.STARTED) {
    }
    
    if (last_drink_time_30days.status === PsychoJS.Status.STARTED) {
      // check whether last_drink_time_30days has been pressed
      if (last_drink_time_30days.isClicked) {
        if (!last_drink_time_30days.wasClicked) {
          // store time of first click
          last_drink_time_30days.timesOn.push(last_drink_time_30days.clock.getTime());
          // store time clicked until
          last_drink_time_30days.timesOff.push(last_drink_time_30days.clock.getTime());
        } else {
          // update time clicked until;
          last_drink_time_30days.timesOff[last_drink_time_30days.timesOff.length - 1] = last_drink_time_30days.clock.getTime();
        }
        if (!last_drink_time_30days.wasClicked) {
          // end routine when last_drink_time_30days is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("last_drink_time", "\u8fc7\u53bb30\u5929\u5185");
        }
        // if last_drink_time_30days is still clicked next frame, it is not a new click
        last_drink_time_30days.wasClicked = true;
      } else {
        // if last_drink_time_30days is clicked next frame, it is a new click
        last_drink_time_30days.wasClicked = false;
      }
    } else {
      // keep clock at 0 if last_drink_time_30days hasn't started / has finished
      last_drink_time_30days.clock.reset();
      // if last_drink_time_30days is clicked next frame, it is a new click
      last_drink_time_30days.wasClicked = false;
    }
    
    // *last_drink_time_in12mons* updates
    if (t >= 0 && last_drink_time_in12mons.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      last_drink_time_in12mons.tStart = t;  // (not accounting for frame time here)
      last_drink_time_in12mons.frameNStart = frameN;  // exact frame index
      
      last_drink_time_in12mons.setAutoDraw(true);
    }
    
    
    // if last_drink_time_in12mons is active this frame...
    if (last_drink_time_in12mons.status === PsychoJS.Status.STARTED) {
    }
    
    if (last_drink_time_in12mons.status === PsychoJS.Status.STARTED) {
      // check whether last_drink_time_in12mons has been pressed
      if (last_drink_time_in12mons.isClicked) {
        if (!last_drink_time_in12mons.wasClicked) {
          // store time of first click
          last_drink_time_in12mons.timesOn.push(last_drink_time_in12mons.clock.getTime());
          // store time clicked until
          last_drink_time_in12mons.timesOff.push(last_drink_time_in12mons.clock.getTime());
        } else {
          // update time clicked until;
          last_drink_time_in12mons.timesOff[last_drink_time_in12mons.timesOff.length - 1] = last_drink_time_in12mons.clock.getTime();
        }
        if (!last_drink_time_in12mons.wasClicked) {
          // end routine when last_drink_time_in12mons is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("last_drink_time", "\u8fc7\u53bb12\u4e2a\u6708\u5185");
        }
        // if last_drink_time_in12mons is still clicked next frame, it is not a new click
        last_drink_time_in12mons.wasClicked = true;
      } else {
        // if last_drink_time_in12mons is clicked next frame, it is a new click
        last_drink_time_in12mons.wasClicked = false;
      }
    } else {
      // keep clock at 0 if last_drink_time_in12mons hasn't started / has finished
      last_drink_time_in12mons.clock.reset();
      // if last_drink_time_in12mons is clicked next frame, it is a new click
      last_drink_time_in12mons.wasClicked = false;
    }
    
    // *last_drink_time_over12mons* updates
    if (t >= 0 && last_drink_time_over12mons.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      last_drink_time_over12mons.tStart = t;  // (not accounting for frame time here)
      last_drink_time_over12mons.frameNStart = frameN;  // exact frame index
      
      last_drink_time_over12mons.setAutoDraw(true);
    }
    
    
    // if last_drink_time_over12mons is active this frame...
    if (last_drink_time_over12mons.status === PsychoJS.Status.STARTED) {
    }
    
    if (last_drink_time_over12mons.status === PsychoJS.Status.STARTED) {
      // check whether last_drink_time_over12mons has been pressed
      if (last_drink_time_over12mons.isClicked) {
        if (!last_drink_time_over12mons.wasClicked) {
          // store time of first click
          last_drink_time_over12mons.timesOn.push(last_drink_time_over12mons.clock.getTime());
          // store time clicked until
          last_drink_time_over12mons.timesOff.push(last_drink_time_over12mons.clock.getTime());
        } else {
          // update time clicked until;
          last_drink_time_over12mons.timesOff[last_drink_time_over12mons.timesOff.length - 1] = last_drink_time_over12mons.clock.getTime();
        }
        if (!last_drink_time_over12mons.wasClicked) {
          // end routine when last_drink_time_over12mons is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("last_drink_time", "\u8d85\u8fc712\u4e2a\u6708\u524d");
        }
        // if last_drink_time_over12mons is still clicked next frame, it is not a new click
        last_drink_time_over12mons.wasClicked = true;
      } else {
        // if last_drink_time_over12mons is clicked next frame, it is a new click
        last_drink_time_over12mons.wasClicked = false;
      }
    } else {
      // keep clock at 0 if last_drink_time_over12mons hasn't started / has finished
      last_drink_time_over12mons.clock.reset();
      // if last_drink_time_over12mons is clicked next frame, it is a new click
      last_drink_time_over12mons.wasClicked = false;
    }
    
    // *last_drink_time_never* updates
    if (t >= 0 && last_drink_time_never.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      last_drink_time_never.tStart = t;  // (not accounting for frame time here)
      last_drink_time_never.frameNStart = frameN;  // exact frame index
      
      last_drink_time_never.setAutoDraw(true);
    }
    
    
    // if last_drink_time_never is active this frame...
    if (last_drink_time_never.status === PsychoJS.Status.STARTED) {
    }
    
    if (last_drink_time_never.status === PsychoJS.Status.STARTED) {
      // check whether last_drink_time_never has been pressed
      if (last_drink_time_never.isClicked) {
        if (!last_drink_time_never.wasClicked) {
          // store time of first click
          last_drink_time_never.timesOn.push(last_drink_time_never.clock.getTime());
          // store time clicked until
          last_drink_time_never.timesOff.push(last_drink_time_never.clock.getTime());
        } else {
          // update time clicked until;
          last_drink_time_never.timesOff[last_drink_time_never.timesOff.length - 1] = last_drink_time_never.clock.getTime();
        }
        if (!last_drink_time_never.wasClicked) {
          // end routine when last_drink_time_never is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("last_drink_time", "\u4ece\u672a\u559d\u8fc7\u9152");
        }
        // if last_drink_time_never is still clicked next frame, it is not a new click
        last_drink_time_never.wasClicked = true;
      } else {
        // if last_drink_time_never is clicked next frame, it is a new click
        last_drink_time_never.wasClicked = false;
      }
    } else {
      // keep clock at 0 if last_drink_time_never hasn't started / has finished
      last_drink_time_never.clock.reset();
      // if last_drink_time_never is clicked next frame, it is a new click
      last_drink_time_never.wasClicked = false;
    }
    
    // *Q15* updates
    if (t >= 0.0 && Q15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q15.tStart = t;  // (not accounting for frame time here)
      Q15.frameNStart = frameN;  // exact frame index
      
      Q15.setAutoDraw(true);
    }
    
    
    // if Q15 is active this frame...
    if (Q15.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    last_drink_timeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function last_drink_timeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'last_drink_time' ---
    last_drink_timeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('last_drink_time.stopped', globalClock.getTime());
    psychoJS.experiment.addData('last_drink_time_30days.numClicks', last_drink_time_30days.numClicks);
    psychoJS.experiment.addData('last_drink_time_30days.timesOn', last_drink_time_30days.timesOn);
    psychoJS.experiment.addData('last_drink_time_30days.timesOff', last_drink_time_30days.timesOff);
    psychoJS.experiment.addData('last_drink_time_in12mons.numClicks', last_drink_time_in12mons.numClicks);
    psychoJS.experiment.addData('last_drink_time_in12mons.timesOn', last_drink_time_in12mons.timesOn);
    psychoJS.experiment.addData('last_drink_time_in12mons.timesOff', last_drink_time_in12mons.timesOff);
    psychoJS.experiment.addData('last_drink_time_over12mons.numClicks', last_drink_time_over12mons.numClicks);
    psychoJS.experiment.addData('last_drink_time_over12mons.timesOn', last_drink_time_over12mons.timesOn);
    psychoJS.experiment.addData('last_drink_time_over12mons.timesOff', last_drink_time_over12mons.timesOff);
    psychoJS.experiment.addData('last_drink_time_never.numClicks', last_drink_time_never.numClicks);
    psychoJS.experiment.addData('last_drink_time_never.timesOn', last_drink_time_never.timesOn);
    psychoJS.experiment.addData('last_drink_time_never.timesOff', last_drink_time_never.timesOff);
    // the Routine "last_drink_time" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var drink_freq_12mo_2MaxDurationReached;
var drink_freq_12mo_2MaxDuration;
var drink_freq_12mo_2Components;
function drink_freq_12mo_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'drink_freq_12mo_2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    drink_freq_12mo_2Clock.reset();
    routineTimer.reset();
    drink_freq_12mo_2MaxDurationReached = false;
    // update component parameters for each repeat
    // reset drink_freq_12mo_Everyday to account for continued clicks & clear times on/off
    drink_freq_12mo_Everyday.reset()
    // reset drink_freq_12mo_Severaltimesaweek to account for continued clicks & clear times on/off
    drink_freq_12mo_Severaltimesaweek.reset()
    // reset drink_freq_12mo_Severaltimesamonth to account for continued clicks & clear times on/off
    drink_freq_12mo_Severaltimesamonth.reset()
    // reset drink_freq_12mo_Rarely to account for continued clicks & clear times on/off
    drink_freq_12mo_Rarely.reset()
    // reset drink_freq_12mo_Never to account for continued clicks & clear times on/off
    drink_freq_12mo_Never.reset()
    psychoJS.experiment.addData('drink_freq_12mo_2.started', globalClock.getTime());
    drink_freq_12mo_2MaxDuration = null
    // keep track of which components have finished
    drink_freq_12mo_2Components = [];
    drink_freq_12mo_2Components.push(Q_drink_freq_12mo);
    drink_freq_12mo_2Components.push(drink_freq_12mo_Everyday);
    drink_freq_12mo_2Components.push(drink_freq_12mo_Severaltimesaweek);
    drink_freq_12mo_2Components.push(drink_freq_12mo_Severaltimesamonth);
    drink_freq_12mo_2Components.push(drink_freq_12mo_Rarely);
    drink_freq_12mo_2Components.push(drink_freq_12mo_Never);
    drink_freq_12mo_2Components.push(Q16);
    
    drink_freq_12mo_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function drink_freq_12mo_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'drink_freq_12mo_2' ---
    // get current time
    t = drink_freq_12mo_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Q_drink_freq_12mo* updates
    if (t >= 0.0 && Q_drink_freq_12mo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q_drink_freq_12mo.tStart = t;  // (not accounting for frame time here)
      Q_drink_freq_12mo.frameNStart = frameN;  // exact frame index
      
      Q_drink_freq_12mo.setAutoDraw(true);
    }
    
    
    // if Q_drink_freq_12mo is active this frame...
    if (Q_drink_freq_12mo.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *drink_freq_12mo_Everyday* updates
    if (t >= 0 && drink_freq_12mo_Everyday.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      drink_freq_12mo_Everyday.tStart = t;  // (not accounting for frame time here)
      drink_freq_12mo_Everyday.frameNStart = frameN;  // exact frame index
      
      drink_freq_12mo_Everyday.setAutoDraw(true);
    }
    
    
    // if drink_freq_12mo_Everyday is active this frame...
    if (drink_freq_12mo_Everyday.status === PsychoJS.Status.STARTED) {
    }
    
    if (drink_freq_12mo_Everyday.status === PsychoJS.Status.STARTED) {
      // check whether drink_freq_12mo_Everyday has been pressed
      if (drink_freq_12mo_Everyday.isClicked) {
        if (!drink_freq_12mo_Everyday.wasClicked) {
          // store time of first click
          drink_freq_12mo_Everyday.timesOn.push(drink_freq_12mo_Everyday.clock.getTime());
          // store time clicked until
          drink_freq_12mo_Everyday.timesOff.push(drink_freq_12mo_Everyday.clock.getTime());
        } else {
          // update time clicked until;
          drink_freq_12mo_Everyday.timesOff[drink_freq_12mo_Everyday.timesOff.length - 1] = drink_freq_12mo_Everyday.clock.getTime();
        }
        if (!drink_freq_12mo_Everyday.wasClicked) {
          // end routine when drink_freq_12mo_Everyday is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("drink_freq_12mo", "\u6bcf\u5929");
        }
        // if drink_freq_12mo_Everyday is still clicked next frame, it is not a new click
        drink_freq_12mo_Everyday.wasClicked = true;
      } else {
        // if drink_freq_12mo_Everyday is clicked next frame, it is a new click
        drink_freq_12mo_Everyday.wasClicked = false;
      }
    } else {
      // keep clock at 0 if drink_freq_12mo_Everyday hasn't started / has finished
      drink_freq_12mo_Everyday.clock.reset();
      // if drink_freq_12mo_Everyday is clicked next frame, it is a new click
      drink_freq_12mo_Everyday.wasClicked = false;
    }
    
    // *drink_freq_12mo_Severaltimesaweek* updates
    if (t >= 0 && drink_freq_12mo_Severaltimesaweek.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      drink_freq_12mo_Severaltimesaweek.tStart = t;  // (not accounting for frame time here)
      drink_freq_12mo_Severaltimesaweek.frameNStart = frameN;  // exact frame index
      
      drink_freq_12mo_Severaltimesaweek.setAutoDraw(true);
    }
    
    
    // if drink_freq_12mo_Severaltimesaweek is active this frame...
    if (drink_freq_12mo_Severaltimesaweek.status === PsychoJS.Status.STARTED) {
    }
    
    if (drink_freq_12mo_Severaltimesaweek.status === PsychoJS.Status.STARTED) {
      // check whether drink_freq_12mo_Severaltimesaweek has been pressed
      if (drink_freq_12mo_Severaltimesaweek.isClicked) {
        if (!drink_freq_12mo_Severaltimesaweek.wasClicked) {
          // store time of first click
          drink_freq_12mo_Severaltimesaweek.timesOn.push(drink_freq_12mo_Severaltimesaweek.clock.getTime());
          // store time clicked until
          drink_freq_12mo_Severaltimesaweek.timesOff.push(drink_freq_12mo_Severaltimesaweek.clock.getTime());
        } else {
          // update time clicked until;
          drink_freq_12mo_Severaltimesaweek.timesOff[drink_freq_12mo_Severaltimesaweek.timesOff.length - 1] = drink_freq_12mo_Severaltimesaweek.clock.getTime();
        }
        if (!drink_freq_12mo_Severaltimesaweek.wasClicked) {
          // end routine when drink_freq_12mo_Severaltimesaweek is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("drink_freq_12mo", "\u6bcf\u5468\u51e0\u6b21");
        }
        // if drink_freq_12mo_Severaltimesaweek is still clicked next frame, it is not a new click
        drink_freq_12mo_Severaltimesaweek.wasClicked = true;
      } else {
        // if drink_freq_12mo_Severaltimesaweek is clicked next frame, it is a new click
        drink_freq_12mo_Severaltimesaweek.wasClicked = false;
      }
    } else {
      // keep clock at 0 if drink_freq_12mo_Severaltimesaweek hasn't started / has finished
      drink_freq_12mo_Severaltimesaweek.clock.reset();
      // if drink_freq_12mo_Severaltimesaweek is clicked next frame, it is a new click
      drink_freq_12mo_Severaltimesaweek.wasClicked = false;
    }
    
    // *drink_freq_12mo_Severaltimesamonth* updates
    if (t >= 0 && drink_freq_12mo_Severaltimesamonth.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      drink_freq_12mo_Severaltimesamonth.tStart = t;  // (not accounting for frame time here)
      drink_freq_12mo_Severaltimesamonth.frameNStart = frameN;  // exact frame index
      
      drink_freq_12mo_Severaltimesamonth.setAutoDraw(true);
    }
    
    
    // if drink_freq_12mo_Severaltimesamonth is active this frame...
    if (drink_freq_12mo_Severaltimesamonth.status === PsychoJS.Status.STARTED) {
    }
    
    if (drink_freq_12mo_Severaltimesamonth.status === PsychoJS.Status.STARTED) {
      // check whether drink_freq_12mo_Severaltimesamonth has been pressed
      if (drink_freq_12mo_Severaltimesamonth.isClicked) {
        if (!drink_freq_12mo_Severaltimesamonth.wasClicked) {
          // store time of first click
          drink_freq_12mo_Severaltimesamonth.timesOn.push(drink_freq_12mo_Severaltimesamonth.clock.getTime());
          // store time clicked until
          drink_freq_12mo_Severaltimesamonth.timesOff.push(drink_freq_12mo_Severaltimesamonth.clock.getTime());
        } else {
          // update time clicked until;
          drink_freq_12mo_Severaltimesamonth.timesOff[drink_freq_12mo_Severaltimesamonth.timesOff.length - 1] = drink_freq_12mo_Severaltimesamonth.clock.getTime();
        }
        if (!drink_freq_12mo_Severaltimesamonth.wasClicked) {
          // end routine when drink_freq_12mo_Severaltimesamonth is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("drink_freq_12mo", "\u6bcf\u6708\u51e0\u6b21");
        }
        // if drink_freq_12mo_Severaltimesamonth is still clicked next frame, it is not a new click
        drink_freq_12mo_Severaltimesamonth.wasClicked = true;
      } else {
        // if drink_freq_12mo_Severaltimesamonth is clicked next frame, it is a new click
        drink_freq_12mo_Severaltimesamonth.wasClicked = false;
      }
    } else {
      // keep clock at 0 if drink_freq_12mo_Severaltimesamonth hasn't started / has finished
      drink_freq_12mo_Severaltimesamonth.clock.reset();
      // if drink_freq_12mo_Severaltimesamonth is clicked next frame, it is a new click
      drink_freq_12mo_Severaltimesamonth.wasClicked = false;
    }
    
    // *drink_freq_12mo_Rarely* updates
    if (t >= 0 && drink_freq_12mo_Rarely.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      drink_freq_12mo_Rarely.tStart = t;  // (not accounting for frame time here)
      drink_freq_12mo_Rarely.frameNStart = frameN;  // exact frame index
      
      drink_freq_12mo_Rarely.setAutoDraw(true);
    }
    
    
    // if drink_freq_12mo_Rarely is active this frame...
    if (drink_freq_12mo_Rarely.status === PsychoJS.Status.STARTED) {
    }
    
    if (drink_freq_12mo_Rarely.status === PsychoJS.Status.STARTED) {
      // check whether drink_freq_12mo_Rarely has been pressed
      if (drink_freq_12mo_Rarely.isClicked) {
        if (!drink_freq_12mo_Rarely.wasClicked) {
          // store time of first click
          drink_freq_12mo_Rarely.timesOn.push(drink_freq_12mo_Rarely.clock.getTime());
          // store time clicked until
          drink_freq_12mo_Rarely.timesOff.push(drink_freq_12mo_Rarely.clock.getTime());
        } else {
          // update time clicked until;
          drink_freq_12mo_Rarely.timesOff[drink_freq_12mo_Rarely.timesOff.length - 1] = drink_freq_12mo_Rarely.clock.getTime();
        }
        if (!drink_freq_12mo_Rarely.wasClicked) {
          // end routine when drink_freq_12mo_Rarely is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("drink_freq_12mo", "\u5f88\u5c11");
        }
        // if drink_freq_12mo_Rarely is still clicked next frame, it is not a new click
        drink_freq_12mo_Rarely.wasClicked = true;
      } else {
        // if drink_freq_12mo_Rarely is clicked next frame, it is a new click
        drink_freq_12mo_Rarely.wasClicked = false;
      }
    } else {
      // keep clock at 0 if drink_freq_12mo_Rarely hasn't started / has finished
      drink_freq_12mo_Rarely.clock.reset();
      // if drink_freq_12mo_Rarely is clicked next frame, it is a new click
      drink_freq_12mo_Rarely.wasClicked = false;
    }
    
    // *drink_freq_12mo_Never* updates
    if (t >= 0 && drink_freq_12mo_Never.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      drink_freq_12mo_Never.tStart = t;  // (not accounting for frame time here)
      drink_freq_12mo_Never.frameNStart = frameN;  // exact frame index
      
      drink_freq_12mo_Never.setAutoDraw(true);
    }
    
    
    // if drink_freq_12mo_Never is active this frame...
    if (drink_freq_12mo_Never.status === PsychoJS.Status.STARTED) {
    }
    
    if (drink_freq_12mo_Never.status === PsychoJS.Status.STARTED) {
      // check whether drink_freq_12mo_Never has been pressed
      if (drink_freq_12mo_Never.isClicked) {
        if (!drink_freq_12mo_Never.wasClicked) {
          // store time of first click
          drink_freq_12mo_Never.timesOn.push(drink_freq_12mo_Never.clock.getTime());
          // store time clicked until
          drink_freq_12mo_Never.timesOff.push(drink_freq_12mo_Never.clock.getTime());
        } else {
          // update time clicked until;
          drink_freq_12mo_Never.timesOff[drink_freq_12mo_Never.timesOff.length - 1] = drink_freq_12mo_Never.clock.getTime();
        }
        if (!drink_freq_12mo_Never.wasClicked) {
          // end routine when drink_freq_12mo_Never is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("drink_freq_12mo", "\u4ece\u4e0d");
        }
        // if drink_freq_12mo_Never is still clicked next frame, it is not a new click
        drink_freq_12mo_Never.wasClicked = true;
      } else {
        // if drink_freq_12mo_Never is clicked next frame, it is a new click
        drink_freq_12mo_Never.wasClicked = false;
      }
    } else {
      // keep clock at 0 if drink_freq_12mo_Never hasn't started / has finished
      drink_freq_12mo_Never.clock.reset();
      // if drink_freq_12mo_Never is clicked next frame, it is a new click
      drink_freq_12mo_Never.wasClicked = false;
    }
    
    // *Q16* updates
    if (t >= 0.0 && Q16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q16.tStart = t;  // (not accounting for frame time here)
      Q16.frameNStart = frameN;  // exact frame index
      
      Q16.setAutoDraw(true);
    }
    
    
    // if Q16 is active this frame...
    if (Q16.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    drink_freq_12mo_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function drink_freq_12mo_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'drink_freq_12mo_2' ---
    drink_freq_12mo_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('drink_freq_12mo_2.stopped', globalClock.getTime());
    psychoJS.experiment.addData('drink_freq_12mo_Everyday.numClicks', drink_freq_12mo_Everyday.numClicks);
    psychoJS.experiment.addData('drink_freq_12mo_Everyday.timesOn', drink_freq_12mo_Everyday.timesOn);
    psychoJS.experiment.addData('drink_freq_12mo_Everyday.timesOff', drink_freq_12mo_Everyday.timesOff);
    psychoJS.experiment.addData('drink_freq_12mo_Severaltimesaweek.numClicks', drink_freq_12mo_Severaltimesaweek.numClicks);
    psychoJS.experiment.addData('drink_freq_12mo_Severaltimesaweek.timesOn', drink_freq_12mo_Severaltimesaweek.timesOn);
    psychoJS.experiment.addData('drink_freq_12mo_Severaltimesaweek.timesOff', drink_freq_12mo_Severaltimesaweek.timesOff);
    psychoJS.experiment.addData('drink_freq_12mo_Severaltimesamonth.numClicks', drink_freq_12mo_Severaltimesamonth.numClicks);
    psychoJS.experiment.addData('drink_freq_12mo_Severaltimesamonth.timesOn', drink_freq_12mo_Severaltimesamonth.timesOn);
    psychoJS.experiment.addData('drink_freq_12mo_Severaltimesamonth.timesOff', drink_freq_12mo_Severaltimesamonth.timesOff);
    psychoJS.experiment.addData('drink_freq_12mo_Rarely.numClicks', drink_freq_12mo_Rarely.numClicks);
    psychoJS.experiment.addData('drink_freq_12mo_Rarely.timesOn', drink_freq_12mo_Rarely.timesOn);
    psychoJS.experiment.addData('drink_freq_12mo_Rarely.timesOff', drink_freq_12mo_Rarely.timesOff);
    psychoJS.experiment.addData('drink_freq_12mo_Never.numClicks', drink_freq_12mo_Never.numClicks);
    psychoJS.experiment.addData('drink_freq_12mo_Never.timesOn', drink_freq_12mo_Never.timesOn);
    psychoJS.experiment.addData('drink_freq_12mo_Never.timesOff', drink_freq_12mo_Never.timesOff);
    // the Routine "drink_freq_12mo_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var drink_amount_12moMaxDurationReached;
var drink_amount_12moMaxDuration;
var drink_amount_12moComponents;
function drink_amount_12moRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'drink_amount_12mo' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    drink_amount_12moClock.reset();
    routineTimer.reset();
    drink_amount_12moMaxDurationReached = false;
    // update component parameters for each repeat
    // reset drink_amount__12mo_0glass to account for continued clicks & clear times on/off
    drink_amount__12mo_0glass.reset()
    // reset drink_amount_12mo_1glass to account for continued clicks & clear times on/off
    drink_amount_12mo_1glass.reset()
    // reset drink_amount_12mo_2glass to account for continued clicks & clear times on/off
    drink_amount_12mo_2glass.reset()
    // reset drink_amount_12mo_3glasses to account for continued clicks & clear times on/off
    drink_amount_12mo_3glasses.reset()
    // reset drink_amount_12mo_4glasses to account for continued clicks & clear times on/off
    drink_amount_12mo_4glasses.reset()
    // reset drink_amount_12mo_5glassesmore to account for continued clicks & clear times on/off
    drink_amount_12mo_5glassesmore.reset()
    psychoJS.experiment.addData('drink_amount_12mo.started', globalClock.getTime());
    drink_amount_12moMaxDuration = null
    // keep track of which components have finished
    drink_amount_12moComponents = [];
    drink_amount_12moComponents.push(Q_drink_amount_12mo);
    drink_amount_12moComponents.push(drink_amount__12mo_0glass);
    drink_amount_12moComponents.push(drink_amount_12mo_1glass);
    drink_amount_12moComponents.push(drink_amount_12mo_2glass);
    drink_amount_12moComponents.push(drink_amount_12mo_3glasses);
    drink_amount_12moComponents.push(drink_amount_12mo_4glasses);
    drink_amount_12moComponents.push(drink_amount_12mo_5glassesmore);
    drink_amount_12moComponents.push(Q17);
    
    drink_amount_12moComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function drink_amount_12moRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'drink_amount_12mo' ---
    // get current time
    t = drink_amount_12moClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Q_drink_amount_12mo* updates
    if (t >= 0.0 && Q_drink_amount_12mo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q_drink_amount_12mo.tStart = t;  // (not accounting for frame time here)
      Q_drink_amount_12mo.frameNStart = frameN;  // exact frame index
      
      Q_drink_amount_12mo.setAutoDraw(true);
    }
    
    
    // if Q_drink_amount_12mo is active this frame...
    if (Q_drink_amount_12mo.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *drink_amount__12mo_0glass* updates
    if (t >= 0 && drink_amount__12mo_0glass.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      drink_amount__12mo_0glass.tStart = t;  // (not accounting for frame time here)
      drink_amount__12mo_0glass.frameNStart = frameN;  // exact frame index
      
      drink_amount__12mo_0glass.setAutoDraw(true);
    }
    
    
    // if drink_amount__12mo_0glass is active this frame...
    if (drink_amount__12mo_0glass.status === PsychoJS.Status.STARTED) {
    }
    
    if (drink_amount__12mo_0glass.status === PsychoJS.Status.STARTED) {
      // check whether drink_amount__12mo_0glass has been pressed
      if (drink_amount__12mo_0glass.isClicked) {
        if (!drink_amount__12mo_0glass.wasClicked) {
          // store time of first click
          drink_amount__12mo_0glass.timesOn.push(drink_amount__12mo_0glass.clock.getTime());
          // store time clicked until
          drink_amount__12mo_0glass.timesOff.push(drink_amount__12mo_0glass.clock.getTime());
        } else {
          // update time clicked until;
          drink_amount__12mo_0glass.timesOff[drink_amount__12mo_0glass.timesOff.length - 1] = drink_amount__12mo_0glass.clock.getTime();
        }
        if (!drink_amount__12mo_0glass.wasClicked) {
          // end routine when drink_amount__12mo_0glass is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("drink_amount_12mo", "0\u676f");
        }
        // if drink_amount__12mo_0glass is still clicked next frame, it is not a new click
        drink_amount__12mo_0glass.wasClicked = true;
      } else {
        // if drink_amount__12mo_0glass is clicked next frame, it is a new click
        drink_amount__12mo_0glass.wasClicked = false;
      }
    } else {
      // keep clock at 0 if drink_amount__12mo_0glass hasn't started / has finished
      drink_amount__12mo_0glass.clock.reset();
      // if drink_amount__12mo_0glass is clicked next frame, it is a new click
      drink_amount__12mo_0glass.wasClicked = false;
    }
    
    // *drink_amount_12mo_1glass* updates
    if (t >= 0 && drink_amount_12mo_1glass.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      drink_amount_12mo_1glass.tStart = t;  // (not accounting for frame time here)
      drink_amount_12mo_1glass.frameNStart = frameN;  // exact frame index
      
      drink_amount_12mo_1glass.setAutoDraw(true);
    }
    
    
    // if drink_amount_12mo_1glass is active this frame...
    if (drink_amount_12mo_1glass.status === PsychoJS.Status.STARTED) {
    }
    
    if (drink_amount_12mo_1glass.status === PsychoJS.Status.STARTED) {
      // check whether drink_amount_12mo_1glass has been pressed
      if (drink_amount_12mo_1glass.isClicked) {
        if (!drink_amount_12mo_1glass.wasClicked) {
          // store time of first click
          drink_amount_12mo_1glass.timesOn.push(drink_amount_12mo_1glass.clock.getTime());
          // store time clicked until
          drink_amount_12mo_1glass.timesOff.push(drink_amount_12mo_1glass.clock.getTime());
        } else {
          // update time clicked until;
          drink_amount_12mo_1glass.timesOff[drink_amount_12mo_1glass.timesOff.length - 1] = drink_amount_12mo_1glass.clock.getTime();
        }
        if (!drink_amount_12mo_1glass.wasClicked) {
          // end routine when drink_amount_12mo_1glass is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("drink_amount_12mo", "1\u676f");
        }
        // if drink_amount_12mo_1glass is still clicked next frame, it is not a new click
        drink_amount_12mo_1glass.wasClicked = true;
      } else {
        // if drink_amount_12mo_1glass is clicked next frame, it is a new click
        drink_amount_12mo_1glass.wasClicked = false;
      }
    } else {
      // keep clock at 0 if drink_amount_12mo_1glass hasn't started / has finished
      drink_amount_12mo_1glass.clock.reset();
      // if drink_amount_12mo_1glass is clicked next frame, it is a new click
      drink_amount_12mo_1glass.wasClicked = false;
    }
    
    // *drink_amount_12mo_2glass* updates
    if (t >= 0 && drink_amount_12mo_2glass.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      drink_amount_12mo_2glass.tStart = t;  // (not accounting for frame time here)
      drink_amount_12mo_2glass.frameNStart = frameN;  // exact frame index
      
      drink_amount_12mo_2glass.setAutoDraw(true);
    }
    
    
    // if drink_amount_12mo_2glass is active this frame...
    if (drink_amount_12mo_2glass.status === PsychoJS.Status.STARTED) {
    }
    
    if (drink_amount_12mo_2glass.status === PsychoJS.Status.STARTED) {
      // check whether drink_amount_12mo_2glass has been pressed
      if (drink_amount_12mo_2glass.isClicked) {
        if (!drink_amount_12mo_2glass.wasClicked) {
          // store time of first click
          drink_amount_12mo_2glass.timesOn.push(drink_amount_12mo_2glass.clock.getTime());
          // store time clicked until
          drink_amount_12mo_2glass.timesOff.push(drink_amount_12mo_2glass.clock.getTime());
        } else {
          // update time clicked until;
          drink_amount_12mo_2glass.timesOff[drink_amount_12mo_2glass.timesOff.length - 1] = drink_amount_12mo_2glass.clock.getTime();
        }
        if (!drink_amount_12mo_2glass.wasClicked) {
          // end routine when drink_amount_12mo_2glass is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("drink_amount_12mo", "2\u676f");
        }
        // if drink_amount_12mo_2glass is still clicked next frame, it is not a new click
        drink_amount_12mo_2glass.wasClicked = true;
      } else {
        // if drink_amount_12mo_2glass is clicked next frame, it is a new click
        drink_amount_12mo_2glass.wasClicked = false;
      }
    } else {
      // keep clock at 0 if drink_amount_12mo_2glass hasn't started / has finished
      drink_amount_12mo_2glass.clock.reset();
      // if drink_amount_12mo_2glass is clicked next frame, it is a new click
      drink_amount_12mo_2glass.wasClicked = false;
    }
    
    // *drink_amount_12mo_3glasses* updates
    if (t >= 0 && drink_amount_12mo_3glasses.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      drink_amount_12mo_3glasses.tStart = t;  // (not accounting for frame time here)
      drink_amount_12mo_3glasses.frameNStart = frameN;  // exact frame index
      
      drink_amount_12mo_3glasses.setAutoDraw(true);
    }
    
    
    // if drink_amount_12mo_3glasses is active this frame...
    if (drink_amount_12mo_3glasses.status === PsychoJS.Status.STARTED) {
    }
    
    if (drink_amount_12mo_3glasses.status === PsychoJS.Status.STARTED) {
      // check whether drink_amount_12mo_3glasses has been pressed
      if (drink_amount_12mo_3glasses.isClicked) {
        if (!drink_amount_12mo_3glasses.wasClicked) {
          // store time of first click
          drink_amount_12mo_3glasses.timesOn.push(drink_amount_12mo_3glasses.clock.getTime());
          // store time clicked until
          drink_amount_12mo_3glasses.timesOff.push(drink_amount_12mo_3glasses.clock.getTime());
        } else {
          // update time clicked until;
          drink_amount_12mo_3glasses.timesOff[drink_amount_12mo_3glasses.timesOff.length - 1] = drink_amount_12mo_3glasses.clock.getTime();
        }
        if (!drink_amount_12mo_3glasses.wasClicked) {
          // end routine when drink_amount_12mo_3glasses is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("drink_amount_12mo", "3\u676f");
        }
        // if drink_amount_12mo_3glasses is still clicked next frame, it is not a new click
        drink_amount_12mo_3glasses.wasClicked = true;
      } else {
        // if drink_amount_12mo_3glasses is clicked next frame, it is a new click
        drink_amount_12mo_3glasses.wasClicked = false;
      }
    } else {
      // keep clock at 0 if drink_amount_12mo_3glasses hasn't started / has finished
      drink_amount_12mo_3glasses.clock.reset();
      // if drink_amount_12mo_3glasses is clicked next frame, it is a new click
      drink_amount_12mo_3glasses.wasClicked = false;
    }
    
    // *drink_amount_12mo_4glasses* updates
    if (t >= 0 && drink_amount_12mo_4glasses.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      drink_amount_12mo_4glasses.tStart = t;  // (not accounting for frame time here)
      drink_amount_12mo_4glasses.frameNStart = frameN;  // exact frame index
      
      drink_amount_12mo_4glasses.setAutoDraw(true);
    }
    
    
    // if drink_amount_12mo_4glasses is active this frame...
    if (drink_amount_12mo_4glasses.status === PsychoJS.Status.STARTED) {
    }
    
    if (drink_amount_12mo_4glasses.status === PsychoJS.Status.STARTED) {
      // check whether drink_amount_12mo_4glasses has been pressed
      if (drink_amount_12mo_4glasses.isClicked) {
        if (!drink_amount_12mo_4glasses.wasClicked) {
          // store time of first click
          drink_amount_12mo_4glasses.timesOn.push(drink_amount_12mo_4glasses.clock.getTime());
          // store time clicked until
          drink_amount_12mo_4glasses.timesOff.push(drink_amount_12mo_4glasses.clock.getTime());
        } else {
          // update time clicked until;
          drink_amount_12mo_4glasses.timesOff[drink_amount_12mo_4glasses.timesOff.length - 1] = drink_amount_12mo_4glasses.clock.getTime();
        }
        if (!drink_amount_12mo_4glasses.wasClicked) {
          // end routine when drink_amount_12mo_4glasses is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("drink_amount_12mo", "4\u676f");
        }
        // if drink_amount_12mo_4glasses is still clicked next frame, it is not a new click
        drink_amount_12mo_4glasses.wasClicked = true;
      } else {
        // if drink_amount_12mo_4glasses is clicked next frame, it is a new click
        drink_amount_12mo_4glasses.wasClicked = false;
      }
    } else {
      // keep clock at 0 if drink_amount_12mo_4glasses hasn't started / has finished
      drink_amount_12mo_4glasses.clock.reset();
      // if drink_amount_12mo_4glasses is clicked next frame, it is a new click
      drink_amount_12mo_4glasses.wasClicked = false;
    }
    
    // *drink_amount_12mo_5glassesmore* updates
    if (t >= 0 && drink_amount_12mo_5glassesmore.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      drink_amount_12mo_5glassesmore.tStart = t;  // (not accounting for frame time here)
      drink_amount_12mo_5glassesmore.frameNStart = frameN;  // exact frame index
      
      drink_amount_12mo_5glassesmore.setAutoDraw(true);
    }
    
    
    // if drink_amount_12mo_5glassesmore is active this frame...
    if (drink_amount_12mo_5glassesmore.status === PsychoJS.Status.STARTED) {
    }
    
    if (drink_amount_12mo_5glassesmore.status === PsychoJS.Status.STARTED) {
      // check whether drink_amount_12mo_5glassesmore has been pressed
      if (drink_amount_12mo_5glassesmore.isClicked) {
        if (!drink_amount_12mo_5glassesmore.wasClicked) {
          // store time of first click
          drink_amount_12mo_5glassesmore.timesOn.push(drink_amount_12mo_5glassesmore.clock.getTime());
          // store time clicked until
          drink_amount_12mo_5glassesmore.timesOff.push(drink_amount_12mo_5glassesmore.clock.getTime());
        } else {
          // update time clicked until;
          drink_amount_12mo_5glassesmore.timesOff[drink_amount_12mo_5glassesmore.timesOff.length - 1] = drink_amount_12mo_5glassesmore.clock.getTime();
        }
        if (!drink_amount_12mo_5glassesmore.wasClicked) {
          // end routine when drink_amount_12mo_5glassesmore is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("drink_amount_12mo", "5\u676f\u6216\u66f4\u591a");
        }
        // if drink_amount_12mo_5glassesmore is still clicked next frame, it is not a new click
        drink_amount_12mo_5glassesmore.wasClicked = true;
      } else {
        // if drink_amount_12mo_5glassesmore is clicked next frame, it is a new click
        drink_amount_12mo_5glassesmore.wasClicked = false;
      }
    } else {
      // keep clock at 0 if drink_amount_12mo_5glassesmore hasn't started / has finished
      drink_amount_12mo_5glassesmore.clock.reset();
      // if drink_amount_12mo_5glassesmore is clicked next frame, it is a new click
      drink_amount_12mo_5glassesmore.wasClicked = false;
    }
    
    // *Q17* updates
    if (t >= 0.0 && Q17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q17.tStart = t;  // (not accounting for frame time here)
      Q17.frameNStart = frameN;  // exact frame index
      
      Q17.setAutoDraw(true);
    }
    
    
    // if Q17 is active this frame...
    if (Q17.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    drink_amount_12moComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function drink_amount_12moRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'drink_amount_12mo' ---
    drink_amount_12moComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('drink_amount_12mo.stopped', globalClock.getTime());
    psychoJS.experiment.addData('drink_amount__12mo_0glass.numClicks', drink_amount__12mo_0glass.numClicks);
    psychoJS.experiment.addData('drink_amount__12mo_0glass.timesOn', drink_amount__12mo_0glass.timesOn);
    psychoJS.experiment.addData('drink_amount__12mo_0glass.timesOff', drink_amount__12mo_0glass.timesOff);
    psychoJS.experiment.addData('drink_amount_12mo_1glass.numClicks', drink_amount_12mo_1glass.numClicks);
    psychoJS.experiment.addData('drink_amount_12mo_1glass.timesOn', drink_amount_12mo_1glass.timesOn);
    psychoJS.experiment.addData('drink_amount_12mo_1glass.timesOff', drink_amount_12mo_1glass.timesOff);
    psychoJS.experiment.addData('drink_amount_12mo_2glass.numClicks', drink_amount_12mo_2glass.numClicks);
    psychoJS.experiment.addData('drink_amount_12mo_2glass.timesOn', drink_amount_12mo_2glass.timesOn);
    psychoJS.experiment.addData('drink_amount_12mo_2glass.timesOff', drink_amount_12mo_2glass.timesOff);
    psychoJS.experiment.addData('drink_amount_12mo_3glasses.numClicks', drink_amount_12mo_3glasses.numClicks);
    psychoJS.experiment.addData('drink_amount_12mo_3glasses.timesOn', drink_amount_12mo_3glasses.timesOn);
    psychoJS.experiment.addData('drink_amount_12mo_3glasses.timesOff', drink_amount_12mo_3glasses.timesOff);
    psychoJS.experiment.addData('drink_amount_12mo_4glasses.numClicks', drink_amount_12mo_4glasses.numClicks);
    psychoJS.experiment.addData('drink_amount_12mo_4glasses.timesOn', drink_amount_12mo_4glasses.timesOn);
    psychoJS.experiment.addData('drink_amount_12mo_4glasses.timesOff', drink_amount_12mo_4glasses.timesOff);
    psychoJS.experiment.addData('drink_amount_12mo_5glassesmore.numClicks', drink_amount_12mo_5glassesmore.numClicks);
    psychoJS.experiment.addData('drink_amount_12mo_5glassesmore.timesOn', drink_amount_12mo_5glassesmore.timesOn);
    psychoJS.experiment.addData('drink_amount_12mo_5glassesmore.timesOff', drink_amount_12mo_5glassesmore.timesOff);
    // the Routine "drink_amount_12mo" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ever_smokeMaxDurationReached;
var ever_smokeMaxDuration;
var ever_smokeComponents;
function ever_smokeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ever_smoke' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    ever_smokeClock.reset();
    routineTimer.reset();
    ever_smokeMaxDurationReached = false;
    // update component parameters for each repeat
    // reset never_smoke to account for continued clicks & clear times on/off
    never_smoke.reset()
    // reset before_smoke to account for continued clicks & clear times on/off
    before_smoke.reset()
    // reset still_smoke to account for continued clicks & clear times on/off
    still_smoke.reset()
    psychoJS.experiment.addData('ever_smoke.started', globalClock.getTime());
    ever_smokeMaxDuration = null
    // keep track of which components have finished
    ever_smokeComponents = [];
    ever_smokeComponents.push(Q_ever_smoke);
    ever_smokeComponents.push(never_smoke);
    ever_smokeComponents.push(before_smoke);
    ever_smokeComponents.push(still_smoke);
    ever_smokeComponents.push(Q18);
    
    ever_smokeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function ever_smokeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ever_smoke' ---
    // get current time
    t = ever_smokeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Q_ever_smoke* updates
    if (t >= 0.0 && Q_ever_smoke.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q_ever_smoke.tStart = t;  // (not accounting for frame time here)
      Q_ever_smoke.frameNStart = frameN;  // exact frame index
      
      Q_ever_smoke.setAutoDraw(true);
    }
    
    
    // if Q_ever_smoke is active this frame...
    if (Q_ever_smoke.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *never_smoke* updates
    if (t >= 0 && never_smoke.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      never_smoke.tStart = t;  // (not accounting for frame time here)
      never_smoke.frameNStart = frameN;  // exact frame index
      
      never_smoke.setAutoDraw(true);
    }
    
    
    // if never_smoke is active this frame...
    if (never_smoke.status === PsychoJS.Status.STARTED) {
    }
    
    if (never_smoke.status === PsychoJS.Status.STARTED) {
      // check whether never_smoke has been pressed
      if (never_smoke.isClicked) {
        if (!never_smoke.wasClicked) {
          // store time of first click
          never_smoke.timesOn.push(never_smoke.clock.getTime());
          // store time clicked until
          never_smoke.timesOff.push(never_smoke.clock.getTime());
        } else {
          // update time clicked until;
          never_smoke.timesOff[never_smoke.timesOff.length - 1] = never_smoke.clock.getTime();
        }
        if (!never_smoke.wasClicked) {
          // end routine when never_smoke is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("ever_smoke", "\u4ece\u672a\u5438\u70df");
        }
        // if never_smoke is still clicked next frame, it is not a new click
        never_smoke.wasClicked = true;
      } else {
        // if never_smoke is clicked next frame, it is a new click
        never_smoke.wasClicked = false;
      }
    } else {
      // keep clock at 0 if never_smoke hasn't started / has finished
      never_smoke.clock.reset();
      // if never_smoke is clicked next frame, it is a new click
      never_smoke.wasClicked = false;
    }
    
    // *before_smoke* updates
    if (t >= 0 && before_smoke.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      before_smoke.tStart = t;  // (not accounting for frame time here)
      before_smoke.frameNStart = frameN;  // exact frame index
      
      before_smoke.setAutoDraw(true);
    }
    
    
    // if before_smoke is active this frame...
    if (before_smoke.status === PsychoJS.Status.STARTED) {
    }
    
    if (before_smoke.status === PsychoJS.Status.STARTED) {
      // check whether before_smoke has been pressed
      if (before_smoke.isClicked) {
        if (!before_smoke.wasClicked) {
          // store time of first click
          before_smoke.timesOn.push(before_smoke.clock.getTime());
          // store time clicked until
          before_smoke.timesOff.push(before_smoke.clock.getTime());
        } else {
          // update time clicked until;
          before_smoke.timesOff[before_smoke.timesOff.length - 1] = before_smoke.clock.getTime();
        }
        if (!before_smoke.wasClicked) {
          // end routine when before_smoke is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("ever_smoke", "\u8fc7\u53bb\u5438\u8fc7\u4f46\u5df2\u6212\u70df");
        }
        // if before_smoke is still clicked next frame, it is not a new click
        before_smoke.wasClicked = true;
      } else {
        // if before_smoke is clicked next frame, it is a new click
        before_smoke.wasClicked = false;
      }
    } else {
      // keep clock at 0 if before_smoke hasn't started / has finished
      before_smoke.clock.reset();
      // if before_smoke is clicked next frame, it is a new click
      before_smoke.wasClicked = false;
    }
    
    // *still_smoke* updates
    if (t >= 0 && still_smoke.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      still_smoke.tStart = t;  // (not accounting for frame time here)
      still_smoke.frameNStart = frameN;  // exact frame index
      
      still_smoke.setAutoDraw(true);
    }
    
    
    // if still_smoke is active this frame...
    if (still_smoke.status === PsychoJS.Status.STARTED) {
    }
    
    if (still_smoke.status === PsychoJS.Status.STARTED) {
      // check whether still_smoke has been pressed
      if (still_smoke.isClicked) {
        if (!still_smoke.wasClicked) {
          // store time of first click
          still_smoke.timesOn.push(still_smoke.clock.getTime());
          // store time clicked until
          still_smoke.timesOff.push(still_smoke.clock.getTime());
        } else {
          // update time clicked until;
          still_smoke.timesOff[still_smoke.timesOff.length - 1] = still_smoke.clock.getTime();
        }
        if (!still_smoke.wasClicked) {
          // end routine when still_smoke is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("ever_smoke", "\u73b0\u5728\u4ecd\u5728\u5438\u70df");
        }
        // if still_smoke is still clicked next frame, it is not a new click
        still_smoke.wasClicked = true;
      } else {
        // if still_smoke is clicked next frame, it is a new click
        still_smoke.wasClicked = false;
      }
    } else {
      // keep clock at 0 if still_smoke hasn't started / has finished
      still_smoke.clock.reset();
      // if still_smoke is clicked next frame, it is a new click
      still_smoke.wasClicked = false;
    }
    
    // *Q18* updates
    if (t >= 0.0 && Q18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q18.tStart = t;  // (not accounting for frame time here)
      Q18.frameNStart = frameN;  // exact frame index
      
      Q18.setAutoDraw(true);
    }
    
    
    // if Q18 is active this frame...
    if (Q18.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ever_smokeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ever_smokeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ever_smoke' ---
    ever_smokeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('ever_smoke.stopped', globalClock.getTime());
    psychoJS.experiment.addData('never_smoke.numClicks', never_smoke.numClicks);
    psychoJS.experiment.addData('never_smoke.timesOn', never_smoke.timesOn);
    psychoJS.experiment.addData('never_smoke.timesOff', never_smoke.timesOff);
    psychoJS.experiment.addData('before_smoke.numClicks', before_smoke.numClicks);
    psychoJS.experiment.addData('before_smoke.timesOn', before_smoke.timesOn);
    psychoJS.experiment.addData('before_smoke.timesOff', before_smoke.timesOff);
    psychoJS.experiment.addData('still_smoke.numClicks', still_smoke.numClicks);
    psychoJS.experiment.addData('still_smoke.timesOn', still_smoke.timesOn);
    psychoJS.experiment.addData('still_smoke.timesOff', still_smoke.timesOff);
    // the Routine "ever_smoke" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var start_smoke_ageMaxDurationReached;
var start_smoke_ageMaxDuration;
var start_smoke_ageComponents;
function start_smoke_ageRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'start_smoke_age' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    start_smoke_ageClock.reset();
    routineTimer.reset();
    start_smoke_ageMaxDurationReached = false;
    // update component parameters for each repeat
    textbox_start_smoke_age.setText('');
    textbox_start_smoke_age.refresh();
    psychoJS.experiment.addData('start_smoke_age.started', globalClock.getTime());
    start_smoke_ageMaxDuration = null
    // keep track of which components have finished
    start_smoke_ageComponents = [];
    start_smoke_ageComponents.push(Q_start_smoke_age);
    start_smoke_ageComponents.push(textbox_start_smoke_age);
    start_smoke_ageComponents.push(Q19);
    start_smoke_ageComponents.push(hit_star_smoke_age);
    start_smoke_ageComponents.push(cigs_hint);
    
    start_smoke_ageComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function start_smoke_ageRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'start_smoke_age' ---
    // get current time
    t = start_smoke_ageClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Q_start_smoke_age* updates
    if (t >= 0.0 && Q_start_smoke_age.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q_start_smoke_age.tStart = t;  // (not accounting for frame time here)
      Q_start_smoke_age.frameNStart = frameN;  // exact frame index
      
      Q_start_smoke_age.setAutoDraw(true);
    }
    
    
    // if Q_start_smoke_age is active this frame...
    if (Q_start_smoke_age.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *textbox_start_smoke_age* updates
    if (t >= 0.0 && textbox_start_smoke_age.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_start_smoke_age.tStart = t;  // (not accounting for frame time here)
      textbox_start_smoke_age.frameNStart = frameN;  // exact frame index
      
      textbox_start_smoke_age.setAutoDraw(true);
    }
    
    
    // if textbox_start_smoke_age is active this frame...
    if (textbox_start_smoke_age.status === PsychoJS.Status.STARTED) {
    }
    
    // Run 'Each Frame' code from code_7
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if ((! ("allow_advance_start_smoke_age" in psychoJS.experiment))) {
        psychoJS.experiment.allow_advance_start_smoke_age = false;
    }
    keys = psychoJS.eventManager.getKeys();
    if (_pj.in_es6("return", keys)) {
        user_input = textbox_start_smoke_age.text.trim();
        if ((user_input !== "")) {
            psychoJS.experiment.allow_advance_start_smoke_age = true;
        }
    }
    if (psychoJS.experiment.allow_advance_start_smoke_age) {
        continueRoutine = false;
    }
    
    
    // *Q19* updates
    if (t >= 0.0 && Q19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q19.tStart = t;  // (not accounting for frame time here)
      Q19.frameNStart = frameN;  // exact frame index
      
      Q19.setAutoDraw(true);
    }
    
    
    // if Q19 is active this frame...
    if (Q19.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *hit_star_smoke_age* updates
    if (t >= 0.0 && hit_star_smoke_age.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      hit_star_smoke_age.tStart = t;  // (not accounting for frame time here)
      hit_star_smoke_age.frameNStart = frameN;  // exact frame index
      
      hit_star_smoke_age.setAutoDraw(true);
    }
    
    
    // if hit_star_smoke_age is active this frame...
    if (hit_star_smoke_age.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *cigs_hint* updates
    if (t >= 0.0 && cigs_hint.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cigs_hint.tStart = t;  // (not accounting for frame time here)
      cigs_hint.frameNStart = frameN;  // exact frame index
      
      cigs_hint.setAutoDraw(true);
    }
    
    
    // if cigs_hint is active this frame...
    if (cigs_hint.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    start_smoke_ageComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function start_smoke_ageRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'start_smoke_age' ---
    start_smoke_ageComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('start_smoke_age.stopped', globalClock.getTime());
    psychoJS.experiment.addData('textbox_start_smoke_age.text',textbox_start_smoke_age.text)
    // Run 'End Routine' code from code_7
    psychoJS.experiment.addData("start_smoke_age", textbox_start_smoke_age.text);
    
    // the Routine "start_smoke_age" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var cigs_per_dayMaxDurationReached;
var cigs_per_dayMaxDuration;
var cigs_per_dayComponents;
function cigs_per_dayRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'cigs_per_day' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    cigs_per_dayClock.reset();
    routineTimer.reset();
    cigs_per_dayMaxDurationReached = false;
    // update component parameters for each repeat
    // reset cigs_never to account for continued clicks & clear times on/off
    cigs_never.reset()
    // reset cigs_year to account for continued clicks & clear times on/off
    cigs_year.reset()
    // reset cigs_month to account for continued clicks & clear times on/off
    cigs_month.reset()
    // reset cigs_week to account for continued clicks & clear times on/off
    cigs_week.reset()
    // reset cigs_everyday1 to account for continued clicks & clear times on/off
    cigs_everyday1.reset()
    // reset cigs_everyday5 to account for continued clicks & clear times on/off
    cigs_everyday5.reset()
    // reset cigs_everyday10 to account for continued clicks & clear times on/off
    cigs_everyday10.reset()
    // reset cigs_everyday20 to account for continued clicks & clear times on/off
    cigs_everyday20.reset()
    // reset cigs_everyday_over21 to account for continued clicks & clear times on/off
    cigs_everyday_over21.reset()
    psychoJS.experiment.addData('cigs_per_day.started', globalClock.getTime());
    cigs_per_dayMaxDuration = null
    // keep track of which components have finished
    cigs_per_dayComponents = [];
    cigs_per_dayComponents.push(Q_cigs_per_day);
    cigs_per_dayComponents.push(Q20);
    cigs_per_dayComponents.push(cigs_never);
    cigs_per_dayComponents.push(cigs_year);
    cigs_per_dayComponents.push(cigs_month);
    cigs_per_dayComponents.push(cigs_week);
    cigs_per_dayComponents.push(cigs_everyday1);
    cigs_per_dayComponents.push(cigs_everyday5);
    cigs_per_dayComponents.push(cigs_everyday10);
    cigs_per_dayComponents.push(cigs_everyday20);
    cigs_per_dayComponents.push(cigs_everyday_over21);
    
    cigs_per_dayComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function cigs_per_dayRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'cigs_per_day' ---
    // get current time
    t = cigs_per_dayClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Q_cigs_per_day* updates
    if (t >= 0.0 && Q_cigs_per_day.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q_cigs_per_day.tStart = t;  // (not accounting for frame time here)
      Q_cigs_per_day.frameNStart = frameN;  // exact frame index
      
      Q_cigs_per_day.setAutoDraw(true);
    }
    
    
    // if Q_cigs_per_day is active this frame...
    if (Q_cigs_per_day.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *Q20* updates
    if (t >= 0.0 && Q20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q20.tStart = t;  // (not accounting for frame time here)
      Q20.frameNStart = frameN;  // exact frame index
      
      Q20.setAutoDraw(true);
    }
    
    
    // if Q20 is active this frame...
    if (Q20.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *cigs_never* updates
    if (t >= 0 && cigs_never.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cigs_never.tStart = t;  // (not accounting for frame time here)
      cigs_never.frameNStart = frameN;  // exact frame index
      
      cigs_never.setAutoDraw(true);
    }
    
    
    // if cigs_never is active this frame...
    if (cigs_never.status === PsychoJS.Status.STARTED) {
    }
    
    if (cigs_never.status === PsychoJS.Status.STARTED) {
      // check whether cigs_never has been pressed
      if (cigs_never.isClicked) {
        if (!cigs_never.wasClicked) {
          // store time of first click
          cigs_never.timesOn.push(cigs_never.clock.getTime());
          // store time clicked until
          cigs_never.timesOff.push(cigs_never.clock.getTime());
        } else {
          // update time clicked until;
          cigs_never.timesOff[cigs_never.timesOff.length - 1] = cigs_never.clock.getTime();
        }
        if (!cigs_never.wasClicked) {
          // end routine when cigs_never is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("cigs_numbers", "\u8fd1\u4e00\u5e74\u672a\u5438\u70df");
        }
        // if cigs_never is still clicked next frame, it is not a new click
        cigs_never.wasClicked = true;
      } else {
        // if cigs_never is clicked next frame, it is a new click
        cigs_never.wasClicked = false;
      }
    } else {
      // keep clock at 0 if cigs_never hasn't started / has finished
      cigs_never.clock.reset();
      // if cigs_never is clicked next frame, it is a new click
      cigs_never.wasClicked = false;
    }
    
    // *cigs_year* updates
    if (t >= 0 && cigs_year.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cigs_year.tStart = t;  // (not accounting for frame time here)
      cigs_year.frameNStart = frameN;  // exact frame index
      
      cigs_year.setAutoDraw(true);
    }
    
    
    // if cigs_year is active this frame...
    if (cigs_year.status === PsychoJS.Status.STARTED) {
    }
    
    if (cigs_year.status === PsychoJS.Status.STARTED) {
      // check whether cigs_year has been pressed
      if (cigs_year.isClicked) {
        if (!cigs_year.wasClicked) {
          // store time of first click
          cigs_year.timesOn.push(cigs_year.clock.getTime());
          // store time clicked until
          cigs_year.timesOff.push(cigs_year.clock.getTime());
        } else {
          // update time clicked until;
          cigs_year.timesOff[cigs_year.timesOff.length - 1] = cigs_year.clock.getTime();
        }
        if (!cigs_year.wasClicked) {
          // end routine when cigs_year is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("cigs_numbers", "\u4e00\u5e74\u5c11\u4e8e5\u6b21");
        }
        // if cigs_year is still clicked next frame, it is not a new click
        cigs_year.wasClicked = true;
      } else {
        // if cigs_year is clicked next frame, it is a new click
        cigs_year.wasClicked = false;
      }
    } else {
      // keep clock at 0 if cigs_year hasn't started / has finished
      cigs_year.clock.reset();
      // if cigs_year is clicked next frame, it is a new click
      cigs_year.wasClicked = false;
    }
    
    // *cigs_month* updates
    if (t >= 0 && cigs_month.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cigs_month.tStart = t;  // (not accounting for frame time here)
      cigs_month.frameNStart = frameN;  // exact frame index
      
      cigs_month.setAutoDraw(true);
    }
    
    
    // if cigs_month is active this frame...
    if (cigs_month.status === PsychoJS.Status.STARTED) {
    }
    
    if (cigs_month.status === PsychoJS.Status.STARTED) {
      // check whether cigs_month has been pressed
      if (cigs_month.isClicked) {
        if (!cigs_month.wasClicked) {
          // store time of first click
          cigs_month.timesOn.push(cigs_month.clock.getTime());
          // store time clicked until
          cigs_month.timesOff.push(cigs_month.clock.getTime());
        } else {
          // update time clicked until;
          cigs_month.timesOff[cigs_month.timesOff.length - 1] = cigs_month.clock.getTime();
        }
        if (!cigs_month.wasClicked) {
          // end routine when cigs_month is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("cigs_numbers", "\u6bcf\u67081\u52303\u6b21");
        }
        // if cigs_month is still clicked next frame, it is not a new click
        cigs_month.wasClicked = true;
      } else {
        // if cigs_month is clicked next frame, it is a new click
        cigs_month.wasClicked = false;
      }
    } else {
      // keep clock at 0 if cigs_month hasn't started / has finished
      cigs_month.clock.reset();
      // if cigs_month is clicked next frame, it is a new click
      cigs_month.wasClicked = false;
    }
    
    // *cigs_week* updates
    if (t >= 0 && cigs_week.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cigs_week.tStart = t;  // (not accounting for frame time here)
      cigs_week.frameNStart = frameN;  // exact frame index
      
      cigs_week.setAutoDraw(true);
    }
    
    
    // if cigs_week is active this frame...
    if (cigs_week.status === PsychoJS.Status.STARTED) {
    }
    
    if (cigs_week.status === PsychoJS.Status.STARTED) {
      // check whether cigs_week has been pressed
      if (cigs_week.isClicked) {
        if (!cigs_week.wasClicked) {
          // store time of first click
          cigs_week.timesOn.push(cigs_week.clock.getTime());
          // store time clicked until
          cigs_week.timesOff.push(cigs_week.clock.getTime());
        } else {
          // update time clicked until;
          cigs_week.timesOff[cigs_week.timesOff.length - 1] = cigs_week.clock.getTime();
        }
        if (!cigs_week.wasClicked) {
          // end routine when cigs_week is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("cigs_numbers", "\u6bcf\u54681\u52303\u6b21");
        }
        // if cigs_week is still clicked next frame, it is not a new click
        cigs_week.wasClicked = true;
      } else {
        // if cigs_week is clicked next frame, it is a new click
        cigs_week.wasClicked = false;
      }
    } else {
      // keep clock at 0 if cigs_week hasn't started / has finished
      cigs_week.clock.reset();
      // if cigs_week is clicked next frame, it is a new click
      cigs_week.wasClicked = false;
    }
    
    // *cigs_everyday1* updates
    if (t >= 0 && cigs_everyday1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cigs_everyday1.tStart = t;  // (not accounting for frame time here)
      cigs_everyday1.frameNStart = frameN;  // exact frame index
      
      cigs_everyday1.setAutoDraw(true);
    }
    
    
    // if cigs_everyday1 is active this frame...
    if (cigs_everyday1.status === PsychoJS.Status.STARTED) {
    }
    
    if (cigs_everyday1.status === PsychoJS.Status.STARTED) {
      // check whether cigs_everyday1 has been pressed
      if (cigs_everyday1.isClicked) {
        if (!cigs_everyday1.wasClicked) {
          // store time of first click
          cigs_everyday1.timesOn.push(cigs_everyday1.clock.getTime());
          // store time clicked until
          cigs_everyday1.timesOff.push(cigs_everyday1.clock.getTime());
        } else {
          // update time clicked until;
          cigs_everyday1.timesOff[cigs_everyday1.timesOff.length - 1] = cigs_everyday1.clock.getTime();
        }
        if (!cigs_everyday1.wasClicked) {
          // end routine when cigs_everyday1 is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("cigs_numbers", "\u5c11\u4e8e\u4e00\u652f");
        }
        // if cigs_everyday1 is still clicked next frame, it is not a new click
        cigs_everyday1.wasClicked = true;
      } else {
        // if cigs_everyday1 is clicked next frame, it is a new click
        cigs_everyday1.wasClicked = false;
      }
    } else {
      // keep clock at 0 if cigs_everyday1 hasn't started / has finished
      cigs_everyday1.clock.reset();
      // if cigs_everyday1 is clicked next frame, it is a new click
      cigs_everyday1.wasClicked = false;
    }
    
    // *cigs_everyday5* updates
    if (t >= 0 && cigs_everyday5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cigs_everyday5.tStart = t;  // (not accounting for frame time here)
      cigs_everyday5.frameNStart = frameN;  // exact frame index
      
      cigs_everyday5.setAutoDraw(true);
    }
    
    
    // if cigs_everyday5 is active this frame...
    if (cigs_everyday5.status === PsychoJS.Status.STARTED) {
    }
    
    if (cigs_everyday5.status === PsychoJS.Status.STARTED) {
      // check whether cigs_everyday5 has been pressed
      if (cigs_everyday5.isClicked) {
        if (!cigs_everyday5.wasClicked) {
          // store time of first click
          cigs_everyday5.timesOn.push(cigs_everyday5.clock.getTime());
          // store time clicked until
          cigs_everyday5.timesOff.push(cigs_everyday5.clock.getTime());
        } else {
          // update time clicked until;
          cigs_everyday5.timesOff[cigs_everyday5.timesOff.length - 1] = cigs_everyday5.clock.getTime();
        }
        if (!cigs_everyday5.wasClicked) {
          // end routine when cigs_everyday5 is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("cigs_numbers", "\u6bcf\u59291\u52305\u652f");
        }
        // if cigs_everyday5 is still clicked next frame, it is not a new click
        cigs_everyday5.wasClicked = true;
      } else {
        // if cigs_everyday5 is clicked next frame, it is a new click
        cigs_everyday5.wasClicked = false;
      }
    } else {
      // keep clock at 0 if cigs_everyday5 hasn't started / has finished
      cigs_everyday5.clock.reset();
      // if cigs_everyday5 is clicked next frame, it is a new click
      cigs_everyday5.wasClicked = false;
    }
    
    // *cigs_everyday10* updates
    if (t >= 0 && cigs_everyday10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cigs_everyday10.tStart = t;  // (not accounting for frame time here)
      cigs_everyday10.frameNStart = frameN;  // exact frame index
      
      cigs_everyday10.setAutoDraw(true);
    }
    
    
    // if cigs_everyday10 is active this frame...
    if (cigs_everyday10.status === PsychoJS.Status.STARTED) {
    }
    
    if (cigs_everyday10.status === PsychoJS.Status.STARTED) {
      // check whether cigs_everyday10 has been pressed
      if (cigs_everyday10.isClicked) {
        if (!cigs_everyday10.wasClicked) {
          // store time of first click
          cigs_everyday10.timesOn.push(cigs_everyday10.clock.getTime());
          // store time clicked until
          cigs_everyday10.timesOff.push(cigs_everyday10.clock.getTime());
        } else {
          // update time clicked until;
          cigs_everyday10.timesOff[cigs_everyday10.timesOff.length - 1] = cigs_everyday10.clock.getTime();
        }
        if (!cigs_everyday10.wasClicked) {
          // end routine when cigs_everyday10 is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("cigs_numbers", "\u6bcf\u59296\u523010\u652f");
        }
        // if cigs_everyday10 is still clicked next frame, it is not a new click
        cigs_everyday10.wasClicked = true;
      } else {
        // if cigs_everyday10 is clicked next frame, it is a new click
        cigs_everyday10.wasClicked = false;
      }
    } else {
      // keep clock at 0 if cigs_everyday10 hasn't started / has finished
      cigs_everyday10.clock.reset();
      // if cigs_everyday10 is clicked next frame, it is a new click
      cigs_everyday10.wasClicked = false;
    }
    
    // *cigs_everyday20* updates
    if (t >= 0 && cigs_everyday20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cigs_everyday20.tStart = t;  // (not accounting for frame time here)
      cigs_everyday20.frameNStart = frameN;  // exact frame index
      
      cigs_everyday20.setAutoDraw(true);
    }
    
    
    // if cigs_everyday20 is active this frame...
    if (cigs_everyday20.status === PsychoJS.Status.STARTED) {
    }
    
    if (cigs_everyday20.status === PsychoJS.Status.STARTED) {
      // check whether cigs_everyday20 has been pressed
      if (cigs_everyday20.isClicked) {
        if (!cigs_everyday20.wasClicked) {
          // store time of first click
          cigs_everyday20.timesOn.push(cigs_everyday20.clock.getTime());
          // store time clicked until
          cigs_everyday20.timesOff.push(cigs_everyday20.clock.getTime());
        } else {
          // update time clicked until;
          cigs_everyday20.timesOff[cigs_everyday20.timesOff.length - 1] = cigs_everyday20.clock.getTime();
        }
        if (!cigs_everyday20.wasClicked) {
          // end routine when cigs_everyday20 is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("cigs_numbers", "\u6bcf\u592911\u523020\u652f");
        }
        // if cigs_everyday20 is still clicked next frame, it is not a new click
        cigs_everyday20.wasClicked = true;
      } else {
        // if cigs_everyday20 is clicked next frame, it is a new click
        cigs_everyday20.wasClicked = false;
      }
    } else {
      // keep clock at 0 if cigs_everyday20 hasn't started / has finished
      cigs_everyday20.clock.reset();
      // if cigs_everyday20 is clicked next frame, it is a new click
      cigs_everyday20.wasClicked = false;
    }
    
    // *cigs_everyday_over21* updates
    if (t >= 0 && cigs_everyday_over21.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cigs_everyday_over21.tStart = t;  // (not accounting for frame time here)
      cigs_everyday_over21.frameNStart = frameN;  // exact frame index
      
      cigs_everyday_over21.setAutoDraw(true);
    }
    
    
    // if cigs_everyday_over21 is active this frame...
    if (cigs_everyday_over21.status === PsychoJS.Status.STARTED) {
    }
    
    if (cigs_everyday_over21.status === PsychoJS.Status.STARTED) {
      // check whether cigs_everyday_over21 has been pressed
      if (cigs_everyday_over21.isClicked) {
        if (!cigs_everyday_over21.wasClicked) {
          // store time of first click
          cigs_everyday_over21.timesOn.push(cigs_everyday_over21.clock.getTime());
          // store time clicked until
          cigs_everyday_over21.timesOff.push(cigs_everyday_over21.clock.getTime());
        } else {
          // update time clicked until;
          cigs_everyday_over21.timesOff[cigs_everyday_over21.timesOff.length - 1] = cigs_everyday_over21.clock.getTime();
        }
        if (!cigs_everyday_over21.wasClicked) {
          // end routine when cigs_everyday_over21 is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("cigs_numbers", "\u6bcf\u592921\u652f\u53ca\u4ee5\u4e0a");
        }
        // if cigs_everyday_over21 is still clicked next frame, it is not a new click
        cigs_everyday_over21.wasClicked = true;
      } else {
        // if cigs_everyday_over21 is clicked next frame, it is a new click
        cigs_everyday_over21.wasClicked = false;
      }
    } else {
      // keep clock at 0 if cigs_everyday_over21 hasn't started / has finished
      cigs_everyday_over21.clock.reset();
      // if cigs_everyday_over21 is clicked next frame, it is a new click
      cigs_everyday_over21.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    cigs_per_dayComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function cigs_per_dayRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'cigs_per_day' ---
    cigs_per_dayComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('cigs_per_day.stopped', globalClock.getTime());
    psychoJS.experiment.addData('cigs_never.numClicks', cigs_never.numClicks);
    psychoJS.experiment.addData('cigs_never.timesOn', cigs_never.timesOn);
    psychoJS.experiment.addData('cigs_never.timesOff', cigs_never.timesOff);
    psychoJS.experiment.addData('cigs_year.numClicks', cigs_year.numClicks);
    psychoJS.experiment.addData('cigs_year.timesOn', cigs_year.timesOn);
    psychoJS.experiment.addData('cigs_year.timesOff', cigs_year.timesOff);
    psychoJS.experiment.addData('cigs_month.numClicks', cigs_month.numClicks);
    psychoJS.experiment.addData('cigs_month.timesOn', cigs_month.timesOn);
    psychoJS.experiment.addData('cigs_month.timesOff', cigs_month.timesOff);
    psychoJS.experiment.addData('cigs_week.numClicks', cigs_week.numClicks);
    psychoJS.experiment.addData('cigs_week.timesOn', cigs_week.timesOn);
    psychoJS.experiment.addData('cigs_week.timesOff', cigs_week.timesOff);
    psychoJS.experiment.addData('cigs_everyday1.numClicks', cigs_everyday1.numClicks);
    psychoJS.experiment.addData('cigs_everyday1.timesOn', cigs_everyday1.timesOn);
    psychoJS.experiment.addData('cigs_everyday1.timesOff', cigs_everyday1.timesOff);
    psychoJS.experiment.addData('cigs_everyday5.numClicks', cigs_everyday5.numClicks);
    psychoJS.experiment.addData('cigs_everyday5.timesOn', cigs_everyday5.timesOn);
    psychoJS.experiment.addData('cigs_everyday5.timesOff', cigs_everyday5.timesOff);
    psychoJS.experiment.addData('cigs_everyday10.numClicks', cigs_everyday10.numClicks);
    psychoJS.experiment.addData('cigs_everyday10.timesOn', cigs_everyday10.timesOn);
    psychoJS.experiment.addData('cigs_everyday10.timesOff', cigs_everyday10.timesOff);
    psychoJS.experiment.addData('cigs_everyday20.numClicks', cigs_everyday20.numClicks);
    psychoJS.experiment.addData('cigs_everyday20.timesOn', cigs_everyday20.timesOn);
    psychoJS.experiment.addData('cigs_everyday20.timesOff', cigs_everyday20.timesOff);
    psychoJS.experiment.addData('cigs_everyday_over21.numClicks', cigs_everyday_over21.numClicks);
    psychoJS.experiment.addData('cigs_everyday_over21.timesOn', cigs_everyday_over21.timesOn);
    psychoJS.experiment.addData('cigs_everyday_over21.timesOff', cigs_everyday_over21.timesOff);
    // the Routine "cigs_per_day" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var self_health_statusMaxDurationReached;
var self_health_statusMaxDuration;
var self_health_statusComponents;
function self_health_statusRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'self_health_status' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    self_health_statusClock.reset();
    routineTimer.reset();
    self_health_statusMaxDurationReached = false;
    // update component parameters for each repeat
    // reset self_health_status_Verygood to account for continued clicks & clear times on/off
    self_health_status_Verygood.reset()
    // reset self_health_status_Good to account for continued clicks & clear times on/off
    self_health_status_Good.reset()
    // reset self_health_status_Average to account for continued clicks & clear times on/off
    self_health_status_Average.reset()
    // reset self_health_status_Poor to account for continued clicks & clear times on/off
    self_health_status_Poor.reset()
    // reset self_health_status_Verypoor to account for continued clicks & clear times on/off
    self_health_status_Verypoor.reset()
    psychoJS.experiment.addData('self_health_status.started', globalClock.getTime());
    self_health_statusMaxDuration = null
    // keep track of which components have finished
    self_health_statusComponents = [];
    self_health_statusComponents.push(Q_self_health_status);
    self_health_statusComponents.push(self_health_status_Verygood);
    self_health_statusComponents.push(self_health_status_Good);
    self_health_statusComponents.push(self_health_status_Average);
    self_health_statusComponents.push(self_health_status_Poor);
    self_health_statusComponents.push(self_health_status_Verypoor);
    self_health_statusComponents.push(Q21);
    
    self_health_statusComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function self_health_statusRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'self_health_status' ---
    // get current time
    t = self_health_statusClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Q_self_health_status* updates
    if (t >= 0.0 && Q_self_health_status.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q_self_health_status.tStart = t;  // (not accounting for frame time here)
      Q_self_health_status.frameNStart = frameN;  // exact frame index
      
      Q_self_health_status.setAutoDraw(true);
    }
    
    
    // if Q_self_health_status is active this frame...
    if (Q_self_health_status.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *self_health_status_Verygood* updates
    if (t >= 0 && self_health_status_Verygood.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      self_health_status_Verygood.tStart = t;  // (not accounting for frame time here)
      self_health_status_Verygood.frameNStart = frameN;  // exact frame index
      
      self_health_status_Verygood.setAutoDraw(true);
    }
    
    
    // if self_health_status_Verygood is active this frame...
    if (self_health_status_Verygood.status === PsychoJS.Status.STARTED) {
    }
    
    if (self_health_status_Verygood.status === PsychoJS.Status.STARTED) {
      // check whether self_health_status_Verygood has been pressed
      if (self_health_status_Verygood.isClicked) {
        if (!self_health_status_Verygood.wasClicked) {
          // store time of first click
          self_health_status_Verygood.timesOn.push(self_health_status_Verygood.clock.getTime());
          // store time clicked until
          self_health_status_Verygood.timesOff.push(self_health_status_Verygood.clock.getTime());
        } else {
          // update time clicked until;
          self_health_status_Verygood.timesOff[self_health_status_Verygood.timesOff.length - 1] = self_health_status_Verygood.clock.getTime();
        }
        if (!self_health_status_Verygood.wasClicked) {
          // end routine when self_health_status_Verygood is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("self_health_status", "\u5f88\u597d");
        }
        // if self_health_status_Verygood is still clicked next frame, it is not a new click
        self_health_status_Verygood.wasClicked = true;
      } else {
        // if self_health_status_Verygood is clicked next frame, it is a new click
        self_health_status_Verygood.wasClicked = false;
      }
    } else {
      // keep clock at 0 if self_health_status_Verygood hasn't started / has finished
      self_health_status_Verygood.clock.reset();
      // if self_health_status_Verygood is clicked next frame, it is a new click
      self_health_status_Verygood.wasClicked = false;
    }
    
    // *self_health_status_Good* updates
    if (t >= 0 && self_health_status_Good.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      self_health_status_Good.tStart = t;  // (not accounting for frame time here)
      self_health_status_Good.frameNStart = frameN;  // exact frame index
      
      self_health_status_Good.setAutoDraw(true);
    }
    
    
    // if self_health_status_Good is active this frame...
    if (self_health_status_Good.status === PsychoJS.Status.STARTED) {
    }
    
    if (self_health_status_Good.status === PsychoJS.Status.STARTED) {
      // check whether self_health_status_Good has been pressed
      if (self_health_status_Good.isClicked) {
        if (!self_health_status_Good.wasClicked) {
          // store time of first click
          self_health_status_Good.timesOn.push(self_health_status_Good.clock.getTime());
          // store time clicked until
          self_health_status_Good.timesOff.push(self_health_status_Good.clock.getTime());
        } else {
          // update time clicked until;
          self_health_status_Good.timesOff[self_health_status_Good.timesOff.length - 1] = self_health_status_Good.clock.getTime();
        }
        if (!self_health_status_Good.wasClicked) {
          // end routine when self_health_status_Good is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("self_health_status", "\u597d");
        }
        // if self_health_status_Good is still clicked next frame, it is not a new click
        self_health_status_Good.wasClicked = true;
      } else {
        // if self_health_status_Good is clicked next frame, it is a new click
        self_health_status_Good.wasClicked = false;
      }
    } else {
      // keep clock at 0 if self_health_status_Good hasn't started / has finished
      self_health_status_Good.clock.reset();
      // if self_health_status_Good is clicked next frame, it is a new click
      self_health_status_Good.wasClicked = false;
    }
    
    // *self_health_status_Average* updates
    if (t >= 0 && self_health_status_Average.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      self_health_status_Average.tStart = t;  // (not accounting for frame time here)
      self_health_status_Average.frameNStart = frameN;  // exact frame index
      
      self_health_status_Average.setAutoDraw(true);
    }
    
    
    // if self_health_status_Average is active this frame...
    if (self_health_status_Average.status === PsychoJS.Status.STARTED) {
    }
    
    if (self_health_status_Average.status === PsychoJS.Status.STARTED) {
      // check whether self_health_status_Average has been pressed
      if (self_health_status_Average.isClicked) {
        if (!self_health_status_Average.wasClicked) {
          // store time of first click
          self_health_status_Average.timesOn.push(self_health_status_Average.clock.getTime());
          // store time clicked until
          self_health_status_Average.timesOff.push(self_health_status_Average.clock.getTime());
        } else {
          // update time clicked until;
          self_health_status_Average.timesOff[self_health_status_Average.timesOff.length - 1] = self_health_status_Average.clock.getTime();
        }
        if (!self_health_status_Average.wasClicked) {
          // end routine when self_health_status_Average is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("self_health_status", "\u4e00\u822c");
        }
        // if self_health_status_Average is still clicked next frame, it is not a new click
        self_health_status_Average.wasClicked = true;
      } else {
        // if self_health_status_Average is clicked next frame, it is a new click
        self_health_status_Average.wasClicked = false;
      }
    } else {
      // keep clock at 0 if self_health_status_Average hasn't started / has finished
      self_health_status_Average.clock.reset();
      // if self_health_status_Average is clicked next frame, it is a new click
      self_health_status_Average.wasClicked = false;
    }
    
    // *self_health_status_Poor* updates
    if (t >= 0 && self_health_status_Poor.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      self_health_status_Poor.tStart = t;  // (not accounting for frame time here)
      self_health_status_Poor.frameNStart = frameN;  // exact frame index
      
      self_health_status_Poor.setAutoDraw(true);
    }
    
    
    // if self_health_status_Poor is active this frame...
    if (self_health_status_Poor.status === PsychoJS.Status.STARTED) {
    }
    
    if (self_health_status_Poor.status === PsychoJS.Status.STARTED) {
      // check whether self_health_status_Poor has been pressed
      if (self_health_status_Poor.isClicked) {
        if (!self_health_status_Poor.wasClicked) {
          // store time of first click
          self_health_status_Poor.timesOn.push(self_health_status_Poor.clock.getTime());
          // store time clicked until
          self_health_status_Poor.timesOff.push(self_health_status_Poor.clock.getTime());
        } else {
          // update time clicked until;
          self_health_status_Poor.timesOff[self_health_status_Poor.timesOff.length - 1] = self_health_status_Poor.clock.getTime();
        }
        if (!self_health_status_Poor.wasClicked) {
          // end routine when self_health_status_Poor is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("self_health_status", "\u4e0d\u597d");
        }
        // if self_health_status_Poor is still clicked next frame, it is not a new click
        self_health_status_Poor.wasClicked = true;
      } else {
        // if self_health_status_Poor is clicked next frame, it is a new click
        self_health_status_Poor.wasClicked = false;
      }
    } else {
      // keep clock at 0 if self_health_status_Poor hasn't started / has finished
      self_health_status_Poor.clock.reset();
      // if self_health_status_Poor is clicked next frame, it is a new click
      self_health_status_Poor.wasClicked = false;
    }
    
    // *self_health_status_Verypoor* updates
    if (t >= 0 && self_health_status_Verypoor.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      self_health_status_Verypoor.tStart = t;  // (not accounting for frame time here)
      self_health_status_Verypoor.frameNStart = frameN;  // exact frame index
      
      self_health_status_Verypoor.setAutoDraw(true);
    }
    
    
    // if self_health_status_Verypoor is active this frame...
    if (self_health_status_Verypoor.status === PsychoJS.Status.STARTED) {
    }
    
    if (self_health_status_Verypoor.status === PsychoJS.Status.STARTED) {
      // check whether self_health_status_Verypoor has been pressed
      if (self_health_status_Verypoor.isClicked) {
        if (!self_health_status_Verypoor.wasClicked) {
          // store time of first click
          self_health_status_Verypoor.timesOn.push(self_health_status_Verypoor.clock.getTime());
          // store time clicked until
          self_health_status_Verypoor.timesOff.push(self_health_status_Verypoor.clock.getTime());
        } else {
          // update time clicked until;
          self_health_status_Verypoor.timesOff[self_health_status_Verypoor.timesOff.length - 1] = self_health_status_Verypoor.clock.getTime();
        }
        if (!self_health_status_Verypoor.wasClicked) {
          // end routine when self_health_status_Verypoor is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("self_health_status", "\u5f88\u4e0d\u597d");
        }
        // if self_health_status_Verypoor is still clicked next frame, it is not a new click
        self_health_status_Verypoor.wasClicked = true;
      } else {
        // if self_health_status_Verypoor is clicked next frame, it is a new click
        self_health_status_Verypoor.wasClicked = false;
      }
    } else {
      // keep clock at 0 if self_health_status_Verypoor hasn't started / has finished
      self_health_status_Verypoor.clock.reset();
      // if self_health_status_Verypoor is clicked next frame, it is a new click
      self_health_status_Verypoor.wasClicked = false;
    }
    
    // *Q21* updates
    if (t >= 0.0 && Q21.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q21.tStart = t;  // (not accounting for frame time here)
      Q21.frameNStart = frameN;  // exact frame index
      
      Q21.setAutoDraw(true);
    }
    
    
    // if Q21 is active this frame...
    if (Q21.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    self_health_statusComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function self_health_statusRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'self_health_status' ---
    self_health_statusComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('self_health_status.stopped', globalClock.getTime());
    psychoJS.experiment.addData('self_health_status_Verygood.numClicks', self_health_status_Verygood.numClicks);
    psychoJS.experiment.addData('self_health_status_Verygood.timesOn', self_health_status_Verygood.timesOn);
    psychoJS.experiment.addData('self_health_status_Verygood.timesOff', self_health_status_Verygood.timesOff);
    psychoJS.experiment.addData('self_health_status_Good.numClicks', self_health_status_Good.numClicks);
    psychoJS.experiment.addData('self_health_status_Good.timesOn', self_health_status_Good.timesOn);
    psychoJS.experiment.addData('self_health_status_Good.timesOff', self_health_status_Good.timesOff);
    psychoJS.experiment.addData('self_health_status_Average.numClicks', self_health_status_Average.numClicks);
    psychoJS.experiment.addData('self_health_status_Average.timesOn', self_health_status_Average.timesOn);
    psychoJS.experiment.addData('self_health_status_Average.timesOff', self_health_status_Average.timesOff);
    psychoJS.experiment.addData('self_health_status_Poor.numClicks', self_health_status_Poor.numClicks);
    psychoJS.experiment.addData('self_health_status_Poor.timesOn', self_health_status_Poor.timesOn);
    psychoJS.experiment.addData('self_health_status_Poor.timesOff', self_health_status_Poor.timesOff);
    psychoJS.experiment.addData('self_health_status_Verypoor.numClicks', self_health_status_Verypoor.numClicks);
    psychoJS.experiment.addData('self_health_status_Verypoor.timesOn', self_health_status_Verypoor.timesOn);
    psychoJS.experiment.addData('self_health_status_Verypoor.timesOff', self_health_status_Verypoor.timesOff);
    // the Routine "self_health_status" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var hearing_statusMaxDurationReached;
var hearing_statusMaxDuration;
var hearing_statusComponents;
function hearing_statusRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'hearing_status' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    hearing_statusClock.reset();
    routineTimer.reset();
    hearing_statusMaxDurationReached = false;
    // update component parameters for each repeat
    // reset hearing_NO to account for continued clicks & clear times on/off
    hearing_NO.reset()
    // reset hearing_YES to account for continued clicks & clear times on/off
    hearing_YES.reset()
    psychoJS.experiment.addData('hearing_status.started', globalClock.getTime());
    hearing_statusMaxDuration = null
    // keep track of which components have finished
    hearing_statusComponents = [];
    hearing_statusComponents.push(Q_hearing_status);
    hearing_statusComponents.push(hearing_NO);
    hearing_statusComponents.push(hearing_YES);
    hearing_statusComponents.push(Q22);
    
    hearing_statusComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function hearing_statusRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'hearing_status' ---
    // get current time
    t = hearing_statusClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Q_hearing_status* updates
    if (t >= 0.0 && Q_hearing_status.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q_hearing_status.tStart = t;  // (not accounting for frame time here)
      Q_hearing_status.frameNStart = frameN;  // exact frame index
      
      Q_hearing_status.setAutoDraw(true);
    }
    
    
    // if Q_hearing_status is active this frame...
    if (Q_hearing_status.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *hearing_NO* updates
    if (t >= 0 && hearing_NO.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      hearing_NO.tStart = t;  // (not accounting for frame time here)
      hearing_NO.frameNStart = frameN;  // exact frame index
      
      hearing_NO.setAutoDraw(true);
    }
    
    
    // if hearing_NO is active this frame...
    if (hearing_NO.status === PsychoJS.Status.STARTED) {
    }
    
    if (hearing_NO.status === PsychoJS.Status.STARTED) {
      // check whether hearing_NO has been pressed
      if (hearing_NO.isClicked) {
        if (!hearing_NO.wasClicked) {
          // store time of first click
          hearing_NO.timesOn.push(hearing_NO.clock.getTime());
          // store time clicked until
          hearing_NO.timesOff.push(hearing_NO.clock.getTime());
        } else {
          // update time clicked until;
          hearing_NO.timesOff[hearing_NO.timesOff.length - 1] = hearing_NO.clock.getTime();
        }
        if (!hearing_NO.wasClicked) {
          // end routine when hearing_NO is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("hearing_status", "\u65e0");
        }
        // if hearing_NO is still clicked next frame, it is not a new click
        hearing_NO.wasClicked = true;
      } else {
        // if hearing_NO is clicked next frame, it is a new click
        hearing_NO.wasClicked = false;
      }
    } else {
      // keep clock at 0 if hearing_NO hasn't started / has finished
      hearing_NO.clock.reset();
      // if hearing_NO is clicked next frame, it is a new click
      hearing_NO.wasClicked = false;
    }
    
    // *hearing_YES* updates
    if (t >= 0 && hearing_YES.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      hearing_YES.tStart = t;  // (not accounting for frame time here)
      hearing_YES.frameNStart = frameN;  // exact frame index
      
      hearing_YES.setAutoDraw(true);
    }
    
    
    // if hearing_YES is active this frame...
    if (hearing_YES.status === PsychoJS.Status.STARTED) {
    }
    
    if (hearing_YES.status === PsychoJS.Status.STARTED) {
      // check whether hearing_YES has been pressed
      if (hearing_YES.isClicked) {
        if (!hearing_YES.wasClicked) {
          // store time of first click
          hearing_YES.timesOn.push(hearing_YES.clock.getTime());
          // store time clicked until
          hearing_YES.timesOff.push(hearing_YES.clock.getTime());
        } else {
          // update time clicked until;
          hearing_YES.timesOff[hearing_YES.timesOff.length - 1] = hearing_YES.clock.getTime();
        }
        if (!hearing_YES.wasClicked) {
          // end routine when hearing_YES is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("hearing_status", "\u6709");
        }
        // if hearing_YES is still clicked next frame, it is not a new click
        hearing_YES.wasClicked = true;
      } else {
        // if hearing_YES is clicked next frame, it is a new click
        hearing_YES.wasClicked = false;
      }
    } else {
      // keep clock at 0 if hearing_YES hasn't started / has finished
      hearing_YES.clock.reset();
      // if hearing_YES is clicked next frame, it is a new click
      hearing_YES.wasClicked = false;
    }
    
    // *Q22* updates
    if (t >= 0.0 && Q22.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q22.tStart = t;  // (not accounting for frame time here)
      Q22.frameNStart = frameN;  // exact frame index
      
      Q22.setAutoDraw(true);
    }
    
    
    // if Q22 is active this frame...
    if (Q22.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    hearing_statusComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function hearing_statusRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'hearing_status' ---
    hearing_statusComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('hearing_status.stopped', globalClock.getTime());
    psychoJS.experiment.addData('hearing_NO.numClicks', hearing_NO.numClicks);
    psychoJS.experiment.addData('hearing_NO.timesOn', hearing_NO.timesOn);
    psychoJS.experiment.addData('hearing_NO.timesOff', hearing_NO.timesOff);
    psychoJS.experiment.addData('hearing_YES.numClicks', hearing_YES.numClicks);
    psychoJS.experiment.addData('hearing_YES.timesOn', hearing_YES.timesOn);
    psychoJS.experiment.addData('hearing_YES.timesOff', hearing_YES.timesOff);
    // the Routine "hearing_status" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var music_trainingMaxDurationReached;
var music_trainingMaxDuration;
var music_trainingComponents;
function music_trainingRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'music_training' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    music_trainingClock.reset();
    routineTimer.reset();
    music_trainingMaxDurationReached = false;
    // update component parameters for each repeat
    // reset music_training_YES to account for continued clicks & clear times on/off
    music_training_YES.reset()
    // reset music_training_NO to account for continued clicks & clear times on/off
    music_training_NO.reset()
    psychoJS.experiment.addData('music_training.started', globalClock.getTime());
    music_trainingMaxDuration = null
    // keep track of which components have finished
    music_trainingComponents = [];
    music_trainingComponents.push(Q_music_training);
    music_trainingComponents.push(music_training_YES);
    music_trainingComponents.push(music_training_NO);
    music_trainingComponents.push(Q23);
    music_trainingComponents.push(hint_music_training);
    
    music_trainingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function music_trainingRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'music_training' ---
    // get current time
    t = music_trainingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Q_music_training* updates
    if (t >= 0.0 && Q_music_training.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q_music_training.tStart = t;  // (not accounting for frame time here)
      Q_music_training.frameNStart = frameN;  // exact frame index
      
      Q_music_training.setAutoDraw(true);
    }
    
    
    // if Q_music_training is active this frame...
    if (Q_music_training.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *music_training_YES* updates
    if (t >= 0 && music_training_YES.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      music_training_YES.tStart = t;  // (not accounting for frame time here)
      music_training_YES.frameNStart = frameN;  // exact frame index
      
      music_training_YES.setAutoDraw(true);
    }
    
    
    // if music_training_YES is active this frame...
    if (music_training_YES.status === PsychoJS.Status.STARTED) {
    }
    
    if (music_training_YES.status === PsychoJS.Status.STARTED) {
      // check whether music_training_YES has been pressed
      if (music_training_YES.isClicked) {
        if (!music_training_YES.wasClicked) {
          // store time of first click
          music_training_YES.timesOn.push(music_training_YES.clock.getTime());
          // store time clicked until
          music_training_YES.timesOff.push(music_training_YES.clock.getTime());
        } else {
          // update time clicked until;
          music_training_YES.timesOff[music_training_YES.timesOff.length - 1] = music_training_YES.clock.getTime();
        }
        if (!music_training_YES.wasClicked) {
          // end routine when music_training_YES is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("music_training", "\u662f");
        }
        // if music_training_YES is still clicked next frame, it is not a new click
        music_training_YES.wasClicked = true;
      } else {
        // if music_training_YES is clicked next frame, it is a new click
        music_training_YES.wasClicked = false;
      }
    } else {
      // keep clock at 0 if music_training_YES hasn't started / has finished
      music_training_YES.clock.reset();
      // if music_training_YES is clicked next frame, it is a new click
      music_training_YES.wasClicked = false;
    }
    
    // *music_training_NO* updates
    if (t >= 0 && music_training_NO.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      music_training_NO.tStart = t;  // (not accounting for frame time here)
      music_training_NO.frameNStart = frameN;  // exact frame index
      
      music_training_NO.setAutoDraw(true);
    }
    
    
    // if music_training_NO is active this frame...
    if (music_training_NO.status === PsychoJS.Status.STARTED) {
    }
    
    if (music_training_NO.status === PsychoJS.Status.STARTED) {
      // check whether music_training_NO has been pressed
      if (music_training_NO.isClicked) {
        if (!music_training_NO.wasClicked) {
          // store time of first click
          music_training_NO.timesOn.push(music_training_NO.clock.getTime());
          // store time clicked until
          music_training_NO.timesOff.push(music_training_NO.clock.getTime());
        } else {
          // update time clicked until;
          music_training_NO.timesOff[music_training_NO.timesOff.length - 1] = music_training_NO.clock.getTime();
        }
        if (!music_training_NO.wasClicked) {
          // end routine when music_training_NO is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("music_training", "\u5426");
        }
        // if music_training_NO is still clicked next frame, it is not a new click
        music_training_NO.wasClicked = true;
      } else {
        // if music_training_NO is clicked next frame, it is a new click
        music_training_NO.wasClicked = false;
      }
    } else {
      // keep clock at 0 if music_training_NO hasn't started / has finished
      music_training_NO.clock.reset();
      // if music_training_NO is clicked next frame, it is a new click
      music_training_NO.wasClicked = false;
    }
    
    // *Q23* updates
    if (t >= 0.0 && Q23.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q23.tStart = t;  // (not accounting for frame time here)
      Q23.frameNStart = frameN;  // exact frame index
      
      Q23.setAutoDraw(true);
    }
    
    
    // if Q23 is active this frame...
    if (Q23.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *hint_music_training* updates
    if (t >= 0.0 && hint_music_training.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      hint_music_training.tStart = t;  // (not accounting for frame time here)
      hint_music_training.frameNStart = frameN;  // exact frame index
      
      hint_music_training.setAutoDraw(true);
    }
    
    
    // if hint_music_training is active this frame...
    if (hint_music_training.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    music_trainingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function music_trainingRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'music_training' ---
    music_trainingComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('music_training.stopped', globalClock.getTime());
    psychoJS.experiment.addData('music_training_YES.numClicks', music_training_YES.numClicks);
    psychoJS.experiment.addData('music_training_YES.timesOn', music_training_YES.timesOn);
    psychoJS.experiment.addData('music_training_YES.timesOff', music_training_YES.timesOff);
    psychoJS.experiment.addData('music_training_NO.numClicks', music_training_NO.numClicks);
    psychoJS.experiment.addData('music_training_NO.timesOn', music_training_NO.timesOn);
    psychoJS.experiment.addData('music_training_NO.timesOff', music_training_NO.timesOff);
    // the Routine "music_training" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var years_musicMaxDurationReached;
var years_musicMaxDuration;
var years_musicComponents;
function years_musicRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'years_music' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    years_musicClock.reset();
    routineTimer.reset();
    years_musicMaxDurationReached = false;
    // update component parameters for each repeat
    textbox_training_years.setText('');
    textbox_training_years.refresh();
    psychoJS.experiment.addData('years_music.started', globalClock.getTime());
    years_musicMaxDuration = null
    // keep track of which components have finished
    years_musicComponents = [];
    years_musicComponents.push(Q_training_years);
    years_musicComponents.push(hint_training_years);
    years_musicComponents.push(textbox_training_years);
    years_musicComponents.push(Q24);
    years_musicComponents.push(enter_hint_6);
    
    years_musicComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function years_musicRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'years_music' ---
    // get current time
    t = years_musicClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Q_training_years* updates
    if (t >= 0.0 && Q_training_years.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q_training_years.tStart = t;  // (not accounting for frame time here)
      Q_training_years.frameNStart = frameN;  // exact frame index
      
      Q_training_years.setAutoDraw(true);
    }
    
    
    // if Q_training_years is active this frame...
    if (Q_training_years.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *hint_training_years* updates
    if (t >= 0.0 && hint_training_years.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      hint_training_years.tStart = t;  // (not accounting for frame time here)
      hint_training_years.frameNStart = frameN;  // exact frame index
      
      hint_training_years.setAutoDraw(true);
    }
    
    
    // if hint_training_years is active this frame...
    if (hint_training_years.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *textbox_training_years* updates
    if (t >= 0.0 && textbox_training_years.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_training_years.tStart = t;  // (not accounting for frame time here)
      textbox_training_years.frameNStart = frameN;  // exact frame index
      
      textbox_training_years.setAutoDraw(true);
    }
    
    
    // if textbox_training_years is active this frame...
    if (textbox_training_years.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *Q24* updates
    if (t >= 0.0 && Q24.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q24.tStart = t;  // (not accounting for frame time here)
      Q24.frameNStart = frameN;  // exact frame index
      
      Q24.setAutoDraw(true);
    }
    
    
    // if Q24 is active this frame...
    if (Q24.status === PsychoJS.Status.STARTED) {
    }
    
    // Run 'Each Frame' code from code_10
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if ((! ("allow_advance_training_years" in psychoJS.experiment))) {
        psychoJS.experiment.allow_advance_training_years = false;
    }
    keys = psychoJS.eventManager.getKeys();
    if (_pj.in_es6("return", keys)) {
        user_input = textbox_training_years.text.trim();
        if ((user_input !== "")) {
            psychoJS.experiment.allow_advance_training_years = true;
        }
    }
    if (psychoJS.experiment.allow_advance_training_years) {
        continueRoutine = false;
    }
    
    
    // *enter_hint_6* updates
    if (t >= 0.0 && enter_hint_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      enter_hint_6.tStart = t;  // (not accounting for frame time here)
      enter_hint_6.frameNStart = frameN;  // exact frame index
      
      enter_hint_6.setAutoDraw(true);
    }
    
    
    // if enter_hint_6 is active this frame...
    if (enter_hint_6.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    years_musicComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function years_musicRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'years_music' ---
    years_musicComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('years_music.stopped', globalClock.getTime());
    psychoJS.experiment.addData('textbox_training_years.text',textbox_training_years.text)
    // Run 'End Routine' code from code_10
    psychoJS.experiment.addData("training_years", textbox_training_years.text);
    
    // the Routine "years_music" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var current_practiceMaxDurationReached;
var current_practiceMaxDuration;
var current_practiceComponents;
function current_practiceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'current_practice' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    current_practiceClock.reset();
    routineTimer.reset();
    current_practiceMaxDurationReached = false;
    // update component parameters for each repeat
    // reset current_practice_YES to account for continued clicks & clear times on/off
    current_practice_YES.reset()
    // reset current_practice_NO to account for continued clicks & clear times on/off
    current_practice_NO.reset()
    psychoJS.experiment.addData('current_practice.started', globalClock.getTime());
    current_practiceMaxDuration = null
    // keep track of which components have finished
    current_practiceComponents = [];
    current_practiceComponents.push(Q_current_practice);
    current_practiceComponents.push(current_practice_YES);
    current_practiceComponents.push(current_practice_NO);
    current_practiceComponents.push(Q25);
    
    current_practiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function current_practiceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'current_practice' ---
    // get current time
    t = current_practiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Q_current_practice* updates
    if (t >= 0.0 && Q_current_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q_current_practice.tStart = t;  // (not accounting for frame time here)
      Q_current_practice.frameNStart = frameN;  // exact frame index
      
      Q_current_practice.setAutoDraw(true);
    }
    
    
    // if Q_current_practice is active this frame...
    if (Q_current_practice.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *current_practice_YES* updates
    if (t >= 0 && current_practice_YES.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      current_practice_YES.tStart = t;  // (not accounting for frame time here)
      current_practice_YES.frameNStart = frameN;  // exact frame index
      
      current_practice_YES.setAutoDraw(true);
    }
    
    
    // if current_practice_YES is active this frame...
    if (current_practice_YES.status === PsychoJS.Status.STARTED) {
    }
    
    if (current_practice_YES.status === PsychoJS.Status.STARTED) {
      // check whether current_practice_YES has been pressed
      if (current_practice_YES.isClicked) {
        if (!current_practice_YES.wasClicked) {
          // store time of first click
          current_practice_YES.timesOn.push(current_practice_YES.clock.getTime());
          // store time clicked until
          current_practice_YES.timesOff.push(current_practice_YES.clock.getTime());
        } else {
          // update time clicked until;
          current_practice_YES.timesOff[current_practice_YES.timesOff.length - 1] = current_practice_YES.clock.getTime();
        }
        if (!current_practice_YES.wasClicked) {
          // end routine when current_practice_YES is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("current_practice", "\u662f");
        }
        // if current_practice_YES is still clicked next frame, it is not a new click
        current_practice_YES.wasClicked = true;
      } else {
        // if current_practice_YES is clicked next frame, it is a new click
        current_practice_YES.wasClicked = false;
      }
    } else {
      // keep clock at 0 if current_practice_YES hasn't started / has finished
      current_practice_YES.clock.reset();
      // if current_practice_YES is clicked next frame, it is a new click
      current_practice_YES.wasClicked = false;
    }
    
    // *current_practice_NO* updates
    if (t >= 0 && current_practice_NO.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      current_practice_NO.tStart = t;  // (not accounting for frame time here)
      current_practice_NO.frameNStart = frameN;  // exact frame index
      
      current_practice_NO.setAutoDraw(true);
    }
    
    
    // if current_practice_NO is active this frame...
    if (current_practice_NO.status === PsychoJS.Status.STARTED) {
    }
    
    if (current_practice_NO.status === PsychoJS.Status.STARTED) {
      // check whether current_practice_NO has been pressed
      if (current_practice_NO.isClicked) {
        if (!current_practice_NO.wasClicked) {
          // store time of first click
          current_practice_NO.timesOn.push(current_practice_NO.clock.getTime());
          // store time clicked until
          current_practice_NO.timesOff.push(current_practice_NO.clock.getTime());
        } else {
          // update time clicked until;
          current_practice_NO.timesOff[current_practice_NO.timesOff.length - 1] = current_practice_NO.clock.getTime();
        }
        if (!current_practice_NO.wasClicked) {
          // end routine when current_practice_NO is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("current_practice", "\u5426");
        }
        // if current_practice_NO is still clicked next frame, it is not a new click
        current_practice_NO.wasClicked = true;
      } else {
        // if current_practice_NO is clicked next frame, it is a new click
        current_practice_NO.wasClicked = false;
      }
    } else {
      // keep clock at 0 if current_practice_NO hasn't started / has finished
      current_practice_NO.clock.reset();
      // if current_practice_NO is clicked next frame, it is a new click
      current_practice_NO.wasClicked = false;
    }
    
    // *Q25* updates
    if (t >= 0.0 && Q25.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q25.tStart = t;  // (not accounting for frame time here)
      Q25.frameNStart = frameN;  // exact frame index
      
      Q25.setAutoDraw(true);
    }
    
    
    // if Q25 is active this frame...
    if (Q25.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    current_practiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function current_practiceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'current_practice' ---
    current_practiceComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('current_practice.stopped', globalClock.getTime());
    psychoJS.experiment.addData('current_practice_YES.numClicks', current_practice_YES.numClicks);
    psychoJS.experiment.addData('current_practice_YES.timesOn', current_practice_YES.timesOn);
    psychoJS.experiment.addData('current_practice_YES.timesOff', current_practice_YES.timesOff);
    psychoJS.experiment.addData('current_practice_NO.numClicks', current_practice_NO.numClicks);
    psychoJS.experiment.addData('current_practice_NO.timesOn', current_practice_NO.timesOn);
    psychoJS.experiment.addData('current_practice_NO.timesOff', current_practice_NO.timesOff);
    // the Routine "current_practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var PHQ9_introMaxDurationReached;
var _key_resp_4_allKeys;
var PHQ9_introMaxDuration;
var PHQ9_introComponents;
function PHQ9_introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'PHQ9_intro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    PHQ9_introClock.reset();
    routineTimer.reset();
    PHQ9_introMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    psychoJS.experiment.addData('PHQ9_intro.started', globalClock.getTime());
    PHQ9_introMaxDuration = null
    // keep track of which components have finished
    PHQ9_introComponents = [];
    PHQ9_introComponents.push(PHQ9_intro_image);
    PHQ9_introComponents.push(key_resp_4);
    
    PHQ9_introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function PHQ9_introRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'PHQ9_intro' ---
    // get current time
    t = PHQ9_introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *PHQ9_intro_image* updates
    if (t >= 0.0 && PHQ9_intro_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      PHQ9_intro_image.tStart = t;  // (not accounting for frame time here)
      PHQ9_intro_image.frameNStart = frameN;  // exact frame index
      
      PHQ9_intro_image.setAutoDraw(true);
    }
    
    
    // if PHQ9_intro_image is active this frame...
    if (PHQ9_intro_image.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_4* updates
    if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }
    
    // if key_resp_4 is active this frame...
    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: 'return', waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        key_resp_4.duration = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    PHQ9_introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function PHQ9_introRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'PHQ9_intro' ---
    PHQ9_introComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('PHQ9_intro.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_4.corr, level);
    }
    psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
    if (typeof key_resp_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
        psychoJS.experiment.addData('key_resp_4.duration', key_resp_4.duration);
        routineTimer.reset();
        }
    
    key_resp_4.stop();
    // the Routine "PHQ9_intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials_PHQ9;
function trials_PHQ9LoopBegin(trials_PHQ9LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_PHQ9 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'CPHQ9Question.xlsx',
      seed: undefined, name: 'trials_PHQ9'
    });
    psychoJS.experiment.addLoop(trials_PHQ9); // add the loop to the experiment
    currentLoop = trials_PHQ9;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_PHQ9.forEach(function() {
      snapshot = trials_PHQ9.getSnapshot();
    
      trials_PHQ9LoopScheduler.add(importConditions(snapshot));
      trials_PHQ9LoopScheduler.add(PHQ_9RoutineBegin(snapshot));
      trials_PHQ9LoopScheduler.add(PHQ_9RoutineEachFrame());
      trials_PHQ9LoopScheduler.add(PHQ_9RoutineEnd(snapshot));
      trials_PHQ9LoopScheduler.add(trials_PHQ9LoopEndIteration(trials_PHQ9LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_PHQ9LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_PHQ9);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_PHQ9LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_loneliness;
function trials_lonelinessLoopBegin(trials_lonelinessLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_loneliness = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'CLonelinessQuestion.xlsx',
      seed: undefined, name: 'trials_loneliness'
    });
    psychoJS.experiment.addLoop(trials_loneliness); // add the loop to the experiment
    currentLoop = trials_loneliness;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_loneliness.forEach(function() {
      snapshot = trials_loneliness.getSnapshot();
    
      trials_lonelinessLoopScheduler.add(importConditions(snapshot));
      trials_lonelinessLoopScheduler.add(lonelinessRoutineBegin(snapshot));
      trials_lonelinessLoopScheduler.add(lonelinessRoutineEachFrame());
      trials_lonelinessLoopScheduler.add(lonelinessRoutineEnd(snapshot));
      trials_lonelinessLoopScheduler.add(trials_lonelinessLoopEndIteration(trials_lonelinessLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_lonelinessLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_loneliness);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_lonelinessLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_PSQI;
function trials_PSQILoopBegin(trials_PSQILoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_PSQI = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'CB_PSQIquestion5.xlsx',
      seed: undefined, name: 'trials_PSQI'
    });
    psychoJS.experiment.addLoop(trials_PSQI); // add the loop to the experiment
    currentLoop = trials_PSQI;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_PSQI.forEach(function() {
      snapshot = trials_PSQI.getSnapshot();
    
      trials_PSQILoopScheduler.add(importConditions(snapshot));
      trials_PSQILoopScheduler.add(B_PSQI5RoutineBegin(snapshot));
      trials_PSQILoopScheduler.add(B_PSQI5RoutineEachFrame());
      trials_PSQILoopScheduler.add(B_PSQI5RoutineEnd(snapshot));
      trials_PSQILoopScheduler.add(trials_PSQILoopEndIteration(trials_PSQILoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_PSQILoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_PSQI);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_PSQILoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_PSQI_6;
function trials_PSQI_6LoopBegin(trials_PSQI_6LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_PSQI_6 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'CB_PSQIquestion6.xlsx',
      seed: undefined, name: 'trials_PSQI_6'
    });
    psychoJS.experiment.addLoop(trials_PSQI_6); // add the loop to the experiment
    currentLoop = trials_PSQI_6;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_PSQI_6.forEach(function() {
      snapshot = trials_PSQI_6.getSnapshot();
    
      trials_PSQI_6LoopScheduler.add(importConditions(snapshot));
      trials_PSQI_6LoopScheduler.add(B_PSQI6RoutineBegin(snapshot));
      trials_PSQI_6LoopScheduler.add(B_PSQI6RoutineEachFrame());
      trials_PSQI_6LoopScheduler.add(B_PSQI6RoutineEnd(snapshot));
      trials_PSQI_6LoopScheduler.add(trials_PSQI_6LoopEndIteration(trials_PSQI_6LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_PSQI_6LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_PSQI_6);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_PSQI_6LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_BMRQ;
function trials_BMRQLoopBegin(trials_BMRQLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_BMRQ = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'CBMRQquestion.xlsx',
      seed: undefined, name: 'trials_BMRQ'
    });
    psychoJS.experiment.addLoop(trials_BMRQ); // add the loop to the experiment
    currentLoop = trials_BMRQ;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_BMRQ.forEach(function() {
      snapshot = trials_BMRQ.getSnapshot();
    
      trials_BMRQLoopScheduler.add(importConditions(snapshot));
      trials_BMRQLoopScheduler.add(BMRQRoutineBegin(snapshot));
      trials_BMRQLoopScheduler.add(BMRQRoutineEachFrame());
      trials_BMRQLoopScheduler.add(BMRQRoutineEnd(snapshot));
      trials_BMRQLoopScheduler.add(trials_BMRQLoopEndIteration(trials_BMRQLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_BMRQLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_BMRQ);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_BMRQLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_ATAI_Q;
function trials_ATAI_QLoopBegin(trials_ATAI_QLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_ATAI_Q = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'CATAIQUESTIONTEXT.xlsx',
      seed: undefined, name: 'trials_ATAI_Q'
    });
    psychoJS.experiment.addLoop(trials_ATAI_Q); // add the loop to the experiment
    currentLoop = trials_ATAI_Q;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_ATAI_Q.forEach(function() {
      snapshot = trials_ATAI_Q.getSnapshot();
    
      trials_ATAI_QLoopScheduler.add(importConditions(snapshot));
      trials_ATAI_QLoopScheduler.add(ATAI_QRoutineBegin(snapshot));
      trials_ATAI_QLoopScheduler.add(ATAI_QRoutineEachFrame());
      trials_ATAI_QLoopScheduler.add(ATAI_QRoutineEnd(snapshot));
      trials_ATAI_QLoopScheduler.add(trials_ATAI_QLoopEndIteration(trials_ATAI_QLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_ATAI_QLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_ATAI_Q);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_ATAI_QLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_BSSS;
function trials_BSSSLoopBegin(trials_BSSSLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_BSSS = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'CBSSSQUESTIONTEXT.xlsx',
      seed: undefined, name: 'trials_BSSS'
    });
    psychoJS.experiment.addLoop(trials_BSSS); // add the loop to the experiment
    currentLoop = trials_BSSS;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_BSSS.forEach(function() {
      snapshot = trials_BSSS.getSnapshot();
    
      trials_BSSSLoopScheduler.add(importConditions(snapshot));
      trials_BSSSLoopScheduler.add(BSSSRoutineBegin(snapshot));
      trials_BSSSLoopScheduler.add(BSSSRoutineEachFrame());
      trials_BSSSLoopScheduler.add(BSSSRoutineEnd(snapshot));
      trials_BSSSLoopScheduler.add(trials_BSSSLoopEndIteration(trials_BSSSLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_BSSSLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_BSSS);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_BSSSLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var uncertainty_trials;
function uncertainty_trialsLoopBegin(uncertainty_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    uncertainty_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'CuncertaintyQuestion.xlsx',
      seed: undefined, name: 'uncertainty_trials'
    });
    psychoJS.experiment.addLoop(uncertainty_trials); // add the loop to the experiment
    currentLoop = uncertainty_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    uncertainty_trials.forEach(function() {
      snapshot = uncertainty_trials.getSnapshot();
    
      uncertainty_trialsLoopScheduler.add(importConditions(snapshot));
      uncertainty_trialsLoopScheduler.add(uncertaintyRoutineBegin(snapshot));
      uncertainty_trialsLoopScheduler.add(uncertaintyRoutineEachFrame());
      uncertainty_trialsLoopScheduler.add(uncertaintyRoutineEnd(snapshot));
      uncertainty_trialsLoopScheduler.add(uncertainty_trialsLoopEndIteration(uncertainty_trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function uncertainty_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(uncertainty_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function uncertainty_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_BPAAT1;
function trials_BPAAT1LoopBegin(trials_BPAAT1LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_BPAAT1 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'CBPAATQQ1.xlsx',
      seed: undefined, name: 'trials_BPAAT1'
    });
    psychoJS.experiment.addLoop(trials_BPAAT1); // add the loop to the experiment
    currentLoop = trials_BPAAT1;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_BPAAT1.forEach(function() {
      snapshot = trials_BPAAT1.getSnapshot();
    
      trials_BPAAT1LoopScheduler.add(importConditions(snapshot));
      trials_BPAAT1LoopScheduler.add(BPAAT1RoutineBegin(snapshot));
      trials_BPAAT1LoopScheduler.add(BPAAT1RoutineEachFrame());
      trials_BPAAT1LoopScheduler.add(BPAAT1RoutineEnd(snapshot));
      trials_BPAAT1LoopScheduler.add(trials_BPAAT1LoopEndIteration(trials_BPAAT1LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_BPAAT1LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_BPAAT1);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_BPAAT1LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_BPAAT2;
function trials_BPAAT2LoopBegin(trials_BPAAT2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_BPAAT2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'CBPAATQQ2.xlsx',
      seed: undefined, name: 'trials_BPAAT2'
    });
    psychoJS.experiment.addLoop(trials_BPAAT2); // add the loop to the experiment
    currentLoop = trials_BPAAT2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_BPAAT2.forEach(function() {
      snapshot = trials_BPAAT2.getSnapshot();
    
      trials_BPAAT2LoopScheduler.add(importConditions(snapshot));
      trials_BPAAT2LoopScheduler.add(BPAAT2RoutineBegin(snapshot));
      trials_BPAAT2LoopScheduler.add(BPAAT2RoutineEachFrame());
      trials_BPAAT2LoopScheduler.add(BPAAT2RoutineEnd(snapshot));
      trials_BPAAT2LoopScheduler.add(trials_BPAAT2LoopEndIteration(trials_BPAAT2LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_BPAAT2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_BPAAT2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_BPAAT2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var comprehension_loop;
function comprehension_loopLoopBegin(comprehension_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    comprehension_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1000, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'comprehension_loop'
    });
    psychoJS.experiment.addLoop(comprehension_loop); // add the loop to the experiment
    currentLoop = comprehension_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    comprehension_loop.forEach(function() {
      snapshot = comprehension_loop.getSnapshot();
    
      comprehension_loopLoopScheduler.add(importConditions(snapshot));
      const practice_trialsLoopScheduler = new Scheduler(psychoJS);
      comprehension_loopLoopScheduler.add(practice_trialsLoopBegin(practice_trialsLoopScheduler, snapshot));
      comprehension_loopLoopScheduler.add(practice_trialsLoopScheduler);
      comprehension_loopLoopScheduler.add(practice_trialsLoopEnd);
      comprehension_loopLoopScheduler.add(practice_finalScoreRoutineBegin(snapshot));
      comprehension_loopLoopScheduler.add(practice_finalScoreRoutineEachFrame());
      comprehension_loopLoopScheduler.add(practice_finalScoreRoutineEnd(snapshot));
      comprehension_loopLoopScheduler.add(resetmoneypracticeRoutineBegin(snapshot));
      comprehension_loopLoopScheduler.add(resetmoneypracticeRoutineEachFrame());
      comprehension_loopLoopScheduler.add(resetmoneypracticeRoutineEnd(snapshot));
      comprehension_loopLoopScheduler.add(comprehension_checkRoutineBegin(snapshot));
      comprehension_loopLoopScheduler.add(comprehension_checkRoutineEachFrame());
      comprehension_loopLoopScheduler.add(comprehension_checkRoutineEnd(snapshot));
      comprehension_loopLoopScheduler.add(comprehension_loopLoopEndIteration(comprehension_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var practice_trials;
function practice_trialsLoopBegin(practice_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    practice_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.FULLRANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'spreadsheets/practice_conditions.xlsx',
      seed: undefined, name: 'practice_trials'
    });
    psychoJS.experiment.addLoop(practice_trials); // add the loop to the experiment
    currentLoop = practice_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    practice_trials.forEach(function() {
      snapshot = practice_trials.getSnapshot();
    
      practice_trialsLoopScheduler.add(importConditions(snapshot));
      practice_trialsLoopScheduler.add(reset_balloonRoutineBegin(snapshot));
      practice_trialsLoopScheduler.add(reset_balloonRoutineEachFrame());
      practice_trialsLoopScheduler.add(reset_balloonRoutineEnd(snapshot));
      const practice_pumpLoopScheduler = new Scheduler(psychoJS);
      practice_trialsLoopScheduler.add(practice_pumpLoopBegin(practice_pumpLoopScheduler, snapshot));
      practice_trialsLoopScheduler.add(practice_pumpLoopScheduler);
      practice_trialsLoopScheduler.add(practice_pumpLoopEnd);
      practice_trialsLoopScheduler.add(practice_feedbackRoutineBegin(snapshot));
      practice_trialsLoopScheduler.add(practice_feedbackRoutineEachFrame());
      practice_trialsLoopScheduler.add(practice_feedbackRoutineEnd(snapshot));
      practice_trialsLoopScheduler.add(practice_trialsLoopEndIteration(practice_trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var practice_pump;
function practice_pumpLoopBegin(practice_pumpLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    practice_pump = new TrialHandler({
      psychoJS: psychoJS,
      nReps: practice_maxPumps, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'practice_pump'
    });
    psychoJS.experiment.addLoop(practice_pump); // add the loop to the experiment
    currentLoop = practice_pump;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    practice_pump.forEach(function() {
      snapshot = practice_pump.getSnapshot();
    
      practice_pumpLoopScheduler.add(importConditions(snapshot));
      practice_pumpLoopScheduler.add(practice_trialRoutineBegin(snapshot));
      practice_pumpLoopScheduler.add(practice_trialRoutineEachFrame());
      practice_pumpLoopScheduler.add(practice_trialRoutineEnd(snapshot));
      practice_pumpLoopScheduler.add(practice_pumpLoopEndIteration(practice_pumpLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function practice_pumpLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(practice_pump);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function practice_pumpLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function practice_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(practice_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function practice_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function comprehension_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(comprehension_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function comprehension_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.FULLRANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'spreadsheets/conditions.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(reset_balloonRoutineBegin(snapshot));
      trialsLoopScheduler.add(reset_balloonRoutineEachFrame());
      trialsLoopScheduler.add(reset_balloonRoutineEnd(snapshot));
      const pumpLoopScheduler = new Scheduler(psychoJS);
      trialsLoopScheduler.add(pumpLoopBegin(pumpLoopScheduler, snapshot));
      trialsLoopScheduler.add(pumpLoopScheduler);
      trialsLoopScheduler.add(pumpLoopEnd);
      trialsLoopScheduler.add(feedbackRoutineBegin(snapshot));
      trialsLoopScheduler.add(feedbackRoutineEachFrame());
      trialsLoopScheduler.add(feedbackRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var pump;
function pumpLoopBegin(pumpLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    pump = new TrialHandler({
      psychoJS: psychoJS,
      nReps: maxPumps, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'pump'
    });
    psychoJS.experiment.addLoop(pump); // add the loop to the experiment
    currentLoop = pump;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    pump.forEach(function() {
      snapshot = pump.getSnapshot();
    
      pumpLoopScheduler.add(importConditions(snapshot));
      pumpLoopScheduler.add(trialRoutineBegin(snapshot));
      pumpLoopScheduler.add(trialRoutineEachFrame());
      pumpLoopScheduler.add(trialRoutineEnd(snapshot));
      pumpLoopScheduler.add(pumpLoopEndIteration(pumpLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function pumpLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(pump);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function pumpLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_fish;
function trials_fishLoopBegin(trials_fishLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_fish = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 100, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_fish'
    });
    psychoJS.experiment.addLoop(trials_fish); // add the loop to the experiment
    currentLoop = trials_fish;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_fish.forEach(function() {
      snapshot = trials_fish.getSnapshot();
    
      trials_fishLoopScheduler.add(importConditions(snapshot));
      trials_fishLoopScheduler.add(trial_fishRoutineBegin(snapshot));
      trials_fishLoopScheduler.add(trial_fishRoutineEachFrame());
      trials_fishLoopScheduler.add(trial_fishRoutineEnd(snapshot));
      trials_fishLoopScheduler.add(feedback_fishRoutineBegin(snapshot));
      trials_fishLoopScheduler.add(feedback_fishRoutineEachFrame());
      trials_fishLoopScheduler.add(feedback_fishRoutineEnd(snapshot));
      trials_fishLoopScheduler.add(trials_fishLoopEndIteration(trials_fishLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_fishLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_fish);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_fishLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var PHQ_9MaxDurationReached;
var PHQ_9MaxDuration;
var PHQ_9Components;
function PHQ_9RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'PHQ_9' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    PHQ_9Clock.reset();
    routineTimer.reset();
    PHQ_9MaxDurationReached = false;
    // update component parameters for each repeat
    PHQ_9QuestionText.setText(PHQ9qText);
    PHQ_9questionslide.reset()
    Q26toQ34.setText(PHQ9qIndex);
    psychoJS.experiment.addData('PHQ_9.started', globalClock.getTime());
    PHQ_9MaxDuration = null
    // keep track of which components have finished
    PHQ_9Components = [];
    PHQ_9Components.push(PHQ_9QuestionText);
    PHQ_9Components.push(PHQ_9questionslide);
    PHQ_9Components.push(Q26toQ34);
    PHQ_9Components.push(warningskip);
    
    PHQ_9Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function PHQ_9RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'PHQ_9' ---
    // get current time
    t = PHQ_9Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *PHQ_9QuestionText* updates
    if (t >= 0.0 && PHQ_9QuestionText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      PHQ_9QuestionText.tStart = t;  // (not accounting for frame time here)
      PHQ_9QuestionText.frameNStart = frameN;  // exact frame index
      
      PHQ_9QuestionText.setAutoDraw(true);
    }
    
    
    // if PHQ_9QuestionText is active this frame...
    if (PHQ_9QuestionText.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *PHQ_9questionslide* updates
    if (t >= 0.0 && PHQ_9questionslide.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      PHQ_9questionslide.tStart = t;  // (not accounting for frame time here)
      PHQ_9questionslide.frameNStart = frameN;  // exact frame index
      
      PHQ_9questionslide.setAutoDraw(true);
    }
    
    
    // if PHQ_9questionslide is active this frame...
    if (PHQ_9questionslide.status === PsychoJS.Status.STARTED) {
    }
    
    
    // Check PHQ_9questionslide for response to end Routine
    if (PHQ_9questionslide.getRating() !== undefined && PHQ_9questionslide.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
    // *Q26toQ34* updates
    if (t >= 0.0 && Q26toQ34.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q26toQ34.tStart = t;  // (not accounting for frame time here)
      Q26toQ34.frameNStart = frameN;  // exact frame index
      
      Q26toQ34.setAutoDraw(true);
    }
    
    
    // if Q26toQ34 is active this frame...
    if (Q26toQ34.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *warningskip* updates
    if (t >= 0.0 && warningskip.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      warningskip.tStart = t;  // (not accounting for frame time here)
      warningskip.frameNStart = frameN;  // exact frame index
      
      warningskip.setAutoDraw(true);
    }
    
    
    // if warningskip is active this frame...
    if (warningskip.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    PHQ_9Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function PHQ_9RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'PHQ_9' ---
    PHQ_9Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('PHQ_9.stopped', globalClock.getTime());
    psychoJS.experiment.addData('PHQ_9questionslide.response', PHQ_9questionslide.getRating());
    psychoJS.experiment.addData('PHQ_9questionslide.rt', PHQ_9questionslide.getRT());
    // the Routine "PHQ_9" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var loneliness_introMaxDurationReached;
var _key_resp_15_allKeys;
var loneliness_introMaxDuration;
var loneliness_introComponents;
function loneliness_introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'loneliness_intro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    loneliness_introClock.reset();
    routineTimer.reset();
    loneliness_introMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_15.keys = undefined;
    key_resp_15.rt = undefined;
    _key_resp_15_allKeys = [];
    psychoJS.experiment.addData('loneliness_intro.started', globalClock.getTime());
    loneliness_introMaxDuration = null
    // keep track of which components have finished
    loneliness_introComponents = [];
    loneliness_introComponents.push(loneliness_intropic);
    loneliness_introComponents.push(key_resp_15);
    
    loneliness_introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function loneliness_introRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'loneliness_intro' ---
    // get current time
    t = loneliness_introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *loneliness_intropic* updates
    if (t >= 0.0 && loneliness_intropic.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      loneliness_intropic.tStart = t;  // (not accounting for frame time here)
      loneliness_intropic.frameNStart = frameN;  // exact frame index
      
      loneliness_intropic.setAutoDraw(true);
    }
    
    
    // if loneliness_intropic is active this frame...
    if (loneliness_intropic.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_15* updates
    if (t >= 0.0 && key_resp_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_15.tStart = t;  // (not accounting for frame time here)
      key_resp_15.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_15.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_15.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_15.clearEvents(); });
    }
    
    // if key_resp_15 is active this frame...
    if (key_resp_15.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_15.getKeys({keyList: 'return', waitRelease: false});
      _key_resp_15_allKeys = _key_resp_15_allKeys.concat(theseKeys);
      if (_key_resp_15_allKeys.length > 0) {
        key_resp_15.keys = _key_resp_15_allKeys[_key_resp_15_allKeys.length - 1].name;  // just the last key pressed
        key_resp_15.rt = _key_resp_15_allKeys[_key_resp_15_allKeys.length - 1].rt;
        key_resp_15.duration = _key_resp_15_allKeys[_key_resp_15_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    loneliness_introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function loneliness_introRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'loneliness_intro' ---
    loneliness_introComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('loneliness_intro.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_15.corr, level);
    }
    psychoJS.experiment.addData('key_resp_15.keys', key_resp_15.keys);
    if (typeof key_resp_15.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_15.rt', key_resp_15.rt);
        psychoJS.experiment.addData('key_resp_15.duration', key_resp_15.duration);
        routineTimer.reset();
        }
    
    key_resp_15.stop();
    // the Routine "loneliness_intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var lonelinessMaxDurationReached;
var lonelinessMaxDuration;
var lonelinessComponents;
function lonelinessRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'loneliness' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    lonelinessClock.reset();
    routineTimer.reset();
    lonelinessMaxDurationReached = false;
    // update component parameters for each repeat
    Loneliness_Q.setText(lonelinessqText);
    Loneliness_questionslide.reset()
    Q35toQ42.setText(lonelinessqIndex);
    psychoJS.experiment.addData('loneliness.started', globalClock.getTime());
    lonelinessMaxDuration = null
    // keep track of which components have finished
    lonelinessComponents = [];
    lonelinessComponents.push(Loneliness_Q);
    lonelinessComponents.push(Loneliness_questionslide);
    lonelinessComponents.push(Q35toQ42);
    lonelinessComponents.push(warningskip2);
    
    lonelinessComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function lonelinessRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'loneliness' ---
    // get current time
    t = lonelinessClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Loneliness_Q* updates
    if (t >= 0.0 && Loneliness_Q.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Loneliness_Q.tStart = t;  // (not accounting for frame time here)
      Loneliness_Q.frameNStart = frameN;  // exact frame index
      
      Loneliness_Q.setAutoDraw(true);
    }
    
    
    // if Loneliness_Q is active this frame...
    if (Loneliness_Q.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *Loneliness_questionslide* updates
    if (t >= 0.0 && Loneliness_questionslide.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Loneliness_questionslide.tStart = t;  // (not accounting for frame time here)
      Loneliness_questionslide.frameNStart = frameN;  // exact frame index
      
      Loneliness_questionslide.setAutoDraw(true);
    }
    
    
    // if Loneliness_questionslide is active this frame...
    if (Loneliness_questionslide.status === PsychoJS.Status.STARTED) {
    }
    
    
    // Check Loneliness_questionslide for response to end Routine
    if (Loneliness_questionslide.getRating() !== undefined && Loneliness_questionslide.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
    // *Q35toQ42* updates
    if (t >= 0.0 && Q35toQ42.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q35toQ42.tStart = t;  // (not accounting for frame time here)
      Q35toQ42.frameNStart = frameN;  // exact frame index
      
      Q35toQ42.setAutoDraw(true);
    }
    
    
    // if Q35toQ42 is active this frame...
    if (Q35toQ42.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *warningskip2* updates
    if (t >= 0.0 && warningskip2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      warningskip2.tStart = t;  // (not accounting for frame time here)
      warningskip2.frameNStart = frameN;  // exact frame index
      
      warningskip2.setAutoDraw(true);
    }
    
    
    // if warningskip2 is active this frame...
    if (warningskip2.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    lonelinessComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function lonelinessRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'loneliness' ---
    lonelinessComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('loneliness.stopped', globalClock.getTime());
    psychoJS.experiment.addData('Loneliness_questionslide.response', Loneliness_questionslide.getRating());
    psychoJS.experiment.addData('Loneliness_questionslide.rt', Loneliness_questionslide.getRT());
    // the Routine "loneliness" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var BPSQI_introMaxDurationReached;
var _key_resp_5_allKeys;
var BPSQI_introMaxDuration;
var BPSQI_introComponents;
function BPSQI_introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'BPSQI_intro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    BPSQI_introClock.reset();
    routineTimer.reset();
    BPSQI_introMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    psychoJS.experiment.addData('BPSQI_intro.started', globalClock.getTime());
    BPSQI_introMaxDuration = null
    // keep track of which components have finished
    BPSQI_introComponents = [];
    BPSQI_introComponents.push(BPSQI_intro_image);
    BPSQI_introComponents.push(key_resp_5);
    
    BPSQI_introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function BPSQI_introRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'BPSQI_intro' ---
    // get current time
    t = BPSQI_introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *BPSQI_intro_image* updates
    if (t >= 0.0 && BPSQI_intro_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      BPSQI_intro_image.tStart = t;  // (not accounting for frame time here)
      BPSQI_intro_image.frameNStart = frameN;  // exact frame index
      
      BPSQI_intro_image.setAutoDraw(true);
    }
    
    
    // if BPSQI_intro_image is active this frame...
    if (BPSQI_intro_image.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_5* updates
    if (t >= 0.0 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_5.tStart = t;  // (not accounting for frame time here)
      key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.clearEvents(); });
    }
    
    // if key_resp_5 is active this frame...
    if (key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_5.getKeys({keyList: 'return', waitRelease: false});
      _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
      if (_key_resp_5_allKeys.length > 0) {
        key_resp_5.keys = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_5.rt = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].rt;
        key_resp_5.duration = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    BPSQI_introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function BPSQI_introRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'BPSQI_intro' ---
    BPSQI_introComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('BPSQI_intro.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_5.corr, level);
    }
    psychoJS.experiment.addData('key_resp_5.keys', key_resp_5.keys);
    if (typeof key_resp_5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_5.rt', key_resp_5.rt);
        psychoJS.experiment.addData('key_resp_5.duration', key_resp_5.duration);
        routineTimer.reset();
        }
    
    key_resp_5.stop();
    // the Routine "BPSQI_intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var B_PSQI_Q1_BedTimeMaxDurationReached;
var B_PSQI_Q1_BedTimeMaxDuration;
var B_PSQI_Q1_BedTimeComponents;
function B_PSQI_Q1_BedTimeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'B_PSQI_Q1_BedTime' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    B_PSQI_Q1_BedTimeClock.reset();
    routineTimer.reset();
    B_PSQI_Q1_BedTimeMaxDurationReached = false;
    // update component parameters for each repeat
    textbox_Q1Bedtime.setText('');
    textbox_Q1Bedtime.refresh();
    psychoJS.experiment.addData('B_PSQI_Q1_BedTime.started', globalClock.getTime());
    B_PSQI_Q1_BedTimeMaxDuration = null
    // keep track of which components have finished
    B_PSQI_Q1_BedTimeComponents = [];
    B_PSQI_Q1_BedTimeComponents.push(Q1_BedTime);
    B_PSQI_Q1_BedTimeComponents.push(textbox_Q1Bedtime);
    B_PSQI_Q1_BedTimeComponents.push(enter_hint);
    B_PSQI_Q1_BedTimeComponents.push(Q43);
    
    B_PSQI_Q1_BedTimeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function B_PSQI_Q1_BedTimeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'B_PSQI_Q1_BedTime' ---
    // get current time
    t = B_PSQI_Q1_BedTimeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Q1_BedTime* updates
    if (t >= 0.0 && Q1_BedTime.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q1_BedTime.tStart = t;  // (not accounting for frame time here)
      Q1_BedTime.frameNStart = frameN;  // exact frame index
      
      Q1_BedTime.setAutoDraw(true);
    }
    
    
    // if Q1_BedTime is active this frame...
    if (Q1_BedTime.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *textbox_Q1Bedtime* updates
    if (t >= 0.0 && textbox_Q1Bedtime.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_Q1Bedtime.tStart = t;  // (not accounting for frame time here)
      textbox_Q1Bedtime.frameNStart = frameN;  // exact frame index
      
      textbox_Q1Bedtime.setAutoDraw(true);
    }
    
    
    // if textbox_Q1Bedtime is active this frame...
    if (textbox_Q1Bedtime.status === PsychoJS.Status.STARTED) {
    }
    
    // Run 'Each Frame' code from code_Q1Bedtime
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if ((! ("allow_advance_Q1" in psychoJS.experiment))) {
        psychoJS.experiment.allow_advance_Q1 = false;
    }
    keys = psychoJS.eventManager.getKeys();
    if (_pj.in_es6("return", keys)) {
        user_input = textbox_Q1Bedtime.text.trim();
        if ((user_input !== "")) {
            psychoJS.experiment.allow_advance_Q1 = true;
        }
    }
    if (psychoJS.experiment.allow_advance_Q1) {
        continueRoutine = false;
    }
    
    
    // *enter_hint* updates
    if (t >= 0.0 && enter_hint.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      enter_hint.tStart = t;  // (not accounting for frame time here)
      enter_hint.frameNStart = frameN;  // exact frame index
      
      enter_hint.setAutoDraw(true);
    }
    
    
    // if enter_hint is active this frame...
    if (enter_hint.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *Q43* updates
    if (t >= 0.0 && Q43.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q43.tStart = t;  // (not accounting for frame time here)
      Q43.frameNStart = frameN;  // exact frame index
      
      Q43.setAutoDraw(true);
    }
    
    
    // if Q43 is active this frame...
    if (Q43.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    B_PSQI_Q1_BedTimeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function B_PSQI_Q1_BedTimeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'B_PSQI_Q1_BedTime' ---
    B_PSQI_Q1_BedTimeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('B_PSQI_Q1_BedTime.stopped', globalClock.getTime());
    psychoJS.experiment.addData('textbox_Q1Bedtime.text',textbox_Q1Bedtime.text)
    // Run 'End Routine' code from code_Q1Bedtime
    psychoJS.experiment.addData("Q1_bed_time", textbox_Q1Bedtime.text);
    
    // the Routine "B_PSQI_Q1_BedTime" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var B_PSQI_Q2_WakeTimeMaxDurationReached;
var B_PSQI_Q2_WakeTimeMaxDuration;
var B_PSQI_Q2_WakeTimeComponents;
function B_PSQI_Q2_WakeTimeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'B_PSQI_Q2_WakeTime' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    B_PSQI_Q2_WakeTimeClock.reset();
    routineTimer.reset();
    B_PSQI_Q2_WakeTimeMaxDurationReached = false;
    // update component parameters for each repeat
    textbox_Q2WakeTime.setText('');
    textbox_Q2WakeTime.refresh();
    psychoJS.experiment.addData('B_PSQI_Q2_WakeTime.started', globalClock.getTime());
    B_PSQI_Q2_WakeTimeMaxDuration = null
    // keep track of which components have finished
    B_PSQI_Q2_WakeTimeComponents = [];
    B_PSQI_Q2_WakeTimeComponents.push(Q2_WakeTime);
    B_PSQI_Q2_WakeTimeComponents.push(textbox_Q2WakeTime);
    B_PSQI_Q2_WakeTimeComponents.push(enter_hint_2);
    B_PSQI_Q2_WakeTimeComponents.push(Q44);
    
    B_PSQI_Q2_WakeTimeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function B_PSQI_Q2_WakeTimeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'B_PSQI_Q2_WakeTime' ---
    // get current time
    t = B_PSQI_Q2_WakeTimeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Q2_WakeTime* updates
    if (t >= 0.0 && Q2_WakeTime.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q2_WakeTime.tStart = t;  // (not accounting for frame time here)
      Q2_WakeTime.frameNStart = frameN;  // exact frame index
      
      Q2_WakeTime.setAutoDraw(true);
    }
    
    
    // if Q2_WakeTime is active this frame...
    if (Q2_WakeTime.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *textbox_Q2WakeTime* updates
    if (t >= 0.0 && textbox_Q2WakeTime.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_Q2WakeTime.tStart = t;  // (not accounting for frame time here)
      textbox_Q2WakeTime.frameNStart = frameN;  // exact frame index
      
      textbox_Q2WakeTime.setAutoDraw(true);
    }
    
    
    // if textbox_Q2WakeTime is active this frame...
    if (textbox_Q2WakeTime.status === PsychoJS.Status.STARTED) {
    }
    
    // Run 'Each Frame' code from code_Q2WakeTime
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if ((! ("allow_advance_Q2" in psychoJS.experiment))) {
        psychoJS.experiment.allow_advance_Q2 = false;
    }
    keys = psychoJS.eventManager.getKeys();
    if (_pj.in_es6("return", keys)) {
        user_input = textbox_Q2WakeTime.text.trim();
        if ((user_input !== "")) {
            psychoJS.experiment.allow_advance_Q2 = true;
        }
    }
    if (psychoJS.experiment.allow_advance_Q2) {
        continueRoutine = false;
    }
    
    
    // *enter_hint_2* updates
    if (t >= 0.0 && enter_hint_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      enter_hint_2.tStart = t;  // (not accounting for frame time here)
      enter_hint_2.frameNStart = frameN;  // exact frame index
      
      enter_hint_2.setAutoDraw(true);
    }
    
    
    // if enter_hint_2 is active this frame...
    if (enter_hint_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *Q44* updates
    if (t >= 0.0 && Q44.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q44.tStart = t;  // (not accounting for frame time here)
      Q44.frameNStart = frameN;  // exact frame index
      
      Q44.setAutoDraw(true);
    }
    
    
    // if Q44 is active this frame...
    if (Q44.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    B_PSQI_Q2_WakeTimeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function B_PSQI_Q2_WakeTimeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'B_PSQI_Q2_WakeTime' ---
    B_PSQI_Q2_WakeTimeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('B_PSQI_Q2_WakeTime.stopped', globalClock.getTime());
    psychoJS.experiment.addData('textbox_Q2WakeTime.text',textbox_Q2WakeTime.text)
    // Run 'End Routine' code from code_Q2WakeTime
    psychoJS.experiment.addData("Q2_wake_time", textbox_Q2WakeTime.text);
    
    // the Routine "B_PSQI_Q2_WakeTime" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var B_PSQI_Q3_SleepLatencyMaxDurationReached;
var B_PSQI_Q3_SleepLatencyMaxDuration;
var B_PSQI_Q3_SleepLatencyComponents;
function B_PSQI_Q3_SleepLatencyRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'B_PSQI_Q3_SleepLatency' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    B_PSQI_Q3_SleepLatencyClock.reset();
    routineTimer.reset();
    B_PSQI_Q3_SleepLatencyMaxDurationReached = false;
    // update component parameters for each repeat
    textbox_Q3SleepLatency.setText('');
    textbox_Q3SleepLatency.refresh();
    psychoJS.experiment.addData('B_PSQI_Q3_SleepLatency.started', globalClock.getTime());
    B_PSQI_Q3_SleepLatencyMaxDuration = null
    // keep track of which components have finished
    B_PSQI_Q3_SleepLatencyComponents = [];
    B_PSQI_Q3_SleepLatencyComponents.push(Q3_SleepLatency);
    B_PSQI_Q3_SleepLatencyComponents.push(textbox_Q3SleepLatency);
    B_PSQI_Q3_SleepLatencyComponents.push(enter_hint_3);
    B_PSQI_Q3_SleepLatencyComponents.push(Q45);
    
    B_PSQI_Q3_SleepLatencyComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function B_PSQI_Q3_SleepLatencyRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'B_PSQI_Q3_SleepLatency' ---
    // get current time
    t = B_PSQI_Q3_SleepLatencyClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Q3_SleepLatency* updates
    if (t >= 0.0 && Q3_SleepLatency.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q3_SleepLatency.tStart = t;  // (not accounting for frame time here)
      Q3_SleepLatency.frameNStart = frameN;  // exact frame index
      
      Q3_SleepLatency.setAutoDraw(true);
    }
    
    
    // if Q3_SleepLatency is active this frame...
    if (Q3_SleepLatency.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *textbox_Q3SleepLatency* updates
    if (t >= 0.0 && textbox_Q3SleepLatency.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_Q3SleepLatency.tStart = t;  // (not accounting for frame time here)
      textbox_Q3SleepLatency.frameNStart = frameN;  // exact frame index
      
      textbox_Q3SleepLatency.setAutoDraw(true);
    }
    
    
    // if textbox_Q3SleepLatency is active this frame...
    if (textbox_Q3SleepLatency.status === PsychoJS.Status.STARTED) {
    }
    
    // Run 'Each Frame' code from code_Q3SleepLatency
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if ((! ("allow_advance_Q3" in psychoJS.experiment))) {
        psychoJS.experiment.allow_advance_Q3 = false;
    }
    keys = psychoJS.eventManager.getKeys();
    if (_pj.in_es6("return", keys)) {
        user_input = textbox_Q3SleepLatency.text.trim();
        if ((user_input !== "")) {
            psychoJS.experiment.allow_advance_Q3 = true;
        }
    }
    if (psychoJS.experiment.allow_advance_Q3) {
        continueRoutine = false;
    }
    
    
    // *enter_hint_3* updates
    if (t >= 0.0 && enter_hint_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      enter_hint_3.tStart = t;  // (not accounting for frame time here)
      enter_hint_3.frameNStart = frameN;  // exact frame index
      
      enter_hint_3.setAutoDraw(true);
    }
    
    
    // if enter_hint_3 is active this frame...
    if (enter_hint_3.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *Q45* updates
    if (t >= 0.0 && Q45.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q45.tStart = t;  // (not accounting for frame time here)
      Q45.frameNStart = frameN;  // exact frame index
      
      Q45.setAutoDraw(true);
    }
    
    
    // if Q45 is active this frame...
    if (Q45.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    B_PSQI_Q3_SleepLatencyComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function B_PSQI_Q3_SleepLatencyRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'B_PSQI_Q3_SleepLatency' ---
    B_PSQI_Q3_SleepLatencyComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('B_PSQI_Q3_SleepLatency.stopped', globalClock.getTime());
    psychoJS.experiment.addData('textbox_Q3SleepLatency.text',textbox_Q3SleepLatency.text)
    // Run 'End Routine' code from code_Q3SleepLatency
    psychoJS.experiment.addData("Q3_sleep_latency", textbox_Q3SleepLatency.text);
    
    // the Routine "B_PSQI_Q3_SleepLatency" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var B_PSQI_Q4_ActualSleepMaxDurationReached;
var B_PSQI_Q4_ActualSleepMaxDuration;
var B_PSQI_Q4_ActualSleepComponents;
function B_PSQI_Q4_ActualSleepRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'B_PSQI_Q4_ActualSleep' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    B_PSQI_Q4_ActualSleepClock.reset();
    routineTimer.reset();
    B_PSQI_Q4_ActualSleepMaxDurationReached = false;
    // update component parameters for each repeat
    textbox_Q4ActualSleep.setText('');
    textbox_Q4ActualSleep.refresh();
    psychoJS.experiment.addData('B_PSQI_Q4_ActualSleep.started', globalClock.getTime());
    B_PSQI_Q4_ActualSleepMaxDuration = null
    // keep track of which components have finished
    B_PSQI_Q4_ActualSleepComponents = [];
    B_PSQI_Q4_ActualSleepComponents.push(Q4_ActualSleep);
    B_PSQI_Q4_ActualSleepComponents.push(textbox_Q4ActualSleep);
    B_PSQI_Q4_ActualSleepComponents.push(hint_sleep);
    B_PSQI_Q4_ActualSleepComponents.push(enter_hint_4);
    B_PSQI_Q4_ActualSleepComponents.push(Q46);
    
    B_PSQI_Q4_ActualSleepComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function B_PSQI_Q4_ActualSleepRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'B_PSQI_Q4_ActualSleep' ---
    // get current time
    t = B_PSQI_Q4_ActualSleepClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Q4_ActualSleep* updates
    if (t >= 0.0 && Q4_ActualSleep.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q4_ActualSleep.tStart = t;  // (not accounting for frame time here)
      Q4_ActualSleep.frameNStart = frameN;  // exact frame index
      
      Q4_ActualSleep.setAutoDraw(true);
    }
    
    
    // if Q4_ActualSleep is active this frame...
    if (Q4_ActualSleep.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *textbox_Q4ActualSleep* updates
    if (t >= 0.0 && textbox_Q4ActualSleep.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_Q4ActualSleep.tStart = t;  // (not accounting for frame time here)
      textbox_Q4ActualSleep.frameNStart = frameN;  // exact frame index
      
      textbox_Q4ActualSleep.setAutoDraw(true);
    }
    
    
    // if textbox_Q4ActualSleep is active this frame...
    if (textbox_Q4ActualSleep.status === PsychoJS.Status.STARTED) {
    }
    
    // Run 'Each Frame' code from code_Q4ActualSleep
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if ((! ("allow_advance_Q4" in psychoJS.experiment))) {
        psychoJS.experiment.allow_advance_Q4 = false;
    }
    keys = psychoJS.eventManager.getKeys();
    if (_pj.in_es6("return", keys)) {
        user_input = textbox_Q4ActualSleep.text.trim();
        if ((user_input !== "")) {
            psychoJS.experiment.allow_advance_Q4 = true;
        }
    }
    if (psychoJS.experiment.allow_advance_Q4) {
        continueRoutine = false;
    }
    
    
    // *hint_sleep* updates
    if (t >= 0.0 && hint_sleep.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      hint_sleep.tStart = t;  // (not accounting for frame time here)
      hint_sleep.frameNStart = frameN;  // exact frame index
      
      hint_sleep.setAutoDraw(true);
    }
    
    
    // if hint_sleep is active this frame...
    if (hint_sleep.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *enter_hint_4* updates
    if (t >= 0.0 && enter_hint_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      enter_hint_4.tStart = t;  // (not accounting for frame time here)
      enter_hint_4.frameNStart = frameN;  // exact frame index
      
      enter_hint_4.setAutoDraw(true);
    }
    
    
    // if enter_hint_4 is active this frame...
    if (enter_hint_4.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *Q46* updates
    if (t >= 0.0 && Q46.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q46.tStart = t;  // (not accounting for frame time here)
      Q46.frameNStart = frameN;  // exact frame index
      
      Q46.setAutoDraw(true);
    }
    
    
    // if Q46 is active this frame...
    if (Q46.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    B_PSQI_Q4_ActualSleepComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function B_PSQI_Q4_ActualSleepRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'B_PSQI_Q4_ActualSleep' ---
    B_PSQI_Q4_ActualSleepComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('B_PSQI_Q4_ActualSleep.stopped', globalClock.getTime());
    psychoJS.experiment.addData('textbox_Q4ActualSleep.text',textbox_Q4ActualSleep.text)
    // Run 'End Routine' code from code_Q4ActualSleep
    psychoJS.experiment.addData("Q4_actual_sleep_hour", textbox_Q4ActualSleep.text);
    
    // the Routine "B_PSQI_Q4_ActualSleep" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var B_PSQI5MaxDurationReached;
var B_PSQI5MaxDuration;
var B_PSQI5Components;
function B_PSQI5RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'B_PSQI5' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    B_PSQI5Clock.reset();
    routineTimer.reset();
    B_PSQI5MaxDurationReached = false;
    // update component parameters for each repeat
    B_PSQIquestionText.setText(PSQI5qText);
    B_PSQIquestionslide.reset()
    Q47.setText('第 47 题，共 95 题\n\n');
    psychoJS.experiment.addData('B_PSQI5.started', globalClock.getTime());
    B_PSQI5MaxDuration = null
    // keep track of which components have finished
    B_PSQI5Components = [];
    B_PSQI5Components.push(B_PSQIquestionText);
    B_PSQI5Components.push(B_PSQIquestionslide);
    B_PSQI5Components.push(Q47);
    B_PSQI5Components.push(warningskip2_2);
    
    B_PSQI5Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function B_PSQI5RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'B_PSQI5' ---
    // get current time
    t = B_PSQI5Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *B_PSQIquestionText* updates
    if (t >= 0.0 && B_PSQIquestionText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      B_PSQIquestionText.tStart = t;  // (not accounting for frame time here)
      B_PSQIquestionText.frameNStart = frameN;  // exact frame index
      
      B_PSQIquestionText.setAutoDraw(true);
    }
    
    
    // if B_PSQIquestionText is active this frame...
    if (B_PSQIquestionText.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *B_PSQIquestionslide* updates
    if (t >= 0.0 && B_PSQIquestionslide.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      B_PSQIquestionslide.tStart = t;  // (not accounting for frame time here)
      B_PSQIquestionslide.frameNStart = frameN;  // exact frame index
      
      B_PSQIquestionslide.setAutoDraw(true);
    }
    
    
    // if B_PSQIquestionslide is active this frame...
    if (B_PSQIquestionslide.status === PsychoJS.Status.STARTED) {
    }
    
    
    // Check B_PSQIquestionslide for response to end Routine
    if (B_PSQIquestionslide.getRating() !== undefined && B_PSQIquestionslide.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
    // *Q47* updates
    if (t >= 0.0 && Q47.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q47.tStart = t;  // (not accounting for frame time here)
      Q47.frameNStart = frameN;  // exact frame index
      
      Q47.setAutoDraw(true);
    }
    
    
    // if Q47 is active this frame...
    if (Q47.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *warningskip2_2* updates
    if (t >= 0.0 && warningskip2_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      warningskip2_2.tStart = t;  // (not accounting for frame time here)
      warningskip2_2.frameNStart = frameN;  // exact frame index
      
      warningskip2_2.setAutoDraw(true);
    }
    
    
    // if warningskip2_2 is active this frame...
    if (warningskip2_2.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    B_PSQI5Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function B_PSQI5RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'B_PSQI5' ---
    B_PSQI5Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('B_PSQI5.stopped', globalClock.getTime());
    psychoJS.experiment.addData('B_PSQIquestionslide.response', B_PSQIquestionslide.getRating());
    psychoJS.experiment.addData('B_PSQIquestionslide.rt', B_PSQIquestionslide.getRT());
    // the Routine "B_PSQI5" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var B_PSQI6MaxDurationReached;
var B_PSQI6MaxDuration;
var B_PSQI6Components;
function B_PSQI6RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'B_PSQI6' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    B_PSQI6Clock.reset();
    routineTimer.reset();
    B_PSQI6MaxDurationReached = false;
    // update component parameters for each repeat
    B_PSQIquestionText6.setText(PSQI6qText);
    B_PSQIquestionslide6.reset()
    Q48.setText('第 48 题，共 95 题\n');
    psychoJS.experiment.addData('B_PSQI6.started', globalClock.getTime());
    B_PSQI6MaxDuration = null
    // keep track of which components have finished
    B_PSQI6Components = [];
    B_PSQI6Components.push(B_PSQIquestionText6);
    B_PSQI6Components.push(B_PSQIquestionslide6);
    B_PSQI6Components.push(Q48);
    B_PSQI6Components.push(warningskip2_3);
    
    B_PSQI6Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function B_PSQI6RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'B_PSQI6' ---
    // get current time
    t = B_PSQI6Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *B_PSQIquestionText6* updates
    if (t >= 0.0 && B_PSQIquestionText6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      B_PSQIquestionText6.tStart = t;  // (not accounting for frame time here)
      B_PSQIquestionText6.frameNStart = frameN;  // exact frame index
      
      B_PSQIquestionText6.setAutoDraw(true);
    }
    
    
    // if B_PSQIquestionText6 is active this frame...
    if (B_PSQIquestionText6.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *B_PSQIquestionslide6* updates
    if (t >= 0.0 && B_PSQIquestionslide6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      B_PSQIquestionslide6.tStart = t;  // (not accounting for frame time here)
      B_PSQIquestionslide6.frameNStart = frameN;  // exact frame index
      
      B_PSQIquestionslide6.setAutoDraw(true);
    }
    
    
    // if B_PSQIquestionslide6 is active this frame...
    if (B_PSQIquestionslide6.status === PsychoJS.Status.STARTED) {
    }
    
    
    // Check B_PSQIquestionslide6 for response to end Routine
    if (B_PSQIquestionslide6.getRating() !== undefined && B_PSQIquestionslide6.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
    // *Q48* updates
    if (t >= 0.0 && Q48.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q48.tStart = t;  // (not accounting for frame time here)
      Q48.frameNStart = frameN;  // exact frame index
      
      Q48.setAutoDraw(true);
    }
    
    
    // if Q48 is active this frame...
    if (Q48.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *warningskip2_3* updates
    if (t >= 0.0 && warningskip2_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      warningskip2_3.tStart = t;  // (not accounting for frame time here)
      warningskip2_3.frameNStart = frameN;  // exact frame index
      
      warningskip2_3.setAutoDraw(true);
    }
    
    
    // if warningskip2_3 is active this frame...
    if (warningskip2_3.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    B_PSQI6Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function B_PSQI6RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'B_PSQI6' ---
    B_PSQI6Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('B_PSQI6.stopped', globalClock.getTime());
    psychoJS.experiment.addData('B_PSQIquestionslide6.response', B_PSQIquestionslide6.getRating());
    psychoJS.experiment.addData('B_PSQIquestionslide6.rt', B_PSQIquestionslide6.getRT());
    // the Routine "B_PSQI6" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var BMRQ_introMaxDurationReached;
var _key_resp_7_allKeys;
var BMRQ_introMaxDuration;
var BMRQ_introComponents;
function BMRQ_introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'BMRQ_intro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    BMRQ_introClock.reset();
    routineTimer.reset();
    BMRQ_introMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_7.keys = undefined;
    key_resp_7.rt = undefined;
    _key_resp_7_allKeys = [];
    psychoJS.experiment.addData('BMRQ_intro.started', globalClock.getTime());
    BMRQ_introMaxDuration = null
    // keep track of which components have finished
    BMRQ_introComponents = [];
    BMRQ_introComponents.push(BMRQ_intro_image);
    BMRQ_introComponents.push(key_resp_7);
    
    BMRQ_introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function BMRQ_introRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'BMRQ_intro' ---
    // get current time
    t = BMRQ_introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *BMRQ_intro_image* updates
    if (t >= 0.0 && BMRQ_intro_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      BMRQ_intro_image.tStart = t;  // (not accounting for frame time here)
      BMRQ_intro_image.frameNStart = frameN;  // exact frame index
      
      BMRQ_intro_image.setAutoDraw(true);
    }
    
    
    // if BMRQ_intro_image is active this frame...
    if (BMRQ_intro_image.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_7* updates
    if (t >= 0.0 && key_resp_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_7.tStart = t;  // (not accounting for frame time here)
      key_resp_7.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_7.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.clearEvents(); });
    }
    
    // if key_resp_7 is active this frame...
    if (key_resp_7.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_7.getKeys({keyList: 'return', waitRelease: false});
      _key_resp_7_allKeys = _key_resp_7_allKeys.concat(theseKeys);
      if (_key_resp_7_allKeys.length > 0) {
        key_resp_7.keys = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].name;  // just the last key pressed
        key_resp_7.rt = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].rt;
        key_resp_7.duration = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    BMRQ_introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function BMRQ_introRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'BMRQ_intro' ---
    BMRQ_introComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('BMRQ_intro.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_7.corr, level);
    }
    psychoJS.experiment.addData('key_resp_7.keys', key_resp_7.keys);
    if (typeof key_resp_7.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_7.rt', key_resp_7.rt);
        psychoJS.experiment.addData('key_resp_7.duration', key_resp_7.duration);
        routineTimer.reset();
        }
    
    key_resp_7.stop();
    // the Routine "BMRQ_intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var BMRQMaxDurationReached;
var BMRQMaxDuration;
var BMRQComponents;
function BMRQRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'BMRQ' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    BMRQClock.reset();
    routineTimer.reset();
    BMRQMaxDurationReached = false;
    // update component parameters for each repeat
    BMRQ_questionText.setText(BMRQqText);
    BMRQ_slider.reset()
    Q49toQ68.setText(BMRQqIndex);
    psychoJS.experiment.addData('BMRQ.started', globalClock.getTime());
    BMRQMaxDuration = null
    // keep track of which components have finished
    BMRQComponents = [];
    BMRQComponents.push(BMRQ_questionText);
    BMRQComponents.push(BMRQ_slider);
    BMRQComponents.push(Q49toQ68);
    BMRQComponents.push(warningskip2_4);
    
    BMRQComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function BMRQRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'BMRQ' ---
    // get current time
    t = BMRQClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *BMRQ_questionText* updates
    if (t >= 0.0 && BMRQ_questionText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      BMRQ_questionText.tStart = t;  // (not accounting for frame time here)
      BMRQ_questionText.frameNStart = frameN;  // exact frame index
      
      BMRQ_questionText.setAutoDraw(true);
    }
    
    
    // if BMRQ_questionText is active this frame...
    if (BMRQ_questionText.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *BMRQ_slider* updates
    if (t >= 0.0 && BMRQ_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      BMRQ_slider.tStart = t;  // (not accounting for frame time here)
      BMRQ_slider.frameNStart = frameN;  // exact frame index
      
      BMRQ_slider.setAutoDraw(true);
    }
    
    
    // if BMRQ_slider is active this frame...
    if (BMRQ_slider.status === PsychoJS.Status.STARTED) {
    }
    
    
    // Check BMRQ_slider for response to end Routine
    if (BMRQ_slider.getRating() !== undefined && BMRQ_slider.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
    // *Q49toQ68* updates
    if (t >= 0.0 && Q49toQ68.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q49toQ68.tStart = t;  // (not accounting for frame time here)
      Q49toQ68.frameNStart = frameN;  // exact frame index
      
      Q49toQ68.setAutoDraw(true);
    }
    
    
    // if Q49toQ68 is active this frame...
    if (Q49toQ68.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *warningskip2_4* updates
    if (t >= 0.0 && warningskip2_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      warningskip2_4.tStart = t;  // (not accounting for frame time here)
      warningskip2_4.frameNStart = frameN;  // exact frame index
      
      warningskip2_4.setAutoDraw(true);
    }
    
    
    // if warningskip2_4 is active this frame...
    if (warningskip2_4.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    BMRQComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function BMRQRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'BMRQ' ---
    BMRQComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('BMRQ.stopped', globalClock.getTime());
    psychoJS.experiment.addData('BMRQ_slider.response', BMRQ_slider.getRating());
    psychoJS.experiment.addData('BMRQ_slider.rt', BMRQ_slider.getRT());
    // the Routine "BMRQ" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ATAI_introMaxDurationReached;
var _key_resp_9_allKeys;
var ATAI_introMaxDuration;
var ATAI_introComponents;
function ATAI_introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ATAI_intro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    ATAI_introClock.reset();
    routineTimer.reset();
    ATAI_introMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_9.keys = undefined;
    key_resp_9.rt = undefined;
    _key_resp_9_allKeys = [];
    psychoJS.experiment.addData('ATAI_intro.started', globalClock.getTime());
    ATAI_introMaxDuration = null
    // keep track of which components have finished
    ATAI_introComponents = [];
    ATAI_introComponents.push(ATAI_intro_image);
    ATAI_introComponents.push(key_resp_9);
    
    ATAI_introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function ATAI_introRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ATAI_intro' ---
    // get current time
    t = ATAI_introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *ATAI_intro_image* updates
    if (t >= 0.0 && ATAI_intro_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ATAI_intro_image.tStart = t;  // (not accounting for frame time here)
      ATAI_intro_image.frameNStart = frameN;  // exact frame index
      
      ATAI_intro_image.setAutoDraw(true);
    }
    
    
    // if ATAI_intro_image is active this frame...
    if (ATAI_intro_image.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_9* updates
    if (t >= 0.0 && key_resp_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_9.tStart = t;  // (not accounting for frame time here)
      key_resp_9.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_9.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_9.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_9.clearEvents(); });
    }
    
    // if key_resp_9 is active this frame...
    if (key_resp_9.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_9.getKeys({keyList: 'return', waitRelease: false});
      _key_resp_9_allKeys = _key_resp_9_allKeys.concat(theseKeys);
      if (_key_resp_9_allKeys.length > 0) {
        key_resp_9.keys = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].name;  // just the last key pressed
        key_resp_9.rt = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].rt;
        key_resp_9.duration = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ATAI_introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ATAI_introRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ATAI_intro' ---
    ATAI_introComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('ATAI_intro.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_9.corr, level);
    }
    psychoJS.experiment.addData('key_resp_9.keys', key_resp_9.keys);
    if (typeof key_resp_9.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_9.rt', key_resp_9.rt);
        psychoJS.experiment.addData('key_resp_9.duration', key_resp_9.duration);
        routineTimer.reset();
        }
    
    key_resp_9.stop();
    // the Routine "ATAI_intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ATAI_QMaxDurationReached;
var ATAI_QMaxDuration;
var ATAI_QComponents;
function ATAI_QRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ATAI_Q' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    ATAI_QClock.reset();
    routineTimer.reset();
    ATAI_QMaxDurationReached = false;
    // update component parameters for each repeat
    ATAI_QuestionText_2.setText(ATAIqText);
    ATAIquestionslide_2.reset()
    Q69toQ73_2.setText(ATAIqIndex);
    psychoJS.experiment.addData('ATAI_Q.started', globalClock.getTime());
    ATAI_QMaxDuration = null
    // keep track of which components have finished
    ATAI_QComponents = [];
    ATAI_QComponents.push(ATAI_QuestionText_2);
    ATAI_QComponents.push(ATAIquestionslide_2);
    ATAI_QComponents.push(Q69toQ73_2);
    ATAI_QComponents.push(warningskip2_5);
    
    ATAI_QComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function ATAI_QRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ATAI_Q' ---
    // get current time
    t = ATAI_QClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *ATAI_QuestionText_2* updates
    if (t >= 0.0 && ATAI_QuestionText_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ATAI_QuestionText_2.tStart = t;  // (not accounting for frame time here)
      ATAI_QuestionText_2.frameNStart = frameN;  // exact frame index
      
      ATAI_QuestionText_2.setAutoDraw(true);
    }
    
    
    // if ATAI_QuestionText_2 is active this frame...
    if (ATAI_QuestionText_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *ATAIquestionslide_2* updates
    if (t >= 0.0 && ATAIquestionslide_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ATAIquestionslide_2.tStart = t;  // (not accounting for frame time here)
      ATAIquestionslide_2.frameNStart = frameN;  // exact frame index
      
      ATAIquestionslide_2.setAutoDraw(true);
    }
    
    
    // if ATAIquestionslide_2 is active this frame...
    if (ATAIquestionslide_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // Check ATAIquestionslide_2 for response to end Routine
    if (ATAIquestionslide_2.getRating() !== undefined && ATAIquestionslide_2.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
    // *Q69toQ73_2* updates
    if (t >= 0.0 && Q69toQ73_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q69toQ73_2.tStart = t;  // (not accounting for frame time here)
      Q69toQ73_2.frameNStart = frameN;  // exact frame index
      
      Q69toQ73_2.setAutoDraw(true);
    }
    
    
    // if Q69toQ73_2 is active this frame...
    if (Q69toQ73_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *warningskip2_5* updates
    if (t >= 0.0 && warningskip2_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      warningskip2_5.tStart = t;  // (not accounting for frame time here)
      warningskip2_5.frameNStart = frameN;  // exact frame index
      
      warningskip2_5.setAutoDraw(true);
    }
    
    
    // if warningskip2_5 is active this frame...
    if (warningskip2_5.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ATAI_QComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ATAI_QRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ATAI_Q' ---
    ATAI_QComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('ATAI_Q.stopped', globalClock.getTime());
    psychoJS.experiment.addData('ATAIquestionslide_2.response', ATAIquestionslide_2.getRating());
    psychoJS.experiment.addData('ATAIquestionslide_2.rt', ATAIquestionslide_2.getRT());
    // the Routine "ATAI_Q" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var BSSS4_introMaxDurationReached;
var _key_resp_10_allKeys;
var BSSS4_introMaxDuration;
var BSSS4_introComponents;
function BSSS4_introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'BSSS4_intro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    BSSS4_introClock.reset();
    routineTimer.reset();
    BSSS4_introMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_10.keys = undefined;
    key_resp_10.rt = undefined;
    _key_resp_10_allKeys = [];
    psychoJS.experiment.addData('BSSS4_intro.started', globalClock.getTime());
    BSSS4_introMaxDuration = null
    // keep track of which components have finished
    BSSS4_introComponents = [];
    BSSS4_introComponents.push(BSSS4_intro_image);
    BSSS4_introComponents.push(key_resp_10);
    
    BSSS4_introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function BSSS4_introRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'BSSS4_intro' ---
    // get current time
    t = BSSS4_introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *BSSS4_intro_image* updates
    if (t >= 0.0 && BSSS4_intro_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      BSSS4_intro_image.tStart = t;  // (not accounting for frame time here)
      BSSS4_intro_image.frameNStart = frameN;  // exact frame index
      
      BSSS4_intro_image.setAutoDraw(true);
    }
    
    
    // if BSSS4_intro_image is active this frame...
    if (BSSS4_intro_image.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_10* updates
    if (t >= 0.0 && key_resp_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_10.tStart = t;  // (not accounting for frame time here)
      key_resp_10.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_10.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_10.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_10.clearEvents(); });
    }
    
    // if key_resp_10 is active this frame...
    if (key_resp_10.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_10.getKeys({keyList: 'return', waitRelease: false});
      _key_resp_10_allKeys = _key_resp_10_allKeys.concat(theseKeys);
      if (_key_resp_10_allKeys.length > 0) {
        key_resp_10.keys = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].name;  // just the last key pressed
        key_resp_10.rt = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].rt;
        key_resp_10.duration = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    BSSS4_introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function BSSS4_introRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'BSSS4_intro' ---
    BSSS4_introComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('BSSS4_intro.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_10.corr, level);
    }
    psychoJS.experiment.addData('key_resp_10.keys', key_resp_10.keys);
    if (typeof key_resp_10.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_10.rt', key_resp_10.rt);
        psychoJS.experiment.addData('key_resp_10.duration', key_resp_10.duration);
        routineTimer.reset();
        }
    
    key_resp_10.stop();
    // the Routine "BSSS4_intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var BSSSMaxDurationReached;
var BSSSMaxDuration;
var BSSSComponents;
function BSSSRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'BSSS' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    BSSSClock.reset();
    routineTimer.reset();
    BSSSMaxDurationReached = false;
    // update component parameters for each repeat
    BSSS_questiontext.setText(BSSSqText);
    BSSS_questionslide.reset()
    Q74toQ81.setText(BSSSqIndex);
    psychoJS.experiment.addData('BSSS.started', globalClock.getTime());
    BSSSMaxDuration = null
    // keep track of which components have finished
    BSSSComponents = [];
    BSSSComponents.push(BSSS_questiontext);
    BSSSComponents.push(BSSS_questionslide);
    BSSSComponents.push(Q74toQ81);
    BSSSComponents.push(warningskip2_6);
    
    BSSSComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function BSSSRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'BSSS' ---
    // get current time
    t = BSSSClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *BSSS_questiontext* updates
    if (t >= 0.0 && BSSS_questiontext.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      BSSS_questiontext.tStart = t;  // (not accounting for frame time here)
      BSSS_questiontext.frameNStart = frameN;  // exact frame index
      
      BSSS_questiontext.setAutoDraw(true);
    }
    
    
    // if BSSS_questiontext is active this frame...
    if (BSSS_questiontext.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *BSSS_questionslide* updates
    if (t >= 0.0 && BSSS_questionslide.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      BSSS_questionslide.tStart = t;  // (not accounting for frame time here)
      BSSS_questionslide.frameNStart = frameN;  // exact frame index
      
      BSSS_questionslide.setAutoDraw(true);
    }
    
    
    // if BSSS_questionslide is active this frame...
    if (BSSS_questionslide.status === PsychoJS.Status.STARTED) {
    }
    
    
    // Check BSSS_questionslide for response to end Routine
    if (BSSS_questionslide.getRating() !== undefined && BSSS_questionslide.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
    // *Q74toQ81* updates
    if (t >= 0.0 && Q74toQ81.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q74toQ81.tStart = t;  // (not accounting for frame time here)
      Q74toQ81.frameNStart = frameN;  // exact frame index
      
      Q74toQ81.setAutoDraw(true);
    }
    
    
    // if Q74toQ81 is active this frame...
    if (Q74toQ81.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *warningskip2_6* updates
    if (t >= 0.0 && warningskip2_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      warningskip2_6.tStart = t;  // (not accounting for frame time here)
      warningskip2_6.frameNStart = frameN;  // exact frame index
      
      warningskip2_6.setAutoDraw(true);
    }
    
    
    // if warningskip2_6 is active this frame...
    if (warningskip2_6.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    BSSSComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function BSSSRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'BSSS' ---
    BSSSComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('BSSS.stopped', globalClock.getTime());
    psychoJS.experiment.addData('BSSS_questionslide.response', BSSS_questionslide.getRating());
    psychoJS.experiment.addData('BSSS_questionslide.rt', BSSS_questionslide.getRT());
    // the Routine "BSSS" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var uncertainty_introMaxDurationReached;
var _key_resp_16_allKeys;
var uncertainty_introMaxDuration;
var uncertainty_introComponents;
function uncertainty_introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'uncertainty_intro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    uncertainty_introClock.reset();
    routineTimer.reset();
    uncertainty_introMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_16.keys = undefined;
    key_resp_16.rt = undefined;
    _key_resp_16_allKeys = [];
    psychoJS.experiment.addData('uncertainty_intro.started', globalClock.getTime());
    uncertainty_introMaxDuration = null
    // keep track of which components have finished
    uncertainty_introComponents = [];
    uncertainty_introComponents.push(uncertainty_image);
    uncertainty_introComponents.push(key_resp_16);
    
    uncertainty_introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function uncertainty_introRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'uncertainty_intro' ---
    // get current time
    t = uncertainty_introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *uncertainty_image* updates
    if (t >= 0.0 && uncertainty_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      uncertainty_image.tStart = t;  // (not accounting for frame time here)
      uncertainty_image.frameNStart = frameN;  // exact frame index
      
      uncertainty_image.setAutoDraw(true);
    }
    
    
    // if uncertainty_image is active this frame...
    if (uncertainty_image.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_16* updates
    if (t >= 0.0 && key_resp_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_16.tStart = t;  // (not accounting for frame time here)
      key_resp_16.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_16.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_16.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_16.clearEvents(); });
    }
    
    // if key_resp_16 is active this frame...
    if (key_resp_16.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_16.getKeys({keyList: 'return', waitRelease: false});
      _key_resp_16_allKeys = _key_resp_16_allKeys.concat(theseKeys);
      if (_key_resp_16_allKeys.length > 0) {
        key_resp_16.keys = _key_resp_16_allKeys[_key_resp_16_allKeys.length - 1].name;  // just the last key pressed
        key_resp_16.rt = _key_resp_16_allKeys[_key_resp_16_allKeys.length - 1].rt;
        key_resp_16.duration = _key_resp_16_allKeys[_key_resp_16_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    uncertainty_introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function uncertainty_introRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'uncertainty_intro' ---
    uncertainty_introComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('uncertainty_intro.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_16.corr, level);
    }
    psychoJS.experiment.addData('key_resp_16.keys', key_resp_16.keys);
    if (typeof key_resp_16.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_16.rt', key_resp_16.rt);
        psychoJS.experiment.addData('key_resp_16.duration', key_resp_16.duration);
        routineTimer.reset();
        }
    
    key_resp_16.stop();
    // the Routine "uncertainty_intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var uncertaintyMaxDurationReached;
var uncertaintyMaxDuration;
var uncertaintyComponents;
function uncertaintyRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'uncertainty' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    uncertaintyClock.reset();
    routineTimer.reset();
    uncertaintyMaxDurationReached = false;
    // update component parameters for each repeat
    uncertainty_questionText.setText(uncertaintyqText);
    uncertainty_slider.reset()
    Q82toQ93.setText(uncertaintyqIndex);
    psychoJS.experiment.addData('uncertainty.started', globalClock.getTime());
    uncertaintyMaxDuration = null
    // keep track of which components have finished
    uncertaintyComponents = [];
    uncertaintyComponents.push(uncertainty_questionText);
    uncertaintyComponents.push(uncertainty_slider);
    uncertaintyComponents.push(Q82toQ93);
    uncertaintyComponents.push(warningskip2_7);
    
    uncertaintyComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function uncertaintyRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'uncertainty' ---
    // get current time
    t = uncertaintyClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *uncertainty_questionText* updates
    if (t >= 0.0 && uncertainty_questionText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      uncertainty_questionText.tStart = t;  // (not accounting for frame time here)
      uncertainty_questionText.frameNStart = frameN;  // exact frame index
      
      uncertainty_questionText.setAutoDraw(true);
    }
    
    
    // if uncertainty_questionText is active this frame...
    if (uncertainty_questionText.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *uncertainty_slider* updates
    if (t >= 0.0 && uncertainty_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      uncertainty_slider.tStart = t;  // (not accounting for frame time here)
      uncertainty_slider.frameNStart = frameN;  // exact frame index
      
      uncertainty_slider.setAutoDraw(true);
    }
    
    
    // if uncertainty_slider is active this frame...
    if (uncertainty_slider.status === PsychoJS.Status.STARTED) {
    }
    
    
    // Check uncertainty_slider for response to end Routine
    if (uncertainty_slider.getRating() !== undefined && uncertainty_slider.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
    // *Q82toQ93* updates
    if (t >= 0.0 && Q82toQ93.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q82toQ93.tStart = t;  // (not accounting for frame time here)
      Q82toQ93.frameNStart = frameN;  // exact frame index
      
      Q82toQ93.setAutoDraw(true);
    }
    
    
    // if Q82toQ93 is active this frame...
    if (Q82toQ93.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *warningskip2_7* updates
    if (t >= 0.0 && warningskip2_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      warningskip2_7.tStart = t;  // (not accounting for frame time here)
      warningskip2_7.frameNStart = frameN;  // exact frame index
      
      warningskip2_7.setAutoDraw(true);
    }
    
    
    // if warningskip2_7 is active this frame...
    if (warningskip2_7.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    uncertaintyComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function uncertaintyRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'uncertainty' ---
    uncertaintyComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('uncertainty.stopped', globalClock.getTime());
    psychoJS.experiment.addData('uncertainty_slider.response', uncertainty_slider.getRating());
    psychoJS.experiment.addData('uncertainty_slider.rt', uncertainty_slider.getRT());
    // the Routine "uncertainty" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var BPAAT_introMaxDurationReached;
var _key_resp_11_allKeys;
var BPAAT_introMaxDuration;
var BPAAT_introComponents;
function BPAAT_introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'BPAAT_intro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    BPAAT_introClock.reset();
    routineTimer.reset();
    BPAAT_introMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_11.keys = undefined;
    key_resp_11.rt = undefined;
    _key_resp_11_allKeys = [];
    psychoJS.experiment.addData('BPAAT_intro.started', globalClock.getTime());
    BPAAT_introMaxDuration = null
    // keep track of which components have finished
    BPAAT_introComponents = [];
    BPAAT_introComponents.push(BPAAT_intro_image);
    BPAAT_introComponents.push(key_resp_11);
    
    BPAAT_introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function BPAAT_introRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'BPAAT_intro' ---
    // get current time
    t = BPAAT_introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *BPAAT_intro_image* updates
    if (t >= 0.0 && BPAAT_intro_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      BPAAT_intro_image.tStart = t;  // (not accounting for frame time here)
      BPAAT_intro_image.frameNStart = frameN;  // exact frame index
      
      BPAAT_intro_image.setAutoDraw(true);
    }
    
    
    // if BPAAT_intro_image is active this frame...
    if (BPAAT_intro_image.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_11* updates
    if (t >= 0.0 && key_resp_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_11.tStart = t;  // (not accounting for frame time here)
      key_resp_11.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_11.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_11.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_11.clearEvents(); });
    }
    
    // if key_resp_11 is active this frame...
    if (key_resp_11.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_11.getKeys({keyList: 'return', waitRelease: false});
      _key_resp_11_allKeys = _key_resp_11_allKeys.concat(theseKeys);
      if (_key_resp_11_allKeys.length > 0) {
        key_resp_11.keys = _key_resp_11_allKeys[_key_resp_11_allKeys.length - 1].name;  // just the last key pressed
        key_resp_11.rt = _key_resp_11_allKeys[_key_resp_11_allKeys.length - 1].rt;
        key_resp_11.duration = _key_resp_11_allKeys[_key_resp_11_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    BPAAT_introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function BPAAT_introRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'BPAAT_intro' ---
    BPAAT_introComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('BPAAT_intro.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_11.corr, level);
    }
    psychoJS.experiment.addData('key_resp_11.keys', key_resp_11.keys);
    if (typeof key_resp_11.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_11.rt', key_resp_11.rt);
        psychoJS.experiment.addData('key_resp_11.duration', key_resp_11.duration);
        routineTimer.reset();
        }
    
    key_resp_11.stop();
    // the Routine "BPAAT_intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var BPAAT1MaxDurationReached;
var BPAAT1MaxDuration;
var BPAAT1Components;
function BPAAT1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'BPAAT1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    BPAAT1Clock.reset();
    routineTimer.reset();
    BPAAT1MaxDurationReached = false;
    // update component parameters for each repeat
    BPAAT_questiontext1.setText(BPAAT1qText);
    BPAATquestionslide1.reset()
    Q94.setText('第 94 题，共 95 题');
    psychoJS.experiment.addData('BPAAT1.started', globalClock.getTime());
    BPAAT1MaxDuration = null
    // keep track of which components have finished
    BPAAT1Components = [];
    BPAAT1Components.push(BPAAT_questiontext1);
    BPAAT1Components.push(BPAATquestionslide1);
    BPAAT1Components.push(Q94);
    BPAAT1Components.push(warningskip2_8);
    
    BPAAT1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function BPAAT1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'BPAAT1' ---
    // get current time
    t = BPAAT1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *BPAAT_questiontext1* updates
    if (t >= 0.0 && BPAAT_questiontext1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      BPAAT_questiontext1.tStart = t;  // (not accounting for frame time here)
      BPAAT_questiontext1.frameNStart = frameN;  // exact frame index
      
      BPAAT_questiontext1.setAutoDraw(true);
    }
    
    
    // if BPAAT_questiontext1 is active this frame...
    if (BPAAT_questiontext1.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *BPAATquestionslide1* updates
    if (t >= 0.0 && BPAATquestionslide1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      BPAATquestionslide1.tStart = t;  // (not accounting for frame time here)
      BPAATquestionslide1.frameNStart = frameN;  // exact frame index
      
      BPAATquestionslide1.setAutoDraw(true);
    }
    
    
    // if BPAATquestionslide1 is active this frame...
    if (BPAATquestionslide1.status === PsychoJS.Status.STARTED) {
    }
    
    
    // Check BPAATquestionslide1 for response to end Routine
    if (BPAATquestionslide1.getRating() !== undefined && BPAATquestionslide1.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
    // *Q94* updates
    if (t >= 0.0 && Q94.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q94.tStart = t;  // (not accounting for frame time here)
      Q94.frameNStart = frameN;  // exact frame index
      
      Q94.setAutoDraw(true);
    }
    
    
    // if Q94 is active this frame...
    if (Q94.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *warningskip2_8* updates
    if (t >= 0.0 && warningskip2_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      warningskip2_8.tStart = t;  // (not accounting for frame time here)
      warningskip2_8.frameNStart = frameN;  // exact frame index
      
      warningskip2_8.setAutoDraw(true);
    }
    
    
    // if warningskip2_8 is active this frame...
    if (warningskip2_8.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    BPAAT1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function BPAAT1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'BPAAT1' ---
    BPAAT1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('BPAAT1.stopped', globalClock.getTime());
    psychoJS.experiment.addData('BPAATquestionslide1.response', BPAATquestionslide1.getRating());
    psychoJS.experiment.addData('BPAATquestionslide1.rt', BPAATquestionslide1.getRT());
    // the Routine "BPAAT1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var BPAAT2MaxDurationReached;
var BPAAT2MaxDuration;
var BPAAT2Components;
function BPAAT2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'BPAAT2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    BPAAT2Clock.reset();
    routineTimer.reset();
    BPAAT2MaxDurationReached = false;
    // update component parameters for each repeat
    BPAAT_questiontext2.setText(BPAAT2qText);
    BPAATquestionslide2.reset()
    Q95.setText('第 95 题，共 95 题\n');
    psychoJS.experiment.addData('BPAAT2.started', globalClock.getTime());
    BPAAT2MaxDuration = null
    // keep track of which components have finished
    BPAAT2Components = [];
    BPAAT2Components.push(BPAAT_questiontext2);
    BPAAT2Components.push(BPAATquestionslide2);
    BPAAT2Components.push(Q95);
    BPAAT2Components.push(warningskip2_9);
    
    BPAAT2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function BPAAT2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'BPAAT2' ---
    // get current time
    t = BPAAT2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *BPAAT_questiontext2* updates
    if (t >= 0.0 && BPAAT_questiontext2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      BPAAT_questiontext2.tStart = t;  // (not accounting for frame time here)
      BPAAT_questiontext2.frameNStart = frameN;  // exact frame index
      
      BPAAT_questiontext2.setAutoDraw(true);
    }
    
    
    // if BPAAT_questiontext2 is active this frame...
    if (BPAAT_questiontext2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *BPAATquestionslide2* updates
    if (t >= 0.0 && BPAATquestionslide2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      BPAATquestionslide2.tStart = t;  // (not accounting for frame time here)
      BPAATquestionslide2.frameNStart = frameN;  // exact frame index
      
      BPAATquestionslide2.setAutoDraw(true);
    }
    
    
    // if BPAATquestionslide2 is active this frame...
    if (BPAATquestionslide2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // Check BPAATquestionslide2 for response to end Routine
    if (BPAATquestionslide2.getRating() !== undefined && BPAATquestionslide2.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
    // *Q95* updates
    if (t >= 0.0 && Q95.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q95.tStart = t;  // (not accounting for frame time here)
      Q95.frameNStart = frameN;  // exact frame index
      
      Q95.setAutoDraw(true);
    }
    
    
    // if Q95 is active this frame...
    if (Q95.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *warningskip2_9* updates
    if (t >= 0.0 && warningskip2_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      warningskip2_9.tStart = t;  // (not accounting for frame time here)
      warningskip2_9.frameNStart = frameN;  // exact frame index
      
      warningskip2_9.setAutoDraw(true);
    }
    
    
    // if warningskip2_9 is active this frame...
    if (warningskip2_9.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    BPAAT2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function BPAAT2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'BPAAT2' ---
    BPAAT2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('BPAAT2.stopped', globalClock.getTime());
    psychoJS.experiment.addData('BPAATquestionslide2.response', BPAATquestionslide2.getRating());
    psychoJS.experiment.addData('BPAATquestionslide2.rt', BPAATquestionslide2.getRT());
    // the Routine "BPAAT2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var finishQUESTION_introMaxDurationReached;
var _resp_2_allKeys;
var finishQUESTION_introMaxDuration;
var finishQUESTION_introComponents;
function finishQUESTION_introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'finishQUESTION_intro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    finishQUESTION_introClock.reset();
    routineTimer.reset();
    finishQUESTION_introMaxDurationReached = false;
    // update component parameters for each repeat
    resp_2.keys = undefined;
    resp_2.rt = undefined;
    _resp_2_allKeys = [];
    psychoJS.experiment.addData('finishQUESTION_intro.started', globalClock.getTime());
    finishQUESTION_introMaxDuration = null
    // keep track of which components have finished
    finishQUESTION_introComponents = [];
    finishQUESTION_introComponents.push(finish_questions_image);
    finishQUESTION_introComponents.push(resp_2);
    
    finishQUESTION_introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function finishQUESTION_introRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'finishQUESTION_intro' ---
    // get current time
    t = finishQUESTION_introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *finish_questions_image* updates
    if (t >= 0.0 && finish_questions_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      finish_questions_image.tStart = t;  // (not accounting for frame time here)
      finish_questions_image.frameNStart = frameN;  // exact frame index
      
      finish_questions_image.setAutoDraw(true);
    }
    
    
    // if finish_questions_image is active this frame...
    if (finish_questions_image.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *resp_2* updates
    if (t >= 0.0 && resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp_2.tStart = t;  // (not accounting for frame time here)
      resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { resp_2.clearEvents(); });
    }
    
    // if resp_2 is active this frame...
    if (resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = resp_2.getKeys({keyList: 'return', waitRelease: false});
      _resp_2_allKeys = _resp_2_allKeys.concat(theseKeys);
      if (_resp_2_allKeys.length > 0) {
        resp_2.keys = _resp_2_allKeys[_resp_2_allKeys.length - 1].name;  // just the last key pressed
        resp_2.rt = _resp_2_allKeys[_resp_2_allKeys.length - 1].rt;
        resp_2.duration = _resp_2_allKeys[_resp_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    finishQUESTION_introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function finishQUESTION_introRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'finishQUESTION_intro' ---
    finishQUESTION_introComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('finishQUESTION_intro.stopped', globalClock.getTime());
    resp_2.stop();
    // the Routine "finishQUESTION_intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instructionsMaxDurationReached;
var _resp_allKeys;
var instructionsMaxDuration;
var instructionsComponents;
function instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instructionsClock.reset();
    routineTimer.reset();
    instructionsMaxDurationReached = false;
    // update component parameters for each repeat
    resp.keys = undefined;
    resp.rt = undefined;
    _resp_allKeys = [];
    psychoJS.experiment.addData('instructions.started', globalClock.getTime());
    instructionsMaxDuration = null
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(background);
    instructionsComponents.push(resp);
    
    instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions' ---
    // get current time
    t = instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *background* updates
    if (t >= 0.0 && background.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      background.tStart = t;  // (not accounting for frame time here)
      background.frameNStart = frameN;  // exact frame index
      
      background.setAutoDraw(true);
    }
    
    
    // if background is active this frame...
    if (background.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *resp* updates
    if (t >= 0.0 && resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp.tStart = t;  // (not accounting for frame time here)
      resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { resp.clearEvents(); });
    }
    
    // if resp is active this frame...
    if (resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = resp.getKeys({keyList: 'return', waitRelease: false});
      _resp_allKeys = _resp_allKeys.concat(theseKeys);
      if (_resp_allKeys.length > 0) {
        resp.keys = _resp_allKeys[_resp_allKeys.length - 1].name;  // just the last key pressed
        resp.rt = _resp_allKeys[_resp_allKeys.length - 1].rt;
        resp.duration = _resp_allKeys[_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions' ---
    instructionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instructions.stopped', globalClock.getTime());
    resp.stop();
    // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var reset_balloonMaxDurationReached;
var popped;
var nPumps;
var reset_balloonMaxDuration;
var reset_balloonComponents;
function reset_balloonRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'reset_balloon' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    reset_balloonClock.reset();
    routineTimer.reset();
    reset_balloonMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code
    balloonSize = 0.08;
    popped = false;
    nPumps = 0;
    
    psychoJS.experiment.addData('reset_balloon.started', globalClock.getTime());
    reset_balloonMaxDuration = null
    // keep track of which components have finished
    reset_balloonComponents = [];
    
    reset_balloonComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function reset_balloonRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'reset_balloon' ---
    // get current time
    t = reset_balloonClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    reset_balloonComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function reset_balloonRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'reset_balloon' ---
    reset_balloonComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('reset_balloon.stopped', globalClock.getTime());
    // the Routine "reset_balloon" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var practice_trialMaxDurationReached;
var _practice_bankButton_allKeys;
var practice_trialMaxDuration;
var practice_trialComponents;
function practice_trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'practice_trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    practice_trialClock.reset();
    routineTimer.reset();
    practice_trialMaxDurationReached = false;
    // update component parameters for each repeat
    practice_bankButton.keys = undefined;
    practice_bankButton.rt = undefined;
    _practice_bankButton_allKeys = [];
    // Run 'Begin Routine' code from practice_updateEarnings
    thisBalloonEarnings = ((practice_pump.thisN + 1) * 0.05);
    balloonEarnings = ("\u5f53\u524d\u6c14\u7403\u5956\u91d1:\n$" + util.round(thisBalloonEarnings, 2).toString());
    bankedText = ("\u4f60\u5df2\u5b58\u5165\u7684\u5956\u91d1:\n$" + util.round(bankedEarnings, 2).toString());
    
    // Run 'Begin Routine' code from practice_setBalloonSize
    balloonBody.setPos([0, ((balloonSize / 2) - 0.5)]);
    balloonBody.setSize(balloonSize);
    
    practice_trialcount.setText(((("\u6c14\u7403\u7f16\u53f7\uff1a " + (practice_trials.thisN + 1).toString()) + "/") + practice_trials.nTotal.toString()));
    psychoJS.experiment.addData('practice_trial.started', globalClock.getTime());
    practice_trialMaxDuration = null
    // keep track of which components have finished
    practice_trialComponents = [];
    practice_trialComponents.push(practice_bg);
    practice_trialComponents.push(practice_bankButton);
    practice_trialComponents.push(practice_reminder);
    practice_trialComponents.push(practice_balloonValTxt);
    practice_trialComponents.push(practice_bankedTxt);
    practice_trialComponents.push(practice_balloonBody);
    practice_trialComponents.push(practice_trialcount);
    
    practice_trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function practice_trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'practice_trial' ---
    // get current time
    t = practice_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *practice_bg* updates
    if (t >= 0.0 && practice_bg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_bg.tStart = t;  // (not accounting for frame time here)
      practice_bg.frameNStart = frameN;  // exact frame index
      
      practice_bg.setAutoDraw(true);
    }
    
    
    // if practice_bg is active this frame...
    if (practice_bg.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *practice_bankButton* updates
    if (t >= 0.0 && practice_bankButton.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_bankButton.tStart = t;  // (not accounting for frame time here)
      practice_bankButton.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { practice_bankButton.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { practice_bankButton.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { practice_bankButton.clearEvents(); });
    }
    
    // if practice_bankButton is active this frame...
    if (practice_bankButton.status === PsychoJS.Status.STARTED) {
      let theseKeys = practice_bankButton.getKeys({keyList: ['return','space'], waitRelease: false});
      _practice_bankButton_allKeys = _practice_bankButton_allKeys.concat(theseKeys);
      if (_practice_bankButton_allKeys.length > 0) {
        practice_bankButton.keys = _practice_bankButton_allKeys[_practice_bankButton_allKeys.length - 1].name;  // just the last key pressed
        practice_bankButton.rt = _practice_bankButton_allKeys[_practice_bankButton_allKeys.length - 1].rt;
        practice_bankButton.duration = _practice_bankButton_allKeys[_practice_bankButton_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *practice_reminder* updates
    if (t >= 0.0 && practice_reminder.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_reminder.tStart = t;  // (not accounting for frame time here)
      practice_reminder.frameNStart = frameN;  // exact frame index
      
      practice_reminder.setAutoDraw(true);
    }
    
    
    // if practice_reminder is active this frame...
    if (practice_reminder.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *practice_balloonValTxt* updates
    if (t >= 0.0 && practice_balloonValTxt.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      practice_balloonValTxt.setText(balloonEarnings, false);
      // keep track of start time/frame for later
      practice_balloonValTxt.tStart = t;  // (not accounting for frame time here)
      practice_balloonValTxt.frameNStart = frameN;  // exact frame index
      
      practice_balloonValTxt.setAutoDraw(true);
    }
    
    
    // if practice_balloonValTxt is active this frame...
    if (practice_balloonValTxt.status === PsychoJS.Status.STARTED) {
      // update params
      practice_balloonValTxt.setText(balloonEarnings, false);
    }
    
    
    // *practice_bankedTxt* updates
    if (t >= 0.0 && practice_bankedTxt.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      practice_bankedTxt.setText(bankedText, false);
      // keep track of start time/frame for later
      practice_bankedTxt.tStart = t;  // (not accounting for frame time here)
      practice_bankedTxt.frameNStart = frameN;  // exact frame index
      
      practice_bankedTxt.setAutoDraw(true);
    }
    
    
    // if practice_bankedTxt is active this frame...
    if (practice_bankedTxt.status === PsychoJS.Status.STARTED) {
      // update params
      practice_bankedTxt.setText(bankedText, false);
    }
    
    // Run 'Each Frame' code from practice_setBalloonSize
    balloonSize = (0.1 + ((practice_pump.thisN + 1) * 0.015));
    
    
    // *practice_balloonBody* updates
    if (t >= 0.0 && practice_balloonBody.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      practice_balloonBody.setPos([0, ((balloonSize / 2) - 0.5)], false);
      practice_balloonBody.setSize(balloonSize, false);
      // keep track of start time/frame for later
      practice_balloonBody.tStart = t;  // (not accounting for frame time here)
      practice_balloonBody.frameNStart = frameN;  // exact frame index
      
      practice_balloonBody.setAutoDraw(true);
    }
    
    
    // if practice_balloonBody is active this frame...
    if (practice_balloonBody.status === PsychoJS.Status.STARTED) {
      // update params
      practice_balloonBody.setPos([0, ((balloonSize / 2) - 0.5)], false);
      practice_balloonBody.setSize(balloonSize, false);
    }
    
    
    // *practice_trialcount* updates
    if (t >= 0.0 && practice_trialcount.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_trialcount.tStart = t;  // (not accounting for frame time here)
      practice_trialcount.frameNStart = frameN;  // exact frame index
      
      practice_trialcount.setAutoDraw(true);
    }
    
    
    // if practice_trialcount is active this frame...
    if (practice_trialcount.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    practice_trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practice_trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'practice_trial' ---
    practice_trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('practice_trial.stopped', globalClock.getTime());
    practice_bankButton.stop();
    // Run 'End Routine' code from practice_updateEarnings
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if (_pj.in_es6("return", practice_bankButton.keys)) {
        practice_pump.finished = true;
        popped = false;
    } else {
        if (((practice_pump.thisN + 1) === practice_maxPumps)) {
            popped = true;
        } else {
            popped = false;
        }
        if (popped) {
            thisBalloonEarnings = 0.0;
            lastBalloonEarnings = 0.0;
        } else {
            lastBalloonEarnings = thisBalloonEarnings;
        }
    }
    
    // Run 'End Routine' code from practice_setBalloonSize
    practice_trials.addData("practice_nPumps", (practice_pump.thisN + 1));
    practice_trials.addData("practice_size", balloonSize);
    practice_trials.addData("practice_earnings", thisBalloonEarnings);
    practice_trials.addData("practice_popped", popped);
    
    // the Routine "practice_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var practice_feedbackMaxDurationReached;
var practice_feedbackMaxDuration;
var practice_feedbackComponents;
function practice_feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'practice_feedback' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    practice_feedbackClock.reset(routineTimer.getTime());
    routineTimer.add(1.500000);
    practice_feedbackMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from practice_checkPopped
    lastBalloonEarnings = thisBalloonEarnings;
    bankedEarnings += thisBalloonEarnings;
    balloonEarnings = ("\u5f53\u524d\u6c14\u7403\u5956\u91d1:\n$" + util.round(thisBalloonEarnings, 2).toString());
    bankedText = ("\u4f60\u5df2\u5b58\u5165\u7684\u5956\u91d1:\n$" + util.round(bankedEarnings, 2).toString());
    if ((popped === true)) {
        feedbackText = "\u54ce\u5440\uff01\u8fd9\u4e2a\u6c14\u7403\u7206\u70b8\u4e86\uff0c\u5956\u91d1\u5f52\u96f6\uff01";
    } else {
        feedbackText = ("\u4f60\u5df2\u6210\u529f\u5b58\u5165 $" + util.round(lastBalloonEarnings, 2).toString());
    }
    
    practice_feedbacktxt.setText(feedbackText);
    practice_trialcount_2.setText(((("\u6c14\u7403\u7f16\u53f7\uff1a " + (practice_trials.thisN + 1).toString()) + "/") + practice_trials.nTotal.toString()));
    psychoJS.experiment.addData('practice_feedback.started', globalClock.getTime());
    practice_feedbackMaxDuration = null
    // keep track of which components have finished
    practice_feedbackComponents = [];
    practice_feedbackComponents.push(practice_background_3);
    practice_feedbackComponents.push(practice_feedbacktxt);
    practice_feedbackComponents.push(practice_bankedTxt_2);
    practice_feedbackComponents.push(practice_reminder_2);
    practice_feedbackComponents.push(practice_trialcount_2);
    
    practice_feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function practice_feedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'practice_feedback' ---
    // get current time
    t = practice_feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *practice_background_3* updates
    if (t >= 0.0 && practice_background_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_background_3.tStart = t;  // (not accounting for frame time here)
      practice_background_3.frameNStart = frameN;  // exact frame index
      
      practice_background_3.setAutoDraw(true);
    }
    
    
    // if practice_background_3 is active this frame...
    if (practice_background_3.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (practice_background_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      practice_background_3.tStop = t;  // not accounting for scr refresh
      practice_background_3.frameNStop = frameN;  // exact frame index
      // update status
      practice_background_3.status = PsychoJS.Status.FINISHED;
      practice_background_3.setAutoDraw(false);
    }
    
    
    // *practice_feedbacktxt* updates
    if (t >= 0.0 && practice_feedbacktxt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_feedbacktxt.tStart = t;  // (not accounting for frame time here)
      practice_feedbacktxt.frameNStart = frameN;  // exact frame index
      
      practice_feedbacktxt.setAutoDraw(true);
    }
    
    
    // if practice_feedbacktxt is active this frame...
    if (practice_feedbacktxt.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (practice_feedbacktxt.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      practice_feedbacktxt.tStop = t;  // not accounting for scr refresh
      practice_feedbacktxt.frameNStop = frameN;  // exact frame index
      // update status
      practice_feedbacktxt.status = PsychoJS.Status.FINISHED;
      practice_feedbacktxt.setAutoDraw(false);
    }
    
    
    // *practice_bankedTxt_2* updates
    if (t >= 0.0 && practice_bankedTxt_2.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      practice_bankedTxt_2.setText(bankedText, false);
      // keep track of start time/frame for later
      practice_bankedTxt_2.tStart = t;  // (not accounting for frame time here)
      practice_bankedTxt_2.frameNStart = frameN;  // exact frame index
      
      practice_bankedTxt_2.setAutoDraw(true);
    }
    
    
    // if practice_bankedTxt_2 is active this frame...
    if (practice_bankedTxt_2.status === PsychoJS.Status.STARTED) {
      // update params
      practice_bankedTxt_2.setText(bankedText, false);
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (practice_bankedTxt_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      practice_bankedTxt_2.tStop = t;  // not accounting for scr refresh
      practice_bankedTxt_2.frameNStop = frameN;  // exact frame index
      // update status
      practice_bankedTxt_2.status = PsychoJS.Status.FINISHED;
      practice_bankedTxt_2.setAutoDraw(false);
    }
    
    
    // *practice_reminder_2* updates
    if (t >= 0.0 && practice_reminder_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_reminder_2.tStart = t;  // (not accounting for frame time here)
      practice_reminder_2.frameNStart = frameN;  // exact frame index
      
      practice_reminder_2.setAutoDraw(true);
    }
    
    
    // if practice_reminder_2 is active this frame...
    if (practice_reminder_2.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (practice_reminder_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      practice_reminder_2.tStop = t;  // not accounting for scr refresh
      practice_reminder_2.frameNStop = frameN;  // exact frame index
      // update status
      practice_reminder_2.status = PsychoJS.Status.FINISHED;
      practice_reminder_2.setAutoDraw(false);
    }
    
    
    // *practice_trialcount_2* updates
    if (t >= 0.0 && practice_trialcount_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_trialcount_2.tStart = t;  // (not accounting for frame time here)
      practice_trialcount_2.frameNStart = frameN;  // exact frame index
      
      practice_trialcount_2.setAutoDraw(true);
    }
    
    
    // if practice_trialcount_2 is active this frame...
    if (practice_trialcount_2.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (practice_trialcount_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      practice_trialcount_2.tStop = t;  // not accounting for scr refresh
      practice_trialcount_2.frameNStop = frameN;  // exact frame index
      // update status
      practice_trialcount_2.status = PsychoJS.Status.FINISHED;
      practice_trialcount_2.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    practice_feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practice_feedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'practice_feedback' ---
    practice_feedbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('practice_feedback.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (practice_feedbackMaxDurationReached) {
        practice_feedbackClock.add(practice_feedbackMaxDuration);
    } else {
        practice_feedbackClock.add(1.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var practice_finalScoreMaxDurationReached;
var scoreText;
var _key_resp_allKeys;
var practice_finalScoreMaxDuration;
var practice_finalScoreComponents;
function practice_finalScoreRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'practice_finalScore' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    practice_finalScoreClock.reset();
    routineTimer.reset();
    practice_finalScoreMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from practice_finalScoreCode
    scoreText = `太棒了！你累计获得了
    $${bankedEarnings}`
    ;
    
    practice_scoremsg.setText(scoreText);
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    psychoJS.experiment.addData('practice_finalScore.started', globalClock.getTime());
    practice_finalScoreMaxDuration = null
    // keep track of which components have finished
    practice_finalScoreComponents = [];
    practice_finalScoreComponents.push(practice_background_4);
    practice_finalScoreComponents.push(practice_scoremsg);
    practice_finalScoreComponents.push(text);
    practice_finalScoreComponents.push(key_resp);
    
    practice_finalScoreComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function practice_finalScoreRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'practice_finalScore' ---
    // get current time
    t = practice_finalScoreClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *practice_background_4* updates
    if (t >= 0.0 && practice_background_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_background_4.tStart = t;  // (not accounting for frame time here)
      practice_background_4.frameNStart = frameN;  // exact frame index
      
      practice_background_4.setAutoDraw(true);
    }
    
    
    // if practice_background_4 is active this frame...
    if (practice_background_4.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *practice_scoremsg* updates
    if (t >= 0.0 && practice_scoremsg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_scoremsg.tStart = t;  // (not accounting for frame time here)
      practice_scoremsg.frameNStart = frameN;  // exact frame index
      
      practice_scoremsg.setAutoDraw(true);
    }
    
    
    // if practice_scoremsg is active this frame...
    if (practice_scoremsg.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // if text is active this frame...
    if (text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    // if key_resp is active this frame...
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: 'return', waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    practice_finalScoreComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practice_finalScoreRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'practice_finalScore' ---
    practice_finalScoreComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('practice_finalScore.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "practice_finalScore" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var resetmoneypracticeMaxDurationReached;
var resetmoneypracticeMaxDuration;
var resetmoneypracticeComponents;
function resetmoneypracticeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'resetmoneypractice' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    resetmoneypracticeClock.reset();
    routineTimer.reset();
    resetmoneypracticeMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_4
    bankedEarnings = 0;
    
    psychoJS.experiment.addData('resetmoneypractice.started', globalClock.getTime());
    resetmoneypracticeMaxDuration = null
    // keep track of which components have finished
    resetmoneypracticeComponents = [];
    
    resetmoneypracticeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function resetmoneypracticeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'resetmoneypractice' ---
    // get current time
    t = resetmoneypracticeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    resetmoneypracticeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function resetmoneypracticeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'resetmoneypractice' ---
    resetmoneypracticeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('resetmoneypractice.stopped', globalClock.getTime());
    // the Routine "resetmoneypractice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var comprehension_checkMaxDurationReached;
var _key_resp_comprehension_allKeys;
var comprehension_checkMaxDuration;
var comprehension_checkComponents;
function comprehension_checkRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'comprehension_check' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    comprehension_checkClock.reset();
    routineTimer.reset();
    comprehension_checkMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_comprehension.keys = undefined;
    key_resp_comprehension.rt = undefined;
    _key_resp_comprehension_allKeys = [];
    psychoJS.experiment.addData('comprehension_check.started', globalClock.getTime());
    comprehension_checkMaxDuration = null
    // keep track of which components have finished
    comprehension_checkComponents = [];
    comprehension_checkComponents.push(understand_2);
    comprehension_checkComponents.push(key_resp_comprehension);
    
    comprehension_checkComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function comprehension_checkRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'comprehension_check' ---
    // get current time
    t = comprehension_checkClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *understand_2* updates
    if (t >= 0.0 && understand_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      understand_2.tStart = t;  // (not accounting for frame time here)
      understand_2.frameNStart = frameN;  // exact frame index
      
      understand_2.setAutoDraw(true);
    }
    
    
    // if understand_2 is active this frame...
    if (understand_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_comprehension* updates
    if (t >= 0.0 && key_resp_comprehension.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_comprehension.tStart = t;  // (not accounting for frame time here)
      key_resp_comprehension.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_comprehension.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_comprehension.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_comprehension.clearEvents(); });
    }
    
    // if key_resp_comprehension is active this frame...
    if (key_resp_comprehension.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_comprehension.getKeys({keyList: ['y','n'], waitRelease: false});
      _key_resp_comprehension_allKeys = _key_resp_comprehension_allKeys.concat(theseKeys);
      if (_key_resp_comprehension_allKeys.length > 0) {
        key_resp_comprehension.keys = _key_resp_comprehension_allKeys[_key_resp_comprehension_allKeys.length - 1].name;  // just the last key pressed
        key_resp_comprehension.rt = _key_resp_comprehension_allKeys[_key_resp_comprehension_allKeys.length - 1].rt;
        key_resp_comprehension.duration = _key_resp_comprehension_allKeys[_key_resp_comprehension_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    comprehension_checkComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function comprehension_checkRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'comprehension_check' ---
    comprehension_checkComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('comprehension_check.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_comprehension.corr, level);
    }
    psychoJS.experiment.addData('key_resp_comprehension.keys', key_resp_comprehension.keys);
    if (typeof key_resp_comprehension.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_comprehension.rt', key_resp_comprehension.rt);
        psychoJS.experiment.addData('key_resp_comprehension.duration', key_resp_comprehension.duration);
        routineTimer.reset();
        }
    
    key_resp_comprehension.stop();
    // Run 'End Routine' code from comprehension_code
    if ((key_resp_comprehension.keys === "y")) {
        comprehension_loop.finished = true;
    }
    
    // the Routine "comprehension_check" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var begin_formalMaxDurationReached;
var begin_formalMaxDuration;
var begin_formalComponents;
function begin_formalRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'begin_formal' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    begin_formalClock.reset();
    routineTimer.reset();
    begin_formalMaxDurationReached = false;
    // update component parameters for each repeat
    // reset bart_formal_begin to account for continued clicks & clear times on/off
    bart_formal_begin.reset()
    psychoJS.experiment.addData('begin_formal.started', globalClock.getTime());
    begin_formalMaxDuration = null
    // keep track of which components have finished
    begin_formalComponents = [];
    begin_formalComponents.push(formal_begain);
    begin_formalComponents.push(bart_formal_begin);
    
    begin_formalComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function begin_formalRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'begin_formal' ---
    // get current time
    t = begin_formalClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *formal_begain* updates
    if (t >= 0.0 && formal_begain.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      formal_begain.tStart = t;  // (not accounting for frame time here)
      formal_begain.frameNStart = frameN;  // exact frame index
      
      formal_begain.setAutoDraw(true);
    }
    
    
    // if formal_begain is active this frame...
    if (formal_begain.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *bart_formal_begin* updates
    if (t >= 0 && bart_formal_begin.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bart_formal_begin.tStart = t;  // (not accounting for frame time here)
      bart_formal_begin.frameNStart = frameN;  // exact frame index
      
      bart_formal_begin.setAutoDraw(true);
    }
    
    
    // if bart_formal_begin is active this frame...
    if (bart_formal_begin.status === PsychoJS.Status.STARTED) {
    }
    
    if (bart_formal_begin.status === PsychoJS.Status.STARTED) {
      // check whether bart_formal_begin has been pressed
      if (bart_formal_begin.isClicked) {
        if (!bart_formal_begin.wasClicked) {
          // store time of first click
          bart_formal_begin.timesOn.push(bart_formal_begin.clock.getTime());
          // store time clicked until
          bart_formal_begin.timesOff.push(bart_formal_begin.clock.getTime());
        } else {
          // update time clicked until;
          bart_formal_begin.timesOff[bart_formal_begin.timesOff.length - 1] = bart_formal_begin.clock.getTime();
        }
        if (!bart_formal_begin.wasClicked) {
          // end routine when bart_formal_begin is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("mark_formal_begin", "Bart\u6b63\u5f0f\u5b9e\u9a8c\u6570\u636emark");
        }
        // if bart_formal_begin is still clicked next frame, it is not a new click
        bart_formal_begin.wasClicked = true;
      } else {
        // if bart_formal_begin is clicked next frame, it is a new click
        bart_formal_begin.wasClicked = false;
      }
    } else {
      // keep clock at 0 if bart_formal_begin hasn't started / has finished
      bart_formal_begin.clock.reset();
      // if bart_formal_begin is clicked next frame, it is a new click
      bart_formal_begin.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    begin_formalComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function begin_formalRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'begin_formal' ---
    begin_formalComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('begin_formal.stopped', globalClock.getTime());
    psychoJS.experiment.addData('bart_formal_begin.numClicks', bart_formal_begin.numClicks);
    psychoJS.experiment.addData('bart_formal_begin.timesOn', bart_formal_begin.timesOn);
    psychoJS.experiment.addData('bart_formal_begin.timesOff', bart_formal_begin.timesOff);
    // the Routine "begin_formal" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var resetmoneyMaxDurationReached;
var resetmoneyMaxDuration;
var resetmoneyComponents;
function resetmoneyRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'resetmoney' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    resetmoneyClock.reset();
    routineTimer.reset();
    resetmoneyMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_2
    bankedEarnings = 0;
    
    psychoJS.experiment.addData('resetmoney.started', globalClock.getTime());
    resetmoneyMaxDuration = null
    // keep track of which components have finished
    resetmoneyComponents = [];
    
    resetmoneyComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function resetmoneyRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'resetmoney' ---
    // get current time
    t = resetmoneyClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    resetmoneyComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function resetmoneyRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'resetmoney' ---
    resetmoneyComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('resetmoney.stopped', globalClock.getTime());
    // the Routine "resetmoney" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trialMaxDurationReached;
var _bankButton_allKeys;
var trialMaxDuration;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    trialClock.reset();
    routineTimer.reset();
    trialMaxDurationReached = false;
    // update component parameters for each repeat
    bankButton.keys = undefined;
    bankButton.rt = undefined;
    _bankButton_allKeys = [];
    // Run 'Begin Routine' code from updateEarnings
    thisBalloonEarnings = ((pump.thisN + 1) * 0.05);
    balloonEarnings = ("\u5f53\u524d\u6c14\u7403\u5956\u91d1:\n$" + util.round(thisBalloonEarnings, 2).toString());
    bankedText = ("\u4f60\u5df2\u5b58\u5165\u7684\u5956\u91d1:\n$" + util.round(bankedEarnings, 2).toString());
    
    // Run 'Begin Routine' code from setBalloonSize
    balloonBody.setPos([0, ((balloonSize / 2) - 0.5)]);
    balloonBody.setSize(balloonSize);
    
    trialcount.setText(((("\u6c14\u7403\u7f16\u53f7\uff1a " + (trials.thisN + 1).toString()) + "/") + trials.nTotal.toString()));
    psychoJS.experiment.addData('trial.started', globalClock.getTime());
    trialMaxDuration = null
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(background_2);
    trialComponents.push(bankButton);
    trialComponents.push(reminder);
    trialComponents.push(balloonValTxt);
    trialComponents.push(bankedTxt);
    trialComponents.push(balloonBody);
    trialComponents.push(trialcount);
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *background_2* updates
    if (t >= 0.0 && background_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      background_2.tStart = t;  // (not accounting for frame time here)
      background_2.frameNStart = frameN;  // exact frame index
      
      background_2.setAutoDraw(true);
    }
    
    
    // if background_2 is active this frame...
    if (background_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *bankButton* updates
    if (t >= 0.0 && bankButton.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bankButton.tStart = t;  // (not accounting for frame time here)
      bankButton.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { bankButton.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { bankButton.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { bankButton.clearEvents(); });
    }
    
    // if bankButton is active this frame...
    if (bankButton.status === PsychoJS.Status.STARTED) {
      let theseKeys = bankButton.getKeys({keyList: ['return','space'], waitRelease: false});
      _bankButton_allKeys = _bankButton_allKeys.concat(theseKeys);
      if (_bankButton_allKeys.length > 0) {
        bankButton.keys = _bankButton_allKeys[_bankButton_allKeys.length - 1].name;  // just the last key pressed
        bankButton.rt = _bankButton_allKeys[_bankButton_allKeys.length - 1].rt;
        bankButton.duration = _bankButton_allKeys[_bankButton_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *reminder* updates
    if (t >= 0.0 && reminder.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      reminder.tStart = t;  // (not accounting for frame time here)
      reminder.frameNStart = frameN;  // exact frame index
      
      reminder.setAutoDraw(true);
    }
    
    
    // if reminder is active this frame...
    if (reminder.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *balloonValTxt* updates
    if (t >= 0.0 && balloonValTxt.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      balloonValTxt.setText(balloonEarnings, false);
      // keep track of start time/frame for later
      balloonValTxt.tStart = t;  // (not accounting for frame time here)
      balloonValTxt.frameNStart = frameN;  // exact frame index
      
      balloonValTxt.setAutoDraw(true);
    }
    
    
    // if balloonValTxt is active this frame...
    if (balloonValTxt.status === PsychoJS.Status.STARTED) {
      // update params
      balloonValTxt.setText(balloonEarnings, false);
    }
    
    
    // *bankedTxt* updates
    if (t >= 0.0 && bankedTxt.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      bankedTxt.setText(bankedText, false);
      // keep track of start time/frame for later
      bankedTxt.tStart = t;  // (not accounting for frame time here)
      bankedTxt.frameNStart = frameN;  // exact frame index
      
      bankedTxt.setAutoDraw(true);
    }
    
    
    // if bankedTxt is active this frame...
    if (bankedTxt.status === PsychoJS.Status.STARTED) {
      // update params
      bankedTxt.setText(bankedText, false);
    }
    
    // Run 'Each Frame' code from setBalloonSize
    balloonSize = (0.1 + ((pump.thisN + 1) * 0.015));
    
    
    // *balloonBody* updates
    if (t >= 0.0 && balloonBody.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      balloonBody.setPos([0, ((balloonSize / 2) - 0.5)], false);
      balloonBody.setSize(balloonSize, false);
      // keep track of start time/frame for later
      balloonBody.tStart = t;  // (not accounting for frame time here)
      balloonBody.frameNStart = frameN;  // exact frame index
      
      balloonBody.setAutoDraw(true);
    }
    
    
    // if balloonBody is active this frame...
    if (balloonBody.status === PsychoJS.Status.STARTED) {
      // update params
      balloonBody.setPos([0, ((balloonSize / 2) - 0.5)], false);
      balloonBody.setSize(balloonSize, false);
    }
    
    
    // *trialcount* updates
    if (t >= 0.0 && trialcount.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialcount.tStart = t;  // (not accounting for frame time here)
      trialcount.frameNStart = frameN;  // exact frame index
      
      trialcount.setAutoDraw(true);
    }
    
    
    // if trialcount is active this frame...
    if (trialcount.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('trial.stopped', globalClock.getTime());
    bankButton.stop();
    // Run 'End Routine' code from updateEarnings
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if (_pj.in_es6("return", bankButton.keys)) {
        pump.finished = true;
        popped = false;
    } else {
        if (((pump.thisN + 1) === maxPumps)) {
            popped = true;
        } else {
            popped = false;
        }
        if (popped) {
            thisBalloonEarnings = 0.0;
            lastBalloonEarnings = 0.0;
        } else {
            lastBalloonEarnings = thisBalloonEarnings;
        }
    }
    
    // Run 'End Routine' code from setBalloonSize
    trials.addData("nPumps", (pump.thisN + 1));
    trials.addData("size", balloonSize);
    trials.addData("earnings", thisBalloonEarnings);
    trials.addData("popped", popped);
    trials.addData("maxPumps", maxPumps);
    
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var feedbackMaxDurationReached;
var feedbackMaxDuration;
var feedbackComponents;
function feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    feedbackClock.reset(routineTimer.getTime());
    routineTimer.add(1.500000);
    feedbackMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from checkPopped
    lastBalloonEarnings = thisBalloonEarnings;
    bankedEarnings += thisBalloonEarnings;
    balloonEarnings = ("\u5f53\u524d\u6c14\u7403\u5956\u91d1:\n$" + util.round(thisBalloonEarnings, 2).toString());
    bankedText = ("\u4f60\u5df2\u5b58\u5165\u7684\u5956\u91d1:\n$" + util.round(bankedEarnings, 2).toString());
    if ((popped === true)) {
        feedbackText = "\u54ce\u5440\uff01\u8fd9\u4e2a\u6c14\u7403\u7206\u70b8\u4e86\uff0c\u5956\u91d1\u5f52\u96f6\uff01";
    } else {
        feedbackText = ("\u4f60\u5df2\u6210\u529f\u5b58\u5165 $" + util.round(lastBalloonEarnings, 2).toString());
    }
    
    feedbacktxt.setText(feedbackText);
    trialcount_2.setText(((("\u6c14\u7403\u7f16\u53f7\uff1a " + (trials.thisN + 1).toString()) + "/") + trials.nTotal.toString()));
    psychoJS.experiment.addData('feedback.started', globalClock.getTime());
    feedbackMaxDuration = null
    // keep track of which components have finished
    feedbackComponents = [];
    feedbackComponents.push(background_3);
    feedbackComponents.push(feedbacktxt);
    feedbackComponents.push(bankedTxt_2);
    feedbackComponents.push(balloonValTxt_2);
    feedbackComponents.push(reminder_2);
    feedbackComponents.push(trialcount_2);
    
    feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function feedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback' ---
    // get current time
    t = feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *background_3* updates
    if (t >= 0.0 && background_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      background_3.tStart = t;  // (not accounting for frame time here)
      background_3.frameNStart = frameN;  // exact frame index
      
      background_3.setAutoDraw(true);
    }
    
    
    // if background_3 is active this frame...
    if (background_3.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (background_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      background_3.tStop = t;  // not accounting for scr refresh
      background_3.frameNStop = frameN;  // exact frame index
      // update status
      background_3.status = PsychoJS.Status.FINISHED;
      background_3.setAutoDraw(false);
    }
    
    
    // *feedbacktxt* updates
    if (t >= 0.0 && feedbacktxt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedbacktxt.tStart = t;  // (not accounting for frame time here)
      feedbacktxt.frameNStart = frameN;  // exact frame index
      
      feedbacktxt.setAutoDraw(true);
    }
    
    
    // if feedbacktxt is active this frame...
    if (feedbacktxt.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (feedbacktxt.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      feedbacktxt.tStop = t;  // not accounting for scr refresh
      feedbacktxt.frameNStop = frameN;  // exact frame index
      // update status
      feedbacktxt.status = PsychoJS.Status.FINISHED;
      feedbacktxt.setAutoDraw(false);
    }
    
    
    // *bankedTxt_2* updates
    if (t >= 0.0 && bankedTxt_2.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      bankedTxt_2.setText(bankedText, false);
      // keep track of start time/frame for later
      bankedTxt_2.tStart = t;  // (not accounting for frame time here)
      bankedTxt_2.frameNStart = frameN;  // exact frame index
      
      bankedTxt_2.setAutoDraw(true);
    }
    
    
    // if bankedTxt_2 is active this frame...
    if (bankedTxt_2.status === PsychoJS.Status.STARTED) {
      // update params
      bankedTxt_2.setText(bankedText, false);
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (bankedTxt_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      bankedTxt_2.tStop = t;  // not accounting for scr refresh
      bankedTxt_2.frameNStop = frameN;  // exact frame index
      // update status
      bankedTxt_2.status = PsychoJS.Status.FINISHED;
      bankedTxt_2.setAutoDraw(false);
    }
    
    
    // *balloonValTxt_2* updates
    if (t >= 0.0 && balloonValTxt_2.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      balloonValTxt_2.setText(balloonEarnings, false);
      // keep track of start time/frame for later
      balloonValTxt_2.tStart = t;  // (not accounting for frame time here)
      balloonValTxt_2.frameNStart = frameN;  // exact frame index
      
      balloonValTxt_2.setAutoDraw(true);
    }
    
    
    // if balloonValTxt_2 is active this frame...
    if (balloonValTxt_2.status === PsychoJS.Status.STARTED) {
      // update params
      balloonValTxt_2.setText(balloonEarnings, false);
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (balloonValTxt_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      balloonValTxt_2.tStop = t;  // not accounting for scr refresh
      balloonValTxt_2.frameNStop = frameN;  // exact frame index
      // update status
      balloonValTxt_2.status = PsychoJS.Status.FINISHED;
      balloonValTxt_2.setAutoDraw(false);
    }
    
    
    // *reminder_2* updates
    if (t >= 0.0 && reminder_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      reminder_2.tStart = t;  // (not accounting for frame time here)
      reminder_2.frameNStart = frameN;  // exact frame index
      
      reminder_2.setAutoDraw(true);
    }
    
    
    // if reminder_2 is active this frame...
    if (reminder_2.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (reminder_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      reminder_2.tStop = t;  // not accounting for scr refresh
      reminder_2.frameNStop = frameN;  // exact frame index
      // update status
      reminder_2.status = PsychoJS.Status.FINISHED;
      reminder_2.setAutoDraw(false);
    }
    
    
    // *trialcount_2* updates
    if (t >= 0.0 && trialcount_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialcount_2.tStart = t;  // (not accounting for frame time here)
      trialcount_2.frameNStart = frameN;  // exact frame index
      
      trialcount_2.setAutoDraw(true);
    }
    
    
    // if trialcount_2 is active this frame...
    if (trialcount_2.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (trialcount_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      trialcount_2.tStop = t;  // not accounting for scr refresh
      trialcount_2.frameNStop = frameN;  // exact frame index
      // update status
      trialcount_2.status = PsychoJS.Status.FINISHED;
      trialcount_2.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback' ---
    feedbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('feedback.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (feedbackMaxDurationReached) {
        feedbackClock.add(feedbackMaxDuration);
    } else {
        feedbackClock.add(1.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var finalScoreMaxDurationReached;
var finalScoreMaxDuration;
var finalScoreComponents;
function finalScoreRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'finalScore' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    finalScoreClock.reset();
    routineTimer.reset();
    finalScoreMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from finalScoreCode
    scoreText = `太棒了！你累计获得了
    $${bankedEarnings}`
    ;
    
    scoremsg.setText(scoreText);
    // reset finished_bart to account for continued clicks & clear times on/off
    finished_bart.reset()
    psychoJS.experiment.addData('finalScore.started', globalClock.getTime());
    finalScoreMaxDuration = null
    // keep track of which components have finished
    finalScoreComponents = [];
    finalScoreComponents.push(background_4);
    finalScoreComponents.push(scoremsg);
    finalScoreComponents.push(finished_bart);
    
    finalScoreComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function finalScoreRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'finalScore' ---
    // get current time
    t = finalScoreClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *background_4* updates
    if (t >= 0.0 && background_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      background_4.tStart = t;  // (not accounting for frame time here)
      background_4.frameNStart = frameN;  // exact frame index
      
      background_4.setAutoDraw(true);
    }
    
    
    // if background_4 is active this frame...
    if (background_4.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *scoremsg* updates
    if (t >= 0.0 && scoremsg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      scoremsg.tStart = t;  // (not accounting for frame time here)
      scoremsg.frameNStart = frameN;  // exact frame index
      
      scoremsg.setAutoDraw(true);
    }
    
    
    // if scoremsg is active this frame...
    if (scoremsg.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *finished_bart* updates
    if (t >= 0 && finished_bart.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      finished_bart.tStart = t;  // (not accounting for frame time here)
      finished_bart.frameNStart = frameN;  // exact frame index
      
      finished_bart.setAutoDraw(true);
    }
    
    
    // if finished_bart is active this frame...
    if (finished_bart.status === PsychoJS.Status.STARTED) {
    }
    
    if (finished_bart.status === PsychoJS.Status.STARTED) {
      // check whether finished_bart has been pressed
      if (finished_bart.isClicked) {
        if (!finished_bart.wasClicked) {
          // store time of first click
          finished_bart.timesOn.push(finished_bart.clock.getTime());
          // store time clicked until
          finished_bart.timesOff.push(finished_bart.clock.getTime());
        } else {
          // update time clicked until;
          finished_bart.timesOff[finished_bart.timesOff.length - 1] = finished_bart.clock.getTime();
        }
        if (!finished_bart.wasClicked) {
          // end routine when finished_bart is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("mark_formal_finish", "Bart\u6570\u636e\u7ed3\u675fmark");
        }
        // if finished_bart is still clicked next frame, it is not a new click
        finished_bart.wasClicked = true;
      } else {
        // if finished_bart is clicked next frame, it is a new click
        finished_bart.wasClicked = false;
      }
    } else {
      // keep clock at 0 if finished_bart hasn't started / has finished
      finished_bart.clock.reset();
      // if finished_bart is clicked next frame, it is a new click
      finished_bart.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    finalScoreComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function finalScoreRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'finalScore' ---
    finalScoreComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('finalScore.stopped', globalClock.getTime());
    psychoJS.experiment.addData('finished_bart.numClicks', finished_bart.numClicks);
    psychoJS.experiment.addData('finished_bart.timesOn', finished_bart.timesOn);
    psychoJS.experiment.addData('finished_bart.timesOff', finished_bart.timesOff);
    // the Routine "finalScore" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instruction_fishMaxDurationReached;
var instruction_fishMaxDuration;
var instruction_fishComponents;
function instruction_fishRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction_fish' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instruction_fishClock.reset();
    routineTimer.reset();
    instruction_fishMaxDurationReached = false;
    // update component parameters for each repeat
    // reset start_button_fish to account for continued clicks & clear times on/off
    start_button_fish.reset()
    psychoJS.experiment.addData('instruction_fish.started', globalClock.getTime());
    instruction_fishMaxDuration = null
    // keep track of which components have finished
    instruction_fishComponents = [];
    instruction_fishComponents.push(background_fish);
    instruction_fishComponents.push(instructions_txt_fish);
    instruction_fishComponents.push(start_button_fish);
    
    instruction_fishComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instruction_fishRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction_fish' ---
    // get current time
    t = instruction_fishClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *background_fish* updates
    if (t >= 0.0 && background_fish.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      background_fish.tStart = t;  // (not accounting for frame time here)
      background_fish.frameNStart = frameN;  // exact frame index
      
      background_fish.setAutoDraw(true);
    }
    
    
    // if background_fish is active this frame...
    if (background_fish.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *instructions_txt_fish* updates
    if (t >= 0.0 && instructions_txt_fish.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_txt_fish.tStart = t;  // (not accounting for frame time here)
      instructions_txt_fish.frameNStart = frameN;  // exact frame index
      
      instructions_txt_fish.setAutoDraw(true);
    }
    
    
    // if instructions_txt_fish is active this frame...
    if (instructions_txt_fish.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *start_button_fish* updates
    if (t >= 0 && start_button_fish.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_button_fish.tStart = t;  // (not accounting for frame time here)
      start_button_fish.frameNStart = frameN;  // exact frame index
      
      start_button_fish.setAutoDraw(true);
    }
    
    
    // if start_button_fish is active this frame...
    if (start_button_fish.status === PsychoJS.Status.STARTED) {
    }
    
    if (start_button_fish.status === PsychoJS.Status.STARTED) {
      // check whether start_button_fish has been pressed
      if (start_button_fish.isClicked) {
        if (!start_button_fish.wasClicked) {
          // store time of first click
          start_button_fish.timesOn.push(start_button_fish.clock.getTime());
          // store time clicked until
          start_button_fish.timesOff.push(start_button_fish.clock.getTime());
        } else {
          // update time clicked until;
          start_button_fish.timesOff[start_button_fish.timesOff.length - 1] = start_button_fish.clock.getTime();
        }
        if (!start_button_fish.wasClicked) {
          // end routine when start_button_fish is clicked
          continueRoutine = false;
          
        }
        // if start_button_fish is still clicked next frame, it is not a new click
        start_button_fish.wasClicked = true;
      } else {
        // if start_button_fish is clicked next frame, it is a new click
        start_button_fish.wasClicked = false;
      }
    } else {
      // keep clock at 0 if start_button_fish hasn't started / has finished
      start_button_fish.clock.reset();
      // if start_button_fish is clicked next frame, it is a new click
      start_button_fish.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instruction_fishComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instruction_fishRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction_fish' ---
    instruction_fishComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instruction_fish.stopped', globalClock.getTime());
    psychoJS.experiment.addData('start_button_fish.numClicks', start_button_fish.numClicks);
    psychoJS.experiment.addData('start_button_fish.timesOn', start_button_fish.timesOn);
    psychoJS.experiment.addData('start_button_fish.timesOff', start_button_fish.timesOff);
    // the Routine "instruction_fish" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_fishMaxDurationReached;
var gotValidClick;
var fish_remaining;
var fish_trial_text;
var trial_fishMaxDuration;
var trial_fishComponents;
function trial_fishRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_fish' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    trial_fishClock.reset();
    routineTimer.reset();
    trial_fishMaxDurationReached = false;
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse
    // current position of the mouse:
    mouse.x = [];
    mouse.y = [];
    mouse.leftButton = [];
    mouse.midButton = [];
    mouse.rightButton = [];
    mouse.time = [];
    mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    // Run 'Begin Routine' code from control_wins
    if ((lake1_wins.length === 0)) {
        lake1_wins = [0, 0, 0, 0, 0, 0, 0, 1, 1, 1];
    }
    if ((lake2_wins.length === 0)) {
        lake2_wins = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1];
    }
    if ((lake3_wins.length === 0)) {
        lake3_wins = [0, 0, 1, 1, 1, 1, 1, 1, 1, 1];
    }
    util.shuffle(lake1_wins);
    util.shuffle(lake2_wins);
    util.shuffle(lake3_wins);
    rod.setPos([(- 500), (- 500)]);
    
    fishcount.setText((("\u5df2\u9493\u9c7c\uff1a" + nfish.toString()) + " \u6761"));
    // Run 'Begin Routine' code from fishCounter
    fish_trial_index += 1;
    fish_remaining = (100 - fish_trial_index);
    fish_trial_text = (((("\u7b2c " + fish_trial_index.toString()) + " \u6b21\u9493\u9c7c\uff08\u5171 100 \u6b21\uff09\n\u5269\u4f59\u673a\u4f1a\uff1a ") + fish_remaining.toString()) + " \u6b21");
    
    fishTrialDisplay.setText(fish_trial_text);
    psychoJS.experiment.addData('trial_fish.started', globalClock.getTime());
    trial_fishMaxDuration = null
    // keep track of which components have finished
    trial_fishComponents = [];
    trial_fishComponents.push(instruct_fish);
    trial_fishComponents.push(lake1);
    trial_fishComponents.push(lake2);
    trial_fishComponents.push(lake3);
    trial_fishComponents.push(mouse);
    trial_fishComponents.push(rod);
    trial_fishComponents.push(fishcountim);
    trial_fishComponents.push(fishcount);
    trial_fishComponents.push(fishTrialDisplay);
    
    trial_fishComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
var _mouseXYs;
function trial_fishRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_fish' ---
    // get current time
    t = trial_fishClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruct_fish* updates
    if (t >= 0.0 && instruct_fish.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruct_fish.tStart = t;  // (not accounting for frame time here)
      instruct_fish.frameNStart = frameN;  // exact frame index
      
      instruct_fish.setAutoDraw(true);
    }
    
    
    // if instruct_fish is active this frame...
    if (instruct_fish.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *lake1* updates
    if (t >= 0.0 && lake1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      lake1.tStart = t;  // (not accounting for frame time here)
      lake1.frameNStart = frameN;  // exact frame index
      
      lake1.setAutoDraw(true);
    }
    
    
    // if lake1 is active this frame...
    if (lake1.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *lake2* updates
    if (t >= 0.0 && lake2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      lake2.tStart = t;  // (not accounting for frame time here)
      lake2.frameNStart = frameN;  // exact frame index
      
      lake2.setAutoDraw(true);
    }
    
    
    // if lake2 is active this frame...
    if (lake2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *lake3* updates
    if (t >= 0.0 && lake3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      lake3.tStart = t;  // (not accounting for frame time here)
      lake3.frameNStart = frameN;  // exact frame index
      
      lake3.setAutoDraw(true);
    }
    
    
    // if lake3 is active this frame...
    if (lake3.status === PsychoJS.Status.STARTED) {
    }
    
    // *mouse* updates
    if (t >= 0.0 && mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse.tStart = t;  // (not accounting for frame time here)
      mouse.frameNStart = frameN;  // exact frame index
      
      mouse.status = PsychoJS.Status.STARTED;
      mouse.mouseClock.reset();
      prevButtonState = mouse.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if mouse is active this frame...
    if (mouse.status === PsychoJS.Status.STARTED) {
      _mouseButtons = mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse.clickableObjects = eval([lake1, lake2, lake3])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse.clickableObjects)) {
              mouse.clickableObjects = [mouse.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse.clickableObjects) {
              if (obj.contains(mouse)) {
                  gotValidClick = true;
                  mouse.clicked_name.push(obj.name);
              }
          }
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse.clickableObjects = eval([lake1, lake2, lake3])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse.clickableObjects)) {
              mouse.clickableObjects = [mouse.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse.clickableObjects) {
              if (obj.contains(mouse)) {
                  gotValidClick = true;
                  mouse.clicked_name.push(obj.name);
              }
          }
          if (gotValidClick === true) { 
            _mouseXYs = mouse.getPos();
            mouse.x.push(_mouseXYs[0]);
            mouse.y.push(_mouseXYs[1]);
            mouse.leftButton.push(_mouseButtons[0]);
            mouse.midButton.push(_mouseButtons[1]);
            mouse.rightButton.push(_mouseButtons[2]);
            mouse.time.push(mouse.mouseClock.getTime());
          }
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *rod* updates
    if (t >= 0.0 && rod.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      rod.setPos(mouse.getPos(), false);
      // keep track of start time/frame for later
      rod.tStart = t;  // (not accounting for frame time here)
      rod.frameNStart = frameN;  // exact frame index
      
      rod.setAutoDraw(true);
    }
    
    
    // if rod is active this frame...
    if (rod.status === PsychoJS.Status.STARTED) {
      // update params
      rod.setPos(mouse.getPos(), false);
    }
    
    
    // *fishcountim* updates
    if (t >= 0.0 && fishcountim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fishcountim.tStart = t;  // (not accounting for frame time here)
      fishcountim.frameNStart = frameN;  // exact frame index
      
      fishcountim.setAutoDraw(true);
    }
    
    
    // if fishcountim is active this frame...
    if (fishcountim.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *fishcount* updates
    if (t >= 0.0 && fishcount.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fishcount.tStart = t;  // (not accounting for frame time here)
      fishcount.frameNStart = frameN;  // exact frame index
      
      fishcount.setAutoDraw(true);
    }
    
    
    // if fishcount is active this frame...
    if (fishcount.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *fishTrialDisplay* updates
    if (t >= 0.0 && fishTrialDisplay.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fishTrialDisplay.tStart = t;  // (not accounting for frame time here)
      fishTrialDisplay.frameNStart = frameN;  // exact frame index
      
      fishTrialDisplay.setAutoDraw(true);
    }
    
    
    // if fishTrialDisplay is active this frame...
    if (fishTrialDisplay.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trial_fishComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var outcome;
var fb_txt;
function trial_fishRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_fish' ---
    trial_fishComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('trial_fish.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse.x', mouse.x);
    psychoJS.experiment.addData('mouse.y', mouse.y);
    psychoJS.experiment.addData('mouse.leftButton', mouse.leftButton);
    psychoJS.experiment.addData('mouse.midButton', mouse.midButton);
    psychoJS.experiment.addData('mouse.rightButton', mouse.rightButton);
    psychoJS.experiment.addData('mouse.time', mouse.time);
    psychoJS.experiment.addData('mouse.clicked_name', mouse.clicked_name);
    
    // Run 'End Routine' code from control_wins
    if ((mouse.clicked_name.slice((- 1))[0] === "lake1")) {
        outcome = lake1_wins.slice((- 1))[0];
        lake1_wins.splice((lake1_wins.length - 1), 1);
    }
    if ((mouse.clicked_name.slice((- 1))[0] === "lake2")) {
        outcome = lake2_wins.slice((- 1))[0];
        lake2_wins.splice((lake2_wins.length - 1), 1);
    }
    if ((mouse.clicked_name.slice((- 1))[0] === "lake3")) {
        outcome = lake3_wins.slice((- 1))[0];
        lake3_wins.splice((lake3_wins.length - 1), 1);
    }
    if ((outcome === 1)) {
        fb_txt = "\u4f60\u9493\u5230\u4e86\u4e00\u6761\u9c7c\uff01";
    } else {
        fb_txt = "\u4f60\u6ca1\u6709\u9493\u5230\u9c7c\u3002";
    }
    psychoJS.experiment.addData("outcome", outcome);
    nfish += outcome;
    psychoJS.experiment.addData("nfish", nfish);
    
    // the Routine "trial_fish" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var feedback_fishMaxDurationReached;
var fish_images;
var fish_im;
var feedback_fishMaxDuration;
var feedback_fishComponents;
function feedback_fishRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback_fish' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    feedback_fishClock.reset(routineTimer.getTime());
    routineTimer.add(1.000000);
    feedback_fishMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_fish
    if ((outcome === 1)) {
        fish_images = ["images/fish2.png", "images/fish3.png", "images/fish4.png"];
        util.shuffle(fish_images);
        fish_im = fish_images.slice((- 1))[0];
    } else {
        fish_im = "images/nofish.png";
    }
    psychoJS.experiment.addData("fish_im", fish_im);
    
    fb_txtbox.setText(fb_txt);
    fb_image.setImage(fish_im);
    fishcount_2.setText((("\u5df2\u9493\u9c7c\uff1a " + nfish.toString()) + " \u6761"));
    psychoJS.experiment.addData('feedback_fish.started', globalClock.getTime());
    feedback_fishMaxDuration = null
    // keep track of which components have finished
    feedback_fishComponents = [];
    feedback_fishComponents.push(fb_txtbox);
    feedback_fishComponents.push(fb_image);
    feedback_fishComponents.push(fishcountim_2);
    feedback_fishComponents.push(fishcount_2);
    
    feedback_fishComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function feedback_fishRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback_fish' ---
    // get current time
    t = feedback_fishClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fb_txtbox* updates
    if (t >= 0.0 && fb_txtbox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fb_txtbox.tStart = t;  // (not accounting for frame time here)
      fb_txtbox.frameNStart = frameN;  // exact frame index
      
      fb_txtbox.setAutoDraw(true);
    }
    
    
    // if fb_txtbox is active this frame...
    if (fb_txtbox.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fb_txtbox.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      fb_txtbox.tStop = t;  // not accounting for scr refresh
      fb_txtbox.frameNStop = frameN;  // exact frame index
      // update status
      fb_txtbox.status = PsychoJS.Status.FINISHED;
      fb_txtbox.setAutoDraw(false);
    }
    
    
    // *fb_image* updates
    if (t >= 0.0 && fb_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fb_image.tStart = t;  // (not accounting for frame time here)
      fb_image.frameNStart = frameN;  // exact frame index
      
      fb_image.setAutoDraw(true);
    }
    
    
    // if fb_image is active this frame...
    if (fb_image.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fb_image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      fb_image.tStop = t;  // not accounting for scr refresh
      fb_image.frameNStop = frameN;  // exact frame index
      // update status
      fb_image.status = PsychoJS.Status.FINISHED;
      fb_image.setAutoDraw(false);
    }
    
    
    // *fishcountim_2* updates
    if (t >= 0.0 && fishcountim_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fishcountim_2.tStart = t;  // (not accounting for frame time here)
      fishcountim_2.frameNStart = frameN;  // exact frame index
      
      fishcountim_2.setAutoDraw(true);
    }
    
    
    // if fishcountim_2 is active this frame...
    if (fishcountim_2.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fishcountim_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      fishcountim_2.tStop = t;  // not accounting for scr refresh
      fishcountim_2.frameNStop = frameN;  // exact frame index
      // update status
      fishcountim_2.status = PsychoJS.Status.FINISHED;
      fishcountim_2.setAutoDraw(false);
    }
    
    
    // *fishcount_2* updates
    if (t >= 0.0 && fishcount_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fishcount_2.tStart = t;  // (not accounting for frame time here)
      fishcount_2.frameNStart = frameN;  // exact frame index
      
      fishcount_2.setAutoDraw(true);
    }
    
    
    // if fishcount_2 is active this frame...
    if (fishcount_2.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fishcount_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      fishcount_2.tStop = t;  // not accounting for scr refresh
      fishcount_2.frameNStop = frameN;  // exact frame index
      // update status
      fishcount_2.status = PsychoJS.Status.FINISHED;
      fishcount_2.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    feedback_fishComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedback_fishRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback_fish' ---
    feedback_fishComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('feedback_fish.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (feedback_fishMaxDurationReached) {
        feedback_fishClock.add(feedback_fishMaxDuration);
    } else {
        feedback_fishClock.add(1.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var end_fishingMaxDurationReached;
var end_fishingMaxDuration;
var end_fishingComponents;
function end_fishingRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end_fishing' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    end_fishingClock.reset();
    routineTimer.reset();
    end_fishingMaxDurationReached = false;
    // update component parameters for each repeat
    // reset exit_button to account for continued clicks & clear times on/off
    exit_button.reset()
    textbox_end.setText((("\u6e38\u620f\u7ed3\u675f\uff01\n\u4f60\u4e00\u5171\u9493\u5230  " + nfish.toString()) + "  \u6761\u9c7c\uff01\n\u8bf7\u52a1\u5fc5\u70b9\u51fb\u4e0b\u65b9\"\u9000\u51fa\"\u6309\u94ae\u7ed3\u675f\u5b9e\u9a8c."));
    psychoJS.experiment.addData('end_fishing.started', globalClock.getTime());
    end_fishingMaxDuration = null
    // keep track of which components have finished
    end_fishingComponents = [];
    end_fishingComponents.push(background_7);
    end_fishingComponents.push(exit_button);
    end_fishingComponents.push(textbox_end);
    end_fishingComponents.push(text_hint);
    
    end_fishingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function end_fishingRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end_fishing' ---
    // get current time
    t = end_fishingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *background_7* updates
    if (t >= 0.0 && background_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      background_7.tStart = t;  // (not accounting for frame time here)
      background_7.frameNStart = frameN;  // exact frame index
      
      background_7.setAutoDraw(true);
    }
    
    
    // if background_7 is active this frame...
    if (background_7.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *exit_button* updates
    if (t >= 0 && exit_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exit_button.tStart = t;  // (not accounting for frame time here)
      exit_button.frameNStart = frameN;  // exact frame index
      
      exit_button.setAutoDraw(true);
    }
    
    
    // if exit_button is active this frame...
    if (exit_button.status === PsychoJS.Status.STARTED) {
    }
    
    if (exit_button.status === PsychoJS.Status.STARTED) {
      // check whether exit_button has been pressed
      if (exit_button.isClicked) {
        if (!exit_button.wasClicked) {
          // store time of first click
          exit_button.timesOn.push(exit_button.clock.getTime());
          // store time clicked until
          exit_button.timesOff.push(exit_button.clock.getTime());
        } else {
          // update time clicked until;
          exit_button.timesOff[exit_button.timesOff.length - 1] = exit_button.clock.getTime();
        }
        if (!exit_button.wasClicked) {
          // end routine when exit_button is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("quit", "\u9493\u9c7c\u6e38\u620f\u7ed3\u675f");
        }
        // if exit_button is still clicked next frame, it is not a new click
        exit_button.wasClicked = true;
      } else {
        // if exit_button is clicked next frame, it is a new click
        exit_button.wasClicked = false;
      }
    } else {
      // keep clock at 0 if exit_button hasn't started / has finished
      exit_button.clock.reset();
      // if exit_button is clicked next frame, it is a new click
      exit_button.wasClicked = false;
    }
    
    // *textbox_end* updates
    if (t >= 0.0 && textbox_end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_end.tStart = t;  // (not accounting for frame time here)
      textbox_end.frameNStart = frameN;  // exact frame index
      
      textbox_end.setAutoDraw(true);
    }
    
    
    // if textbox_end is active this frame...
    if (textbox_end.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *text_hint* updates
    if (t >= 0.0 && text_hint.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_hint.tStart = t;  // (not accounting for frame time here)
      text_hint.frameNStart = frameN;  // exact frame index
      
      text_hint.setAutoDraw(true);
    }
    
    
    // if text_hint is active this frame...
    if (text_hint.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    end_fishingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function end_fishingRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end_fishing' ---
    end_fishingComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('end_fishing.stopped', globalClock.getTime());
    psychoJS.experiment.addData('exit_button.numClicks', exit_button.numClicks);
    psychoJS.experiment.addData('exit_button.timesOn', exit_button.timesOn);
    psychoJS.experiment.addData('exit_button.timesOff', exit_button.timesOff);
    // the Routine "end_fishing" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var datauploadMaxDurationReached;
var datauploadMaxDuration;
var datauploadComponents;
function datauploadRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'dataupload' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    datauploadClock.reset();
    routineTimer.reset();
    datauploadMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('dataupload.started', globalClock.getTime());
    datauploadMaxDuration = null
    // keep track of which components have finished
    datauploadComponents = [];
    
    datauploadComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function datauploadRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'dataupload' ---
    // get current time
    t = datauploadClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    datauploadComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function datauploadRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'dataupload' ---
    datauploadComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('dataupload.stopped', globalClock.getTime());
    // the Routine "dataupload" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  // ------------------------------------------------------
  // Disable downloading results to browser
  // ------------------------------------------------------
  psychoJS._saveResults = 0;
  
  
  // ------------------------------------------------------
  // Generate filename for results
  // ------------------------------------------------------
  let filename = psychoJS._experiment.experimentName + '_' + psychoJS._experiment._datetime + '.csv';
  
  
  // ------------------------------------------------------
  // Extract data object from experiment
  // ------------------------------------------------------
  let dataObj = psychoJS._experiment._trialsData;
  
  
  // ------------------------------------------------------
  // step1:Clean unwanted fields (黑名单删除)
  // ------------------------------------------------------
  const DROP_KEYS = [
      '请等待30秒，下方灰色进度条加载完成后', // 提示语 1
      '如果加载失败',                 // 提示语 2
      '再点击“OK"开始实验',
      'date',                          // 实验日期
      'expName',                       // 实验名
      'psychopyVersion',               // PsychoPy 版本
      'OS'                             // 系统信息
  ];
  
  
  let strippedData = dataObj.map(trial => {
      let copy = {...trial};          // 复制一份 trial 数据
      DROP_KEYS.forEach(k => delete copy[k]); // 删除不需要的键
      return copy;
  });
  
  
  // ------------------------------------------------------
  // Step 2: 定义过滤函数（删除白色初始化行）
  // ------------------------------------------------------
  function isValidTrial(trial) {
      let vals = Object.values(trial).filter(v => v !== undefined && v !== null);
  
      if (vals.length === 0) return false; // 空行直接丢掉
  
      let strVals = vals.map(v => v.toString().trim());
  
      // 规则 A: 如果全是 0 / 空 / [] / NaN → 初始化行
      let allEmpty = strVals.every(v =>
          v === "0" || v === "" || v === "[]" || v.toLowerCase() === "nan"
      );
      if (allEmpty) return false;
  
      // 规则 B: 有有效按键
      if (trial["key_resp_13.keys"] && trial["key_resp_13.keys"] !== "") return true;
  
      // 规则 C: 有反应时或持续时间
      if (trial["key_resp_13.rt"] && Number(trial["key_resp_13.rt"]) > 0) return true;
      if (trial["key_resp_13.duration"] && Number(trial["key_resp_13.duration"]) > 0) return true;
  
      // 规则 D: 有文字（题干/选项/TRUE/FALSE）
      let hasText = strVals.some(v =>
          (v.length > 1 && isNaN(v) && v !== "[]" && v !== "space")
      );
      if (hasText) return true;
  
      return false; // 其他情况删除
  }
  
  
  // ------------------------------------------------------
  // Step 3: 应用过滤（前110行不过滤，保留原样）
  // ------------------------------------------------------
  let cleanDataObj = strippedData.map((trial, idx) => {
      if (idx < 110) {
          return trial; // 前110行原样保留
      } else {
          return isValidTrial(trial) ? trial : null; // 之后的行才应用过滤
      }
  }).filter(trial => trial !== null);
  
  
  // ------------------------------------------------------
  // Convert cleaned data object to CSV
  // ------------------------------------------------------
  let data = [Object.keys(cleanDataObj[0])].concat(cleanDataObj).map(it => {
      return Object.values(it).toString();
  }).join('\n');
  
  
  
  
  // ------------------------------------------------------
  // Send data to OSF via DataPipe
  // ------------------------------------------------------
  console.log('Saving data...');
  fetch('https://pipe.jspsych.org/api/data', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          Accept: '*/*',
      },
      body: JSON.stringify({
          experimentID: "izYFomugF9XS",  // 请在此处填写你自己的 DataPipe Experiment ID
          filename:filename,
          data: data,
      }),
  }).then(response => response.json()).then(data => {
      //log response and force experiment end
      console.log(data);
      quitPsychoJS();
  })
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
