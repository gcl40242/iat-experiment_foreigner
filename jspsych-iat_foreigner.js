//1.ウェルカムメッセージ
var welcome_block = {
  type: 'html-keyboard-response',
  stimulus: 
  '<p>潜在連合テスト(IAT)へようこそ。' +
  'これからIATを受けていただきます。<br>'+
  'IATとは、画面に表示される項目を、できるだけ素早く、適切なカテゴリーに分類するテストです。</p><p>'+
  'いずれかのキーを押して進んでください。</p>',
  post_trial_gap: 1500
};

//2.カテゴリー説明
var category_block = {
  type: 'html-keyboard-response',
  stimulus: 
  '<p>“eキー”と“iキー”を使用して、画面に表示される項目を、できるだけ素早く各カテゴリーに分類してください。<br>' +
  '以下は、3つのカテゴリーと、各カテゴリーに属する項目です。:</p><br>' +
  '<strong>良い</strong>:<br>' + 
  '好感の持てる、格好の良い、素晴らしい、美しい<br><br>' + 
  '<strong>悪い</strong>:<br>' + 
  '嫌悪感のある、見苦しい、卑しい、汚らしい<br><br>' +
  '<strong>外国人</strong>:<br>' + 
  'アメリカ人、中国人、韓国人、ベトナム人<br><br>',
  post_trial_gap: 1500
};

//3.練習試行の教示文
var instructions_block1 = {
  type: 'html-keyboard-response',
  stimulus: "<div style='position: absolute; top: 18%; left: 20%'><p>eキーを押す:<br><strong>悪い</strong></p></div>" +
  "<div style='position: absolute; top: 18%; right: 20%'><p>iキーを押す:<br><strong>良い</strong></p></div>" +
  "<div style='position: relative; top: 42%; margin-left: auto; margin-right: auto'><br><br><p>"+
  "悪いカテゴリーの項目が表示されたら、左手の指で<strong>eキー</strong>を、<br>" +
  "良いカテゴリーの項目が表示されたら、右手の指で<strong>iキー</strong>を押してください。<br>"+
  "項目は一度しか表示されません。</p><p>" + 
  "分類を間違えた場合、赤色でXマークが表示されます。正しいキーを押し直して、課題を続行してください。</p><p> " +
  "準備ができたら、いずれかのキーを押して開始してください。</p></div>",
};

//4.練習試行
var trial_block1 = {
  timeline: [
    {
      type: 'iat-html',
      stimulus: jsPsych.timelineVariable('stimulus'),
      stim_key_association: jsPsych.timelineVariable('stim_key_association'),
      html_when_wrong: '<span style="color: red; font-size: 80px">X</span>',
      bottom_instructions: '<p>不正解のキーを押した場合、赤いXマークが表示されます。正解のキーを押して直して、課題を続行してください。</p>',
      force_correct_key_press: true,
      display_feedback: true,
      trial_duration: 3000, //Only if display_feedback is false
      left_category_key: 'e',
      right_category_key: 'i',
      left_category_label: ['悪い'],
      right_category_label: ['良い'],
      response_ends_trial: true,
      data: { iat_type: '練習' }
    }
  ],
  timeline_variables: [
      {type: 'iat-html', stimulus: "嫌悪感のある", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "見苦しい", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "卑しい", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "汚らしい", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "好感の持てる", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "格好の良い", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "素晴らしい", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "美しい", stim_key_association: "right"},
],
  randomize_order: true,
  post_trial_gap: 50,
  repetitions: 1
};

//5.本番試行の教示文(悪い + 外国人 / 良い)
var instructions_block2 = {
  type: 'html-keyboard-response',
  stimulus: 
  "<div style='position: absolute; top: 18%; left: 20%'>eキーを押す:<br> " +
  "<strong>悪い</strong><br>" + "または<br>" + "<strong>外国人</strong></div>" + 
  "<div style='position: absolute; top: 18%; right: 20%'>iキーを押す:<br>" +
  "<strong>良い</strong><br>" + "　　　<br>" + "<strong>　　</strong></div>" +
  "<div style='position: relative; top: 42%; margin-left: auto; margin-right: auto'><br><br><br><br><br><p>"+
  "悪いカテゴリー/外国人カテゴリーの項目が表示されたら<strong>eキー</strong>を、<br>" +
  "良いカテゴリーの項目が表示されたら<strong>iキー</strong>を押してください。<br>" +
  "どの項目も、ひとつのカテゴリーにのみ属しています。</p><p>" +
  "分類を間違えた場合、赤色でXマークが表示されます。正しいキーを押し直して、課題を続行してください。<br>" +
  "できるだけ素早く、正確に回答してください。</p><p> " +
  "準備ができたら、いずれかのキーを押して開始してください。</p><p></div>",
};

//6.本番試行(悪い + 外国人 / 良い)
var trial_block2 = {
  timeline: [
    {
      type: 'iat-html',
      stimulus: jsPsych.timelineVariable('stimulus'),
      stim_key_association: jsPsych.timelineVariable('stim_key_association'),
      html_when_wrong: '<span style="color: red; font-size: 80px">X</span>',
      bottom_instructions: '<p>不正解のキーを押した場合、赤いXマークが表示されます。正解のキーを押して直して、課題を続行してください。</p>',
      force_correct_key_press: true,
      display_feedback: true,
      trial_duration: 3000, //Only if display_feedback is false
      left_category_key: 'e',
      right_category_key: 'i',
      left_category_label: ['悪い', '外国人'],
      right_category_label: ['良い', '　　'],
      response_ends_trial: true,
      data: { iat_type: '悪い-外国人L' }
    }
  ],

  //IATで使う刺激
  timeline_variables: [
    {type: 'iat-html', stimulus: "アメリカ人", stim_key_association: "left"},
    {type: 'iat-html', stimulus: "中国人", stim_key_association: "left"},
    {type: 'iat-html', stimulus: "韓国人", stim_key_association: "left"},
    {type: 'iat-html', stimulus: "ベトナム人", stim_key_association: "left"},
    {type: 'iat-html', stimulus: "嫌悪感のある", stim_key_association: "left"},
    {type: 'iat-html', stimulus: "見苦しい", stim_key_association: "left"},
    {type: 'iat-html', stimulus: "卑しい", stim_key_association: "left"},
    {type: 'iat-html', stimulus: "汚らしい", stim_key_association: "left"},
    {type: 'iat-html', stimulus: "好感の持てる", stim_key_association: "right"},
    {type: 'iat-html', stimulus: "格好の良い", stim_key_association: "right"},
    {type: 'iat-html', stimulus: "素晴らしい", stim_key_association: "right"},
    {type: 'iat-html', stimulus: "美しい", stim_key_association: "right"},
    ],
  randomize_order: true,
  post_trial_gap: 50,
  repetitions: 1
};

//7.本番試行の教示文(悪い / 良い + 外国人)
var instructions_block3 = {
  type: 'html-keyboard-response',
  stimulus: 
  "<div style='position: absolute; top: 18%; left: 20%'>eキーを押す:<br> " +
  "<strong>悪い</strong><br>" + "　　　<br>" + "<strong>　　　</strong></div>" +
  "<div style='position: absolute; top: 18%; right: 20%'>iキーを押す:<br>" +
  "<strong>良い</strong><br>" + "または<br>" + "<strong>外国人</strong></div>" +
  "<div style='position: relative; top: 42%; margin-left: auto; margin-right: auto'><br><br><br><br><br><p>"+
  "悪いカテゴリーの項目が表示されたら<strong>eキー</strong>を<br>" +
  "良いカテゴリー/外国人カテゴリーの項目が表示されたら<strong>iキー</strong>を押してください。<br>" +
  "どの項目も、ひとつのカテゴリーにのみ属しています。</p><p>" +
  "分類を間違えた場合、赤色でXマークが表示されます。正しいキーを押し直して、課題を続行してください。<br>" +
  "できるだけ素早く、正確に回答してください。</p><p>" +
  "準備ができたら、いずれかのキーを押して開始してください。</p></div>",
};

//8.本番試行(悪い / 良い + 外国人)
var trial_block3 = {
  timeline: [
    {
      type: 'iat-html',
      stimulus: jsPsych.timelineVariable('stimulus'),
      stim_key_association: jsPsych.timelineVariable('stim_key_association'),
      html_when_wrong: '<span style="color: red; font-size: 80px">X</span>',
      bottom_instructions: '<p>不正解のキーを押した場合、赤いXマークが表示されます。正解のキーを押して直して、課題を続行してください。</p>',
      force_correct_key_press: true,
      display_feedback: true,
      trial_duration: 3000, //Only if display_feedback is false
      left_category_key: 'e',
      right_category_key: 'i',
      left_category_label: ['悪い', '　　'],
      right_category_label: ['良い', '外国人'],
      response_ends_trial: true,
      data: { iat_type: '良い-外国人R' }
    }
  ],

  //IATで使う刺激
  timeline_variables: [
    {type: 'iat-html', stimulus: "アメリカ人", stim_key_association: "right"},
    {type: 'iat-html', stimulus: "中国人", stim_key_association: "right"},
    {type: 'iat-html', stimulus: "韓国人", stim_key_association: "right"},
    {type: 'iat-html', stimulus: "ベトナム人", stim_key_association: "right"},
    {type: 'iat-html', stimulus: "嫌悪感のある", stim_key_association: "left"},
    {type: 'iat-html', stimulus: "見苦しい", stim_key_association: "left"},
    {type: 'iat-html', stimulus: "卑しい", stim_key_association: "left"},
    {type: 'iat-html', stimulus: "汚らしい", stim_key_association: "left"},
    {type: 'iat-html', stimulus: "好感の持てる", stim_key_association: "right"},
    {type: 'iat-html', stimulus: "格好の良い", stim_key_association: "right"},
    {type: 'iat-html', stimulus: "素晴らしい", stim_key_association: "right"},
    {type: 'iat-html', stimulus: "美しい", stim_key_association: "right"},
    ],
  randomize_order: true,
  post_trial_gap: 50,
  repetitions: 1
};

//9.本番試行の教示文(良い + 障害者 / 悪い)
var instructions_block4 = {
  type: 'html-keyboard-response',
  stimulus: 
  "<div style='position: absolute; top: 18%; left: 20%'>eキーを押す:<br> " +
  "<strong>良い</strong><br>" + "または<br>" + "<strong>障害者</strong></div>" + 
  "<div style='position: absolute; top: 18%; right: 20%'>iキーを押す:<br>" +
  "<strong>悪い</strong><br>" + "　　　<br>" + "<strong>　　　</strong></div>" +
  "<div style='position: relative; top: 42%; margin-left: auto; margin-right: auto'><br><br><br><br><br><p>"+
  "良いカテゴリー/外国人カテゴリーの項目が表示されたら<strong>eキー</strong>を<br>" +
  "悪いカテゴリーの項目が表示されたら<strong>iキー</strong>を押してください。<br>" +
  "どの項目も、ひとつのカテゴリーにのみ属しています。</p><p>" +
  "分類を間違えた場合、赤色でXマークが表示されます。正しいキーを押し直して、課題を続行してください。<br>" +
  "できるだけ素早く、正確に回答してください。</p><p>" +
  "準備ができたら、いずれかのキーを押して開始してください。</p></div>",
};

//10.本番試行(良い + 外国人 / 悪い)
var trial_block4 = {
  timeline: [
    {
      type: 'iat-html',
      stimulus: jsPsych.timelineVariable('stimulus'),
      stim_key_association: jsPsych.timelineVariable('stim_key_association'),
      html_when_wrong: '<span style="color: red; font-size: 80px">X</span>',
      bottom_instructions: '<p>不正解のキーを押した場合、赤いXマークが表示されます。正解のキーを押して直して、課題を続行してください。</p>',
      force_correct_key_press: true,
      display_feedback: true,
      trial_duration: 3000, //Only if display_feedback is false
      left_category_key: 'e',
      right_category_key: 'i',
      left_category_label: ['良い', '外国人'],
      right_category_label: ['悪い', '　　'],
      response_ends_trial: true,
      data: { iat_type: '良い-外国人L' }
    }
  ],

  //IATで使う刺激
  timeline_variables: [
    {type: 'iat-html', stimulus: "アメリカ人", stim_key_association: "left"},
    {type: 'iat-html', stimulus: "中国人", stim_key_association: "left"},
    {type: 'iat-html', stimulus: "韓国人", stim_key_association: "left"},
    {type: 'iat-html', stimulus: "ベトナム人", stim_key_association: "left"},
    {type: 'iat-html', stimulus: "嫌悪感のある", stim_key_association: "right"},
    {type: 'iat-html', stimulus: "見苦しい", stim_key_association: "right"},
    {type: 'iat-html', stimulus: "卑しい", stim_key_association: "right"},
    {type: 'iat-html', stimulus: "汚らしい", stim_key_association: "right"},
    {type: 'iat-html', stimulus: "好感の持てる", stim_key_association: "left"},
    {type: 'iat-html', stimulus: "格好の良い", stim_key_association: "left"},
    {type: 'iat-html', stimulus: "素晴らしい", stim_key_association: "left"},
    {type: 'iat-html', stimulus: "美しい", stim_key_association: "left"},
    ],
  randomize_order: true,
  post_trial_gap: 50,
  repetitions: 1
};

//11.本番試行の教示文(良い / 悪い + 障害者)
var instructions_block5 = {
  type: 'html-keyboard-response',
  stimulus: 
  "<div style='position: absolute; top: 18%; left: 20%'>eキーを押す:<br> " +
  "<strong>良い</strong><br>" + "　　　<br>" + "<strong>　　　</strong></div>" + 
  "<div style='position: absolute; top: 18%; right: 20%'>iキーを押す:<br>" +
  "<strong>悪い</strong><br>" + "または<br>" + "<strong>外国人</strong></div>" +
  "<div style='position: relative; top: 42%; margin-left: auto; margin-right: auto'><br><br><br><br><br><p>"+
  "良いカテゴリーの項目が表示されたら<strong>eキー</strong>を<br>" +
  "悪いカテゴリー/外国人カテゴリーの項目が表示されたら<strong>iキー</strong>を押してください。<br>" +
  "どの項目も、ひとつのカテゴリーにのみ属しています。</p><p>" +
  "分類を間違えた場合、赤色でXマークが表示されます。正しいキーを押し直して、課題を続行してください。<br>" +
  "できるだけ素早く、正確に回答してください。</p><p>" +
  "準備ができたら、いずれかのキーを押して開始してください。</p><p></div>",
};

//12.本番試行(良い / 悪い + 外国人)
var trial_block5 = {
  timeline: [
    {
      type: 'iat-html',
      stimulus: jsPsych.timelineVariable('stimulus'),
      stim_key_association: jsPsych.timelineVariable('stim_key_association'),
      html_when_wrong: '<span style="color: red; font-size: 80px">X</span>',
      bottom_instructions: '<p>不正解のキーを押した場合、赤いXマークが表示されます。正解のキーを押して直して、課題を続行してください。</p>',
      force_correct_key_press: true,
      display_feedback: true,
      trial_duration: 3000, //Only if display_feedback is false
      left_category_key: 'e',
      right_category_key: 'i',
      left_category_label: ['良い', '　　　'],
      right_category_label: ['悪い', '外国人'],
      response_ends_trial: true,
      data: { iat_type: '悪い-外国人R' }
    }
  ],

  //IATで使う刺激
  timeline_variables: [
    {type: 'iat-html', stimulus: "アメリカ人", stim_key_association: "right"},
    {type: 'iat-html', stimulus: "中国人", stim_key_association: "right"},
    {type: 'iat-html', stimulus: "韓国人", stim_key_association: "right"},
    {type: 'iat-html', stimulus: "ベトナム人", stim_key_association: "right"},
    {type: 'iat-html', stimulus: "嫌悪感のある", stim_key_association: "right"},
    {type: 'iat-html', stimulus: "見苦しい", stim_key_association: "right"},
    {type: 'iat-html', stimulus: "卑しい", stim_key_association: "right"},
    {type: 'iat-html', stimulus: "汚らしい", stim_key_association: "right"},
    {type: 'iat-html', stimulus: "好感の持てる", stim_key_association: "left"},
    {type: 'iat-html', stimulus: "格好の良い", stim_key_association: "left"},
    {type: 'iat-html', stimulus: "素晴らしい", stim_key_association: "left"},
    {type: 'iat-html', stimulus: "美しい", stim_key_association: "left"},
    ],
  randomize_order: true,
  post_trial_gap: 50,
  repetitions: 1
};

//13.終了メッセージ
var appreciate_block = {
  type: 'html-keyboard-response',
  stimulus: 
  '<p>以上でテストは終了です！ありがとうございました。<br>'+
  '続く質問にご回答ください。</p>',
  post_trial_gap: 1500
};


var timeline = [];
  timeline.push(welcome_block);
  timeline.push(category_block);
  timeline.push(instructions_block1);
  timeline.push(trial_block1);
  timeline.push(instructions_block2);
  timeline.push(trial_block2);
  timeline.push(instructions_block3);
  timeline.push(trial_block3);
  timeline.push(instructions_block4);
  timeline.push(trial_block4);
  timeline.push(instructions_block5);
  timeline.push(trial_block5);
  timeline.push(appreciate_block);