//1.ウェルカムメッセージ
var welcome_block = {
  type: 'html-keyboard-response',
  stimulus: 
  '<p>潜在連合テスト(IAT)へようこそ。' +
  'これからキーボード操作による判断課題を受けていただきます。<br>'+
  '画面に提示される単語について、指示されたキーを押して、なるべく素早く、正確に分類してください。</p><p>'+
  'スペースキーを押して進んでください。</p>',
  post_trial_gap: 1500
};

//2.カテゴリー説明
var category_block = {
  type: 'html-keyboard-response',
  stimulus: 
  '<p>“Eキー”と“Iキー”を使用して、画面に表示される項目を、できるだけ素早く各カテゴリーに分類してください。<br>' +
  '以下は、3つのカテゴリーと、各カテゴリーに属する項目です。よく読んでから、スペースキーを押して進んでください。:</p><br>' +
  '<strong>良い</strong>:<br>' + 
  '好感の持てる、素晴らしい、美しい、価値のある、楽しい、清らか、嬉しい、陽気な、素敵な、朗らかな<br><br>' + 
  '<strong>悪い</strong>:<br>' + 
  '嫌悪感のある、駄目な、汚らしい、無価値な、つまらない、けがれた、悲しい、陰気な、酷い、卑しい<br><br>' +
  '<strong>外国人</strong>:<br>' + 
  'アメリカ人、中国人、韓国人、ベトナム人<br><br>',
  post_trial_gap: 1500
};

//3.一致試行：練習試行の教示文
var instructions_block1 = {
  type: 'html-keyboard-response',
  stimulus: 
  "<div style='position: absolute; top: 18%; left: 20%'>Eキーを押す:<br> " +
  "<strong>良い</strong><br>" + "　　　<br>" + "<strong>　　　</strong></div>" +
  "<div style='position: absolute; top: 18%; right: 20%'>Iキーを押す:<br>" +
  "<strong>悪い</strong><br>" + "　　　<br>" + "<strong>外国人</strong></div>" +
  "<div style='position: relative; top: 42%; margin-left: auto; margin-right: auto'><br><br><br><br><br><p>"+
  "良いカテゴリーの単語が表示されたら<strong>Eキー</strong>を、<br>" +
  "悪いカテゴリー/外国人カテゴリーの単語が表示されたら<strong>Iキー</strong>を押してください。<br>" +
  "単語は一度しか表示されません。</p><p>" + 
  "分類を間違えた場合、赤色でXマークが表示されます。正しいキーを押し直して、課題を続行してください。</p><p> " +
  "次のページでは、課題の練習を行います。</p><p> " +
  "準備ができたら、スペースキーを押して開始してください。</p></div>",
};

//4.一致試行：練習試行
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
      left_category_label: ['良い', '　　　'],
      right_category_label: ['悪い', '外国人'],
      response_ends_trial: true,
      data: { iat_type: '一致練習_foreigner' }
    }
  ],
  timeline_variables: [
      {type: 'iat-html', stimulus: "好感の持てる", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "素晴らしい", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "美しい", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "価値のある", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "楽しい", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "清らか", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "嬉しい", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "陽気な", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "素敵な", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "朗らかな", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "アメリカ人", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "中国人", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "韓国人", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "ベトナム人", stim_key_association: "right"},   
      {type: 'iat-html', stimulus: "嫌悪感のある", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "駄目な", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "汚らしい", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "無価値な", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "つまらない", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "けがれた", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "悲しい", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "陰気な", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "酷い", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "卑しい", stim_key_association: "right"},
    ],
  randomize_order: true,
  post_trial_gap: 50,
  repetitions: 1
};

//5.不一致試行：練習試行の教示文
var instructions_block2 = {
  type: 'html-keyboard-response',
  stimulus: 
  "<div style='position: absolute; top: 18%; left: 20%'>Eキーを押す:<br> " +
  "<strong>良い</strong><br>" + "　　　<br>" + "<strong>外国人</strong></div>" +
  "<div style='position: absolute; top: 18%; right: 20%'>Iキーを押す:<br>" +
  "<strong>悪い</strong><br>" + "　　　<br>" + "<strong>　　　</strong></div>" +
  "<div style='position: relative; top: 42%; margin-left: auto; margin-right: auto'><br><br><br><br><br><p>"+
  "良いカテゴリー/外国人カテゴリーの単語が表示されたら<strong>Eキー</strong>を、<br>" +
  "悪いカテゴリーの単語が表示されたら<strong>Iキー</strong>を押してください。<br>" +
  "単語は一度しか表示されません。</p><p>" + 
  "分類を間違えた場合、赤色でXマークが表示されます。正しいキーを押し直して、課題を続行してください。</p><p> " +
  "次のページでも、課題の練習を行います。</p><p> " +
  "準備ができたら、スペースキーを押して開始してください。</p></div>",
};

//6.不一致試行：練習試行
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
      left_category_label: ['良い', '外国人'],
      right_category_label: ['悪い', '　　　'],
      response_ends_trial: true,
      data: { iat_type: '不一致練習_foreigner' }
    }
  ],
  timeline_variables: [
      {type: 'iat-html', stimulus: "好感の持てる", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "素晴らしい", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "美しい", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "価値のある", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "楽しい", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "清らか", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "嬉しい", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "陽気な", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "素敵な", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "朗らかな", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "アメリカ人", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "中国人", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "韓国人", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "ベトナム人", stim_key_association: "left"},   
      {type: 'iat-html', stimulus: "嫌悪感のある", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "駄目な", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "汚らしい", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "無価値な", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "つまらない", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "けがれた", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "悲しい", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "陰気な", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "酷い", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "卑しい", stim_key_association: "right"},
    ],
  randomize_order: true,
  post_trial_gap: 50,
  repetitions: 1
};

//7.一致試行：本番試行の教示文
var instructions_block3 = {
  type: 'html-keyboard-response',
  stimulus: 
  "<div style='position: absolute; top: 18%; left: 20%'>Eキーを押す:<br> " +
  "<strong>良い</strong><br>" + "　　　<br>" + "<strong>　　　</strong></div>" +
  "<div style='position: absolute; top: 18%; right: 20%'>Iキーを押す:<br>" +
  "<strong>悪い</strong><br>" + "　　　<br>" + "<strong>外国人</strong></div>" +
  "<div style='position: relative; top: 42%; margin-left: auto; margin-right: auto'><br><br><br><br><br><p>"+
  "良いカテゴリーの単語が表示されたら<strong>Eキー</strong>を、<br>" +
  "悪いカテゴリー/外国人カテゴリーの単語が表示されたら<strong>Iキー</strong>を押してください。<br>" +
  "単語は一度しか表示されません。</p><p>" + 
  "分類を間違えた場合、赤色でXマークが表示されます。正しいキーを押し直して、課題を続行してください。</p><p> " +
  "次のページから、課題の本番が始まります。</p><p> " +
  "準備ができたら、スペースキーを押して開始してください。</p></div>",
};

//8.一致試行：本番試行
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
      left_category_label: ['良い', '　　　'],
      right_category_label: ['悪い', '外国人'],
      response_ends_trial: true,
      data: { iat_type: '一致本番_foreigner' }
    }
  ],
  timeline_variables: [
      {type: 'iat-html', stimulus: "好感の持てる", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "素晴らしい", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "美しい", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "価値のある", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "楽しい", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "清らか", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "嬉しい", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "陽気な", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "素敵な", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "朗らかな", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "アメリカ人", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "中国人", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "韓国人", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "ベトナム人", stim_key_association: "right"},   
      {type: 'iat-html', stimulus: "嫌悪感のある", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "駄目な", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "汚らしい", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "無価値な", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "つまらない", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "けがれた", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "悲しい", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "陰気な", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "酷い", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "卑しい", stim_key_association: "right"},
    ],
  randomize_order: true,
  post_trial_gap: 50,
  repetitions: 3
};

//9.不一致試行：本番試行の教示文
var instructions_block4 = {
  type: 'html-keyboard-response',
  stimulus: 
  "<div style='position: absolute; top: 18%; left: 20%'>Eキーを押す:<br> " +
  "<strong>良い</strong><br>" + "　　　<br>" + "<strong>外国人</strong></div>" +
  "<div style='position: absolute; top: 18%; right: 20%'>Iキーを押す:<br>" +
  "<strong>悪い</strong><br>" + "　　　<br>" + "<strong>　　　</strong></div>" +
  "<div style='position: relative; top: 42%; margin-left: auto; margin-right: auto'><br><br><br><br><br><p>"+
  "良いカテゴリー/外国人カテゴリーの単語が表示されたら<strong>Eキー</strong>を、<br>" +
  "悪いカテゴリーの単語が表示されたら<strong>Iキー</strong>を押してください。<br>" +
  "単語は一度しか表示されません。</p><p>" + 
  "分類を間違えた場合、赤色でXマークが表示されます。正しいキーを押し直して、課題を続行してください。</p><p> " +
  "次のページでも、課題の本番を行います。</p><p> " +
  "準備ができたら、スペースキーを押して開始してください。</p></div>",
};

//10.不一致試行：本番試行
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
      right_category_label: ['悪い', '　　　'],
      response_ends_trial: true,
      data: { iat_type: '不一致本番_foreigner' }
    }
  ],
  timeline_variables: [
      {type: 'iat-html', stimulus: "好感の持てる", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "素晴らしい", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "美しい", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "価値のある", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "楽しい", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "清らか", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "嬉しい", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "陽気な", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "素敵な", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "朗らかな", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "アメリカ人", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "中国人", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "韓国人", stim_key_association: "left"},
      {type: 'iat-html', stimulus: "ベトナム人", stim_key_association: "left"},   
      {type: 'iat-html', stimulus: "嫌悪感のある", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "駄目な", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "汚らしい", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "無価値な", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "つまらない", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "けがれた", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "悲しい", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "陰気な", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "酷い", stim_key_association: "right"},
      {type: 'iat-html', stimulus: "卑しい", stim_key_association: "right"},
    ],
  randomize_order: true,
  post_trial_gap: 50,
  repetitions: 3
};

//11.終了メッセージ
var appreciate_block = {
  type: 'html-keyboard-response',
  stimulus: 
  '<p>以上でテストは終了です！ありがとうございました。<br>'+
  'スペースキーを押して、続く質問にご回答ください。</p>',
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
  timeline.push(appreciate_block);
