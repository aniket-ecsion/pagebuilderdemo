
var settings_value_json = '{"color":{"bg-color":"#000","text-color":"#fff","border-color":"#f1f1f1"},"image":{"image_alt_text":"","image_width":"","image_height":"","image_url_target":"_blank","edit-block-bg-repeat":"no-repeat"},"margin_padding":{"margin_top":"","margin_bottom":"","margin_left":"","margin_right":"","padding_top":"","padding_bottom":"","padding_left":"","padding_right":""},"size_posotion":{"align_left":"","align_center":"","align_right":"","edit-block-size":"fullContainer","edit-block-sticky":"nosticky"},"border":{"edit-block-border":"","edit-block-style":"none","edit-block-border-width":"1px","border_color":"#f1f1f1"},"button":{"button_text":"","button_subtext":"","button_arialabel":"","button_bgcolor":"","button_textcolor":"#fff"},"input":{"input_type":"text","input_placeholder":"","input_required":"true"},"textarea":{"textarea_inputtype":"","textarea_placeholder":"","textarea_required":"true"},"selectinput":{"select_input_type":"","select_input_name":"","select_input_required":"true"},"icon":{"icon_align":"left","icon_url_action":"","icon_url_target":"_blank","icon_color":"#000"},"video":{"video_type":"custom","video_embed":"","video_overlay_text":"","video_title":"","video_bgcolor":"#000","video_textcolor":"#fff"},"audio":{"audio_fileurl":"","audio_controls":"true","audio_autoplay":"false","audio_loop":"false"},"bulletlist":{"bulletlist_type":"icon","bulletlist_fontfamily":"","bulletlist_iconcolor":"#000","bulletlist_textcolor":"#fff"},"divider":{"divider_width":"","divider_align":"left","divider_height":"0","divider_style":"solid","divider_color":"#000"},"progressbar":{"progressbar_percent":"","progressbar_fontfamily":"","progressbar_color":""},"navbar":{"navbar_text":"","navbar_url_action":"","navbar_link_target":"_blank","navbar_linktext":"","navbar_linkurl":""}}';

var textSetting = new Array("color_settings", "font_settings", "margine_padding_settings", "border_setting", "size_position_setittings");
var sectionSetting = new Array("color_settings", "font_settings", "margine_padding_settings", "border_setting", "size_position_setittings");
var quotesSetting = new Array("color_settings", "font_settings", "margine_padding_settings", "border_setting", "size_position_setittings");
var bulletlistSetting = new Array("color_settings", "font_settings", "margine_padding_settings", "border_setting", "size_position_setittings", "bulletlist_setting");
var imageSetting = new Array("margine_padding_settings", "border_setting", "size_position_setittings", "images_settings");
var videoSetting = new Array("margine_padding_settings", "border_setting", "size_position_setittings", "video_setting");
var videoPopupSetting = new Array("margine_padding_settings","video_setting");
var audioPlayerSetting = new Array("margine_padding_settings", "size_position_setittings", "audio_setting");
var buttonSetting = new Array("color_settings", "font_settings", "margine_padding_settings", "button_setting", "border_setting");
var fbButtonSetting = new Array("color_settings", "font_settings", "margine_padding_settings","icon_link_setting");
var inputSetting = new Array("margine_padding_settings", "input_setting");

var selectSetting = new Array("margine_padding_settings", "font_settings", "input_setting","select_input_setting");
var textareaSetting = new Array("margine_padding_settings", "font_settings", "border_setting", "textarea_setting");
var checkboxSetting = new Array("margine_padding_settings", "border_setting");
var smsSetting = new Array("margine_padding_settings", "color_settings", "font_settings");
var billSetting = new Array("margine_padding_settings", "color_settings", "font_settings");
var shippingSetting = new Array("margine_padding_settings", "color_settings", "font_settings");
var surveySetting = new Array("margine_padding_settings", "color_settings", "font_settings");
var minuteTimerSetting = new Array("margine_padding_settings", "color_settings", "font_settings", "timer_setting");
var coundownSetting = new Array("margine_padding_settings", "color_settings", "font_settings", "countdown_setting");
var iconSetting = new Array("margine_padding_settings", "icon_settings", "font_settings","icon_link_setting");
var imageFeatureSetting = new Array("margine_padding_settings", "border_setting", "font_settings", "color_settings","images_settings");
var navigationSetting = new Array("margine_padding_settings");
var faqSetting = new Array("color_settings", "font_settings", "margine_padding_settings");
var dividerSetting = new Array("divider_setting", "margine_padding_settings");
var progressbarSetting = new Array("divider_settings", "margine_padding_settings", "border_setting");
var imageListSetting = new Array("margine_padding_settings", "images_settings");
var pricingTableSetting = new Array("color_settings", "font_settings", "margine_padding_settings", "border_setting");
var socialShareSetting = new Array("color_settings", "font_settings", "margine_padding_settings", "social_icon_setting");
var privacySetting = new Array("font_settings", "margine_padding_settings");
var fbCommentsSetting = new Array("font_settings", "margine_padding_settings");
var textBlockSetting = new Array("font_settings", "margine_padding_settings");
var customhtmlSetting = new Array("font_settings", "margine_padding_settings");



$(document).ready(function () {
    var type = "";
    var type_id = "";
    var section_id = "";

    var section_unid = "";



    $('.draggable-point').draggable({
        axis: 'x',
        containment: ".audio-progress"
    });

    $('.draggable-point').draggable({
        drag: function () {
            var offset = $(this).offset();
            var xPos = (100 * parseFloat($(this).css("left"))) / (parseFloat($(this).parent().css("width"))) + "%";

            $('.audio-progress-bar').css({
                'width': xPos
            });
            console.log('changed');
        }
    });




    //input on change updating settings value object
    $("body").on('change', ".setting_value_change", function () {
        console.log("here input changes trigger");
        console.log($(this));
        var type = $(this).attr('type');
        var input_id = $(this).attr('id');
        var parent_key = $.trim($(this).attr('parent-key'));
        var value = $(this).val();
        console.log(input_id);
        console.log(value);
        console.log(parent_key);
        var settings_for_id = $("#right-panel").attr('settings-for');
        var settings_for_name = $("#right-panel").attr('settings-for-name');
        var settings_element = $("#right-panel").attr('settings-element');

        var settings_pos = $("#right-panel").attr('settings-pos');
        var parent_type = $("#right-panel").attr('parent-type');

        console.log("settings for id== " + settings_for_id);
        console.log("settings for name " + settings_for_name);
        console.log("settings uid " + settings_pos);
        console.log("settings element " + settings_element);
        console.log("type " + type);

        if (parent_type == "section") {
            if (input_id == 'bg-color') {
                $("#main-container-preview" + settings_for_id).children(":first").css("background-color", value);
            }
            if (input_id == 'text-color') {
                $("#main-container-preview" + settings_for_id).children(":first").css("color", value);
            }
            if (input_id == 'border-color') {
                $("#main-container-preview" + settings_for_id).children(":first").css("border", "5px solid " + value);
            }
        }

        if (parent_type == "row") {
            if (input_id == 'bg-color') {
                $("#row-container-preview" + settings_for_id).children(":first").css("background-color", value);
            }
            if (input_id == 'text-color') {
                $("#row-container-preview" + settings_for_id).children(":first").css("color", value);
            }
            if (input_id == 'border-color') {
                $("#row-container-preview" + settings_for_id).children(":first").css("border", "5px solid " + value);
            }
        }



        console.log("#" + settings_element);
        var setting_values = $("#" + settings_element).attr('setting_values');
        console.log("setting values==" + setting_values);
        var objData = {}
        if (setting_values != "" && setting_values != 'undefined') {
            objData = JSON.parse(setting_values);
            console.log("setting values--");
            console.log(objData);

            if (objData.hasOwnProperty(parent_key)) {
                console.log("key present " + parent_key);
                console.log("key data " + objData[parent_key]);
                console.log("input id " + input_id);

                if (objData[parent_key].hasOwnProperty(input_id)) {
                    $.each(objData[parent_key], function (key, objvalue) {
                        console.log("key:" + key);
                        console.log("input id: " + input_id);
                        if (key == input_id) {
                            console.log(objData[parent_key][input_id]);
                            console.log(objData[parent_key][input_id]);
                            objData[parent_key][input_id] = value;
                        }
                        //                            console.log( key + ": " + value );
                    });
                    //                        objData.parent_key.input_id = value;

                } else {
                    console.log("in else ");//                        
                    objData[parent_key][input_id] = value;
                }
            } else {
                console.log("in parent key not present else ");
                //if key not present then create its object fist 
                if (objData[parent_key] == undefined) {
                    objData[parent_key] = {}
                }
                objData[parent_key][input_id] = value;
            }
        } else {
            console.log("in setting else ");
            //if key not present then create its object fist
            if (objData[parent_key] == undefined) {
                objData[parent_key] = {}
            }
            objData[parent_key][input_id] = value;
        }
        console.log(objData);
        console.log(JSON.stringify(objData));
        $("#" + settings_for_name + settings_for_id).attr('setting_values', JSON.stringify(objData));
    });


    $("body").on('click', ".openSettings", function () {
        var settings_for_id = $(this).attr('settings-for');
        var settings_element_id = $(this).attr('id');
        var settings_for_name = $(this).attr('settings-for-name');
        var settings_pos = $(this).attr('section-unid');
        var type = $(this).attr('type');
        var element_type = $(this).attr('element_type');
        if (element_type != "" && element_type != "undefined") {
            checkElementForSettings(element_type);
        }
        console.log(settings_for_name + settings_for_id);
        //$("#right-panel").removeClass('hide');

        $(".preview-div").addClass('hide');

        $("#right-panel").attr('settings-for', settings_for_id);
        $("#right-panel").attr('settings-element', settings_element_id);
        $("#right-panel").attr('settings-for-name', settings_for_name);
        $("#right-panel").attr('settings-pos', settings_pos);
        $("#right-panel").attr('parent-type', type);

        var setting_values = $(this).attr('setting_values');
        console.log("--setting values==" + setting_values);

        if (setting_values != "" && setting_values != 'undefined') {
            var objData = JSON.parse(setting_values);
            console.log("setting values--");
            console.log(objData);
            $.each(objData, function (objkey, objvalue) {
                $.each(objvalue, function (inputkey, inputvalue) {
                    console.log("key:" + inputkey);
                    console.log("input id: " + inputvalue);
                    $("#" + inputkey).val(inputvalue);
                });
            });
        }

    });

    $("body").on('click', ".deleteSection", function () {
        var unid = $(this).attr('section-unid');

        $.confirm({
            title: 'Confirm!',
            content: 'Are you sure you want to delete this section?',
            buttons: {
                continue: function () {
                    $("#main-container" + unid).remove();
                    $("#main-container-preview" + unid).remove();
                },
                cancel: function () {
                    $.alert('Canceled!');
                }
            }
        });

    });

    $("body").on('click', ".deleteRow", function () {
        var unid = $(this).attr('row-unid');

        $.confirm({
            title: 'Confirm!',
            content: 'Are you sure you want to delete this row?',
            buttons: {
                continue: function () {
                    $("#row-container" + unid).remove();
                    $("#row-container-preview" + unid).remove();
                },
                cancel: function () {
                    $.alert('Canceled!');
                }
            }
        });

    });


    $("body").on('click', ".add-new-section", function () {
        //        alert("here");
        //$("#right-panel").addClass('hide');
        var uniqueid = getUniqueId();
        console.log(uniqueid);
        var html = getSectionsHtml(uniqueid);
        var previewhtml = getSectionsPreviewHtml(uniqueid);
        console.log(html);
        $(html).appendTo(".container-body");
        $(previewhtml).appendTo(".preview-container-body");

        $(this).parent().parent(".nav-item").removeClass('show');
    });


    $("body").on('click', ".add-new-section-row", function () {
        //        alert("here");
        var uniqueid = getUniqueId();
        console.log(uniqueid);
        var html = getSectionsHtml(uniqueid);
        var previewhtml = getSectionsPreviewHtml(uniqueid);
        console.log(html);
        $(html).appendTo(".container-body");
        $(previewhtml).appendTo(".preview-container-body");

    });


    $("body").on('click', ".upContainer", function () {
        var unid = $(this).attr('section-unid');
        var parentDiv = $(this).closest('div.main-container');
        var parentDivPreview = $('#main-container-preview' + unid);
        console.log($(this).closest('div.main-container'));
        console.log($(this).closest('div.main-container').prev('div.main-container'));

        console.log($(this).closest('div.main-container-preview'));
        console.log($(this).closest('div.main-container-preview').prev('div.main-container-preview'));

        parentDiv.insertBefore(parentDiv.prev('div.main-container'))
        parentDivPreview.insertBefore(parentDivPreview.prev('div.main-container-preview'))

    });

    $("body").on('click', ".downContainer", function () {
        var unid = $(this).attr('section-unid');
        var parentDiv = $(this).closest('div.main-container');
        var parentDivPreview = $('#main-container-preview' + unid);
        console.log($(this).closest('div.main-container'));
        console.log($(this).closest('div.main-container').next('div.main-container'));

        console.log($(this).closest('div.main-container-preview'));
        console.log($(this).closest('div.main-container-preview').next('div.main-container-preview'));

        parentDiv.insertAfter(parentDiv.next('div.main-container'))
        parentDivPreview.insertAfter(parentDivPreview.next('div.main-container-preview'))
    });


    $("body").on('click', ".upRowContainer", function () {
        var unid = $(this).attr('row-unid');
        var row_id = $(this).attr('row-id');
        var parentDiv = $(this).closest('div.row-container');
        var parentDivPreview = $('#row-container-preview' + unid);

        console.log($(this).closest('div.row-container'));
        console.log($(this).closest('div.row-container').prev('div.row-container'));

        console.log($(this).closest('div.row-container-preview'));
        console.log($(this).closest('div.row-container-preview').prev('div.row-container-preview'));

        parentDiv.insertBefore(parentDiv.prev('div.row-container'));
        parentDivPreview.insertBefore(parentDivPreview.prev('div.row-container-preview'));

    });


    $("body").on('click', ".downRowContainer", function () {
        var unid = $(this).attr('row-unid');
        var row_id = $(this).attr('row-id');

        var parentDiv = $(this).closest('div.row-container');
        var parentDivPreview = $('#row-container-preview' + unid);

        console.log($(this).closest('div.row-container'));
        console.log($(this).closest('div.row-container').prev('div.row-container'));

        console.log($(this).closest('div.row-container-preview'));
        console.log($(this).closest('div.row-container-preview').prev('div.row-container-preview'));

        parentDiv.insertAfter(parentDiv.next('div.row-container'));
        parentDivPreview.insertAfter(parentDivPreview.next('div.row-container-preview'));
    });


    $("body").on('click', ".add_row", function () {

        var type = $(this).attr('type');
        var type_id = $(this).attr('type-id');
        var section_id = $(this).attr('section-id');
        var section_unid = $(this).attr('section-unid');
        var parent_div = $(this).attr('parent-div');
        var row_unid = $(this).attr('row-unid');

        //$("#right-panel").addClass('hide');

        $("#choose_columns_dialog").attr("type", type);
        $("#choose_columns_dialog").attr("type-id", type_id);
        $("#choose_columns_dialog").attr("section-id", section_id);
        $("#choose_columns_dialog").attr("section-unid", section_unid);
        $("#choose_columns_dialog").attr("parent-div", parent_div);
        $("#choose_columns_dialog").attr("row-unid", row_unid);



        $('#addRowModal').modal('show');

    });



    //open dialog for choose element   
    $("body").on('click', ".add_column_element", function () {
        console.log("here on click add_column_element ");
        var type = $(this).attr('type');
        var type_id = $(this).attr('type-id');
        var section_id = $(this).attr('section-id');
        var section_unid = $(this).attr('section-unid');
        var column = $(this).attr('column');
        var element_id = $(this).attr('element-id');
        var element_unid = $(this).attr('element-unid');

        console.log(type);
        console.log(type_id);
        console.log(section_id);
        console.log(section_unid);

        //$("#right-panel").addClass('hide');
        //        
        $("#choose_elements_dialog").attr("type", type);
        $("#choose_elements_dialog").attr("type-id", element_id);
        $("#choose_elements_dialog").attr("section-id", section_id);
        $("#choose_elements_dialog").attr("section-unid", section_unid);
        $("#choose_elements_dialog").attr("column", column);
        $("#choose_elements_dialog").attr("element-unid", element_unid);
        $("#choose_elements_dialog").attr("element-id", element_id);

        $(".element_div").attr("type", type);
        $(".element_div").attr("type-id", element_id);
        $(".element_div").attr("section-id", section_id);
        $(".element_div").attr("section-unid", section_unid);
        $(".element_div").attr("column", column);

        $('#addNewElement').modal('show');

    });


    //choose element and place to its aprropriate row
    $("body").on('click', ".element_div", function () {
        console.log("here on click element_div ");
        var type = $(this).attr('type');
        var type_id = $(this).attr('type-id');
        var section_id = $(this).attr('section-id');
        var section_unid = $(this).attr('section-unid');
        var template = $(this).attr('template');
        var column = $(this).attr('column');

        console.log("type id ====" + type_id);

        var elementhtml = getElementHtml(template, section_id);
        var elementPreviewhtml = getElementPreviewHtml(template, section_id);

        $(elementhtml).insertAfter("#" + type_id);
        $(elementPreviewhtml).insertAfter("#add-element-" + column + "-preview" + section_unid);


        $("#add-element-" + column + "-preview" + section_unid).remove();
        $("#" + type_id).remove();
        $('#addNewElement').modal('show');
    });


    $("body").on("mouseover", ".row-el", function (e) {
        $(this).closest('.section-el').addClass("hide-el");
    });

    $("body").on("mouseout", ".row-el", function (e) {
        $(this).closest('.section-el').removeClass("hide-el");
    });

    $("body").on("mouseover", ".col-inner", function (e) {
        $(this).closest('.row-el').addClass("hide-el");
        $(this).closest('.col-inner').addClass("hide-el");
    });

    $("body").on("mouseout", ".col-inner", function (e) {
        $(this).closest('.row-el').removeClass("hide-el");
        $(this).closest('.col-inner').removeClass("hide-el");
    });

    $("body").on("click", ".show_preview", function (e) {
        $(".preview-container-body").removeClass("hide");
        var myModal = new bootstrap.Modal(document.getElementById('mainPreviewDiv'), {
            keyboard: false
        })
        myModal.show();

    });




});




function getSectionsHtml(unid) {
    //    var section_settings_id = "section-el-settings"+unid;
    var sectionid = "section-el-settings" + unid;

    var html = ` <div class="main-container" id="main-container` + unid + `" container-unid="` + unid + `">
                <div class="section-el" >
                    <div class="col-add-el"  id="add-row`+ unid + `"  section-unid="` + sectionid + `" section-unid="` + unid + `">
                        <div class="col-inner">
                       
                            <div class="col-el-edit1">
                                <a href="#" title="" class="add_row" type="row" type-id="add-row`+ unid + `"  section-id="` + sectionid + `" section-unid="` + unid + `" parent-div="" row-unid="">Add Row</a>
                            </div>
                        </div>
                    </div>
                    <div class="section-el-edit">
                        <div class="left-el">
                            <a href="#" title="" section-id="`+ sectionid + `" section-unid="` + unid + `" class="upContainer" ><i class="fa-solid fa-arrow-up"></i></a>
                            <a href="#" title="" section-id="`+ sectionid + `" section-unid="` + unid + `" class="downContainer" ><i class="fa-solid fa-arrow-down"></i></a>
                        </div>
                        <div class="right-el">
                            <a href="#" title="" id="`+ sectionid + `" section-id="` + sectionid + `" section-unid="` + unid + `" settings-for="` + unid + `" settings-for-name="main-container" type="section" class="openSettings" setting_values='` + settings_value_json + `' element_type='section'><i class="fa-solid fa-gear" id="settingIcon" ></i></a>
                            <a href="#" title=""><i class="fa-regular fa-copy"></i></a>
                            <a href="#" title=""><i class="fa-regular fa-floppy-disk"></i></a>
                            <a href="#" title="" section-id="`+ sectionid + `" section-unid="` + unid + `" class="deleteSection"><i class="fa-regular fa-trash-can"></i></a>
                        </div>
                        <div class="add-el">
                            <a href="#" class="add-new-section" type="section"  id="add-el`+ unid + `" section-id="` + sectionid + `"  section-unid="` + unid + `" title="Add Section" ><i
                                    class="fa-solid fa-plus"></i></a>
                        </div>
                    </div>

                </div>
            </div>`;

    return html;

}


function getSectionsPreviewHtml(unid) {
    var sectionid = "preview-section-el" + unid;

    var html = ` <div class="main-container-preview"  id="main-container-preview` + unid + `" container-unid="` + unid + `"> 
                <div class="section-el" id="`+ sectionid + `">
                    <div class="col-add-el"  id="add-row-preview`+ unid + `"  section-id="` + sectionid + `" section-unid="` + unid + `">
                        <div class="col-inner" >
                               <div class="add-row-preview" type="row"></div>
                        </div>
                    </div>                  

                </div>
            </div>`;

    return html;

}


function getColumnsHtml(rowid_unid, column_count, unid, sectionid, columns_unid_arr) {

    var row_settings_id = "row-el-settings" + rowid_unid;

    var html = `<div class="row-el row-container" id="row-container` + rowid_unid + `">                  
                  <div class="col-el row">`;

    if (column_count == 1) {
        var element_1_unid = columns_unid_arr[0];
        html += `<div class="col-sm-12">
                            <div class="col-add-el ">
                                <div class="col-inner" id="element-container`+ element_1_unid + `" >
                                    
                                    <div class="col-el-edit1"  type="element" id="add-element-`+ element_1_unid + `"  section-unid="` + sectionid + `" section-unid="` + unid + `">
                                        <a href="#" title=""  class="add_column_element" type="element" element-unid="`+ element_1_unid + `"  element-id="add-element-` + element_1_unid + `" type-id="add-element-1-` + element_1_unid + `"  column="1"  section-id="` + sectionid + `" section-unid="` + unid + `" >Add Elements</a>
                                    </div>
                                    <div class="item-el-edit" >
                                       <div class="left-el">
                                          <a href="#" title=""><i class="fa-solid fa-arrow-up"></i></a>
                                          <a href="#" title=""><i class="fa-solid fa-arrow-down"></i></a>
                                      </div>
                                       <div class="right-el">
                                          <a href="#" title="" type="element"  settings-for="`+ element_1_unid + `" id="add-element-settings-` + element_1_unid + `" element-id="` + element_1_unid + `" row-id="` + rowid_unid + `"  section-id="` + sectionid + `" section-unid="` + unid + `"  settings-for="` + element_1_unid + `" settings-for-name="element-container" type="element" class="openSettings"  setting_values='` + settings_value_json + `'><i class="fa-solid fa-gear" id="settingIcon" ></i></a>
                                          <a href="#" title=""><i class="fa-regular fa-copy"></i></a>
                                          <a href="#" title=""><i class="fa-regular fa-floppy-disk"></i></a>
                                          <a href="#" title=""><i class="fa-regular fa-trash-can"></i></a>
                                       </div>
                                       <div class="add-el">
                                          <a href="" title="" class="addMoreColumn" type="element" element-unid="`+ element_1_unid + `" element-id="element-container` + element_1_unid + `" row-id="` + rowid_unid + `" section-id="` + sectionid + `" section-unid="` + unid + `" ><i class="fa-solid fa-plus"></i></a>
                                       </div>
                                    </div>
                                </div>
                    
                            </div>
                       </div>`;

    }

    if (column_count == 2) {
        var element_1_unid = columns_unid_arr[0];

        var element_2_unid = columns_unid_arr[1];
        html += `<div class=" col-sm-6">
                            <div class="col-add-el">
                                <div class="col-inner" id="element-container`+ element_1_unid + `" >
                                   
                                    <div class="col-el-edit1 " type="element"  id="add-element-`+ element_1_unid + `"  section-unid="` + sectionid + `" section-unid="` + unid + `">
                                        <a href="#" title=""   class="add_column_element" type="element" element-unid="`+ element_1_unid + `" element-id="add-element-` + element_1_unid + `" type-id="add-element-1-` + rowid_unid + `"  column="1"  section-id="` + sectionid + `" section-unid="` + unid + `" >Add Elements</a>
                                    </div>
                                    <div class="item-el-edit" >
                                       <div class="left-el">
                                          <a href="#" title=""><i class="fa-solid fa-arrow-up"></i></a>
                                          <a href="#" title=""><i class="fa-solid fa-arrow-down"></i></a>
                                      </div>
                                       <div class="right-el">
                                          <a href="#" title="" id="add-element-settings-`+ element_1_unid + `" element-id="` + element_1_unid + `" row-id="` + rowid_unid + `"  section-id="` + sectionid + `" section-unid="` + unid + `" settings-for="` + element_1_unid + `" settings-for-name="element-container" type="element" class="openSettings"  setting_values='` + settings_value_json + `'><i class="fa-solid fa-gear" id="settingIcon" ></i></a>
                                          <a href="#" title=""><i class="fa-regular fa-copy"></i></a>
                                          <a href="#" title=""><i class="fa-regular fa-floppy-disk"></i></a>
                                          <a href="#" title=""><i class="fa-regular fa-trash-can"></i></a>
                                       </div>
                                       <div class="add-el">
                                          <a href="" title=""  class="addMoreColumn" type="element" element-unid="`+ element_1_unid + `" element-id="element-container` + element_1_unid + `" row-id="` + rowid_unid + `"section-id="` + sectionid + `" section-unid="` + unid + `"><i class="fa-solid fa-plus"></i></a>
                                       </div>
                                    </div>
                                </div>
                    
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="col-add-el ">
                                <div class="col-inner"  id="element-container`+ element_2_unid + `">
                                   
                                    <div class="col-el-edit1 "  type="element" id="add-element-`+ element_2_unid + `"   section-unid="` + sectionid + `" section-unid="` + unid + `">
                                        <a href="#" title=""  class="add_column_element" type="element" element-unid="`+ element_2_unid + `" element-id="add-element-` + element_2_unid + `" type-id="add-element-2-` + rowid_unid + `"   column="2" section-id="` + sectionid + `" section-unid="` + unid + `" >Add Elements</a>
                                    </div>
                                    <div class="item-el-edit" >
                                       <div class="left-el">
                                          <a href="#" title=""><i class="fa-solid fa-arrow-up"></i></a>
                                          <a href="#" title=""><i class="fa-solid fa-arrow-down"></i></a>
                                      </div>
                                       <div class="right-el">
                                          <a href="#" title="" id="add-element-settings-`+ element_2_unid + `" element-id="` + element_2_unid + `" row-id="` + rowid_unid + `"  section-id="` + sectionid + `" section-unid="` + unid + `" settings-for="` + element_2_unid + `" settings-for-name="element-container" type="element" class="openSettings"  setting_values='` + settings_value_json + `'><i class="fa-solid fa-gear" id="settingIcon"></i></a>
                                          
                                          <a href="#" title=""><i class="fa-regular fa-floppy-disk"></i></a>
                                         
                                       </div>
                                       <div class="add-el">
                                          <a href="" title=""  class="addMoreColumn" type="element" element-unid="`+ element_2_unid + `" element-id="element-container` + element_2_unid + `" row-id="` + rowid_unid + `"section-id="` + sectionid + `" section-unid="` + unid + `"><i class="fa-solid fa-plus"></i></a>
                                       </div>
                                    </div>
                                </div>
                    
                            </div>
                        </div>`;
    }

    if (column_count == 3) {
        var element_1_unid = columns_unid_arr[0];

        var element_2_unid = columns_unid_arr[1];

        var element_3_unid = columns_unid_arr[2];
        html += `<div class="col-sm-4">
                            <div class="col-add-el ">
                                <div class="col-inner" id="element-container`+ element_1_unid + `" >
                                    
                                    <div class="col-el-edit1 "  type="element" id="add-element-`+ element_1_unid + `"   section-unid="` + sectionid + `" section-unid="` + unid + `">
                                        <a href="#" title="" class="add_column_element" type="element" element-unid="`+ element_1_unid + `" element-id="add-element-` + element_1_unid + `" type-id="add-element-1-` + rowid_unid + `"  column="1" section-id="` + sectionid + `" section-unid="` + unid + `" >Add Elements</a>
                                    </div>
                                    <div class="item-el-edit" >
                                       <div class="left-el">
                                          <a href="#" title=""><i class="fa-solid fa-arrow-up"></i></a>
                                          <a href="#" title=""><i class="fa-solid fa-arrow-down"></i></a>
                                      </div>
                                       <div class="right-el">
                                          <a href="#" title="" id="add-element-settings-`+ element_1_unid + `" element-id="` + element_1_unid + `" row-id="` + rowid_unid + `"  section-id="` + sectionid + `" section-unid="` + unid + `" settings-for="` + element_1_unid + `" settings-for-name="element-container" type="element" class="openSettings"  setting_values='` + settings_value_json + `'><i class="fa-solid fa-gear" id="settingIcon"></i></a>
                                          <a href="#" title=""><i class="fa-regular fa-copy"></i></a>
                                          <a href="#" title=""><i class="fa-regular fa-floppy-disk"></i></a>
                                          <a href="#" title=""><i class="fa-regular fa-trash-can"></i></a>
                                       </div>
                                       <div class="add-el">
                                          <a href="" title=""  class="addMoreColumn" type="element" element-unid="`+ element_1_unid + `" element-id="element-container` + element_1_unid + `" row-id="` + rowid_unid + `"section-id="` + sectionid + `" section-unid="` + unid + `"><i class="fa-solid fa-plus"></i></a>
                                       </div>
                                    </div>
                                </div>
                    
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="col-add-el ">
                                <div class="col-inner" id="element-container`+ element_2_unid + `">
                                    
                                    <div class="col-el-edit1 "  type="element" id="add-element-`+ element_2_unid + `"   section-unid="` + sectionid + `" section-unid="` + unid + `">
                                        <a href="#" title=""  class="add_column_element" type="element" element-unid="`+ element_2_unid + `" element-id="add-element-` + element_2_unid + `" type-id="add-element-2-` + rowid_unid + `" column="2"  section-id="` + sectionid + `" section-unid="` + unid + `" >Add Elements</a>
                                    </div>
                                    <div class="item-el-edit" >
                                       <div class="left-el">
                                          <a href="#" title=""><i class="fa-solid fa-arrow-up"></i></a>
                                          <a href="#" title=""><i class="fa-solid fa-arrow-down"></i></a>
                                      </div>
                                       <div class="right-el">
                                          <a href="#" title="" id="add-element-settings-`+ element_2_unid + `" element-id="` + element_2_unid + `" row-id="` + rowid_unid + `"  section-id="` + sectionid + `" section-unid="` + unid + `" settings-for="` + element_2_unid + `" settings-for-name="element-container" type="element" class="openSettings"  setting_values='` + settings_value_json + `'><i class="fa-solid fa-gear" id="settingIcon"></i></a>
                                          <a href="#" title=""><i class="fa-regular fa-copy"></i></a>
                                          <a href="#" title=""><i class="fa-regular fa-floppy-disk"></i></a>
                                          <a href="#" title=""><i class="fa-regular fa-trash-can"></i></a>
                                       </div>
                                       <div class="add-el">
                                          <a href="" title=""  class="addMoreColumn" type="element" element-unid="`+ element_2_unid + `" element-id="element-container` + element_2_unid + `" row-id="` + rowid_unid + `"section-id="` + sectionid + `" section-unid="` + unid + `"><i class="fa-solid fa-plus"></i></a>
                                       </div>
                                    </div>
                                </div>
                    
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="col-add-el ">
                                <div class="col-inner" id="element-container`+ element_3_unid + `">
                                   
                                    <div class="col-el-edit1 "  type="element" id="add-element-`+ element_3_unid + `"   section-unid="` + sectionid + `" section-unid="` + unid + `">
                                        <a href="#" title=""  class="add_column_element" type="element" element-unid="`+ element_3_unid + `" element-id="add-element-` + element_3_unid + `" type-id="add-element-3-` + rowid_unid + `" column="3"  section-id="` + sectionid + `" section-unid="` + unid + `" >Add Elements</a>
                                    </div>
                                    <div class="item-el-edit" >
                                       <div class="left-el">
                                          <a href="#" title=""><i class="fa-solid fa-arrow-up"></i></a>
                                          <a href="#" title=""><i class="fa-solid fa-arrow-down"></i></a>
                                      </div>
                                       <div class="right-el">
                                          <a href="#" title="" id="add-element-settings-`+ element_3_unid + `" element-id="` + element_3_unid + `" row-id="` + rowid_unid + `"  section-id="` + sectionid + `" section-unid="` + unid + `" settings-for="` + element_3_unid + `" settings-for-name="element-container" type="element" class="openSettings"  setting_values='` + settings_value_json + `'><i class="fa-solid fa-gear" id="settingIcon"></i></a>
                                          <a href="#" title=""><i class="fa-regular fa-copy"></i></a>
                                          <a href="#" title=""><i class="fa-regular fa-floppy-disk"></i></a>
                                          <a href="#" title=""><i class="fa-regular fa-trash-can"></i></a>
                                       </div>
                                       <div class="add-el">
                                          <a href="" title="" data-bs-toggle="modal" class="addMoreColumn" type="element" element-unid="element-container`+ element_3_unid + `" element-id="` + element_3_unid + `" row-id="` + rowid_unid + `" section-id="` + sectionid + `" section-unid="` + unid + `"><i class="fa-solid fa-plus"></i></a>
                                       </div>
                                    </div>
                                </div>
                    
                            </div>
                        </div>`;
    }

    if (column_count == 4) {
        var element_1_unid = columns_unid_arr[0];

        var element_2_unid = columns_unid_arr[1];

        var element_3_unid = columns_unid_arr[2];

        var element_4_unid = columns_unid_arr[3];
        html += `<div class="col-sm-3">
                            <div class="col-add-el ">
                                <div class="col-inner" id="element-container`+ element_1_unid + `" >
                                    
                                    <div class="col-el-edit1 "  type="element" id="add-element-`+ element_1_unid + `"   section-unid="` + sectionid + `" section-unid="` + unid + `">
                                        <a href="#" title=""   class="add_column_element" type="element" element-unid="`+ element_1_unid + `" element-id="add-element-` + element_1_unid + `" type-id="add-element-1-` + rowid_unid + `"  column="1" section-id="` + sectionid + `" section-unid="` + unid + `" >Add Elements</a>
                                    </div>
                                    <div class="item-el-edit" >
                                       <div class="left-el">
                                          <a href="#" title=""><i class="fa-solid fa-arrow-up"></i></a>
                                          <a href="#" title=""><i class="fa-solid fa-arrow-down"></i></a>
                                      </div>
                                       <div class="right-el">
                                          <a href="#" title="" id="add-element-settings-`+ element_1_unid + `" element-id="` + element_1_unid + `" row-id="` + rowid_unid + `"  section-id="` + sectionid + `" section-unid="` + unid + `" settings-for="` + element_1_unid + `" settings-for-name="element-container" type="element" class="openSettings"  setting_values='` + settings_value_json + `'><i class="fa-solid fa-gear" id="settingIcon"></i></a>
                                          <a href="#" title=""><i class="fa-regular fa-copy"></i></a>
                                          <a href="#" title=""><i class="fa-regular fa-floppy-disk"></i></a>
                                          <a href="#" title=""><i class="fa-regular fa-trash-can"></i></a>
                                       </div>
                                       <div class="add-el">
                                         <a href="" title="" class="addMoreColumn" type="element" element-unid="`+ element_1_unid + `" element-id="element-container` + element_1_unid + `" row-id="` + rowid_unid + `" section-id="` + sectionid + `" section-unid="` + unid + `"><i class="fa-solid fa-plus"></i></a>
                                       </div>
                                    </div>
                                </div>
                    
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="col-add-el ">
                                <div class="col-inner" id="element-container`+ element_2_unid + `">
                                   
                                    <div class="col-el-edit1 "  type="element" id="add-element-`+ element_2_unid + `" section-unid="` + sectionid + `" section-unid="` + unid + `">
                                        <a href="#" title=""  class="add_column_element" type="element" element-unid="`+ element_2_unid + `" element-id="add-element-` + element_2_unid + `" type-id="add-element-2-` + rowid_unid + `"  column="2" section-id="` + sectionid + `" section-unid="` + unid + `" >Add Elements</a>
                                    </div>
                                    <div class="item-el-edit" >
                                       <div class="left-el">
                                          <a href="#" title=""><i class="fa-solid fa-arrow-up"></i></a>
                                          <a href="#" title=""><i class="fa-solid fa-arrow-down"></i></a>
                                      </div>
                                       <div class="right-el">
                                          <a href="#" title="" id="add-element-settings-`+ element_2_unid + `" element-id="` + element_2_unid + `" row-id="` + rowid_unid + `"  section-id="` + sectionid + `" section-unid="` + unid + `" settings-for="` + element_2_unid + `" settings-for-name="element-container" type="element" class="openSettings"  setting_values='` + settings_value_json + `'><i class="fa-solid fa-gear" id="settingIcon"></i></a>
                                          <a href="#" title=""><i class="fa-regular fa-copy"></i></a>
                                          <a href="#" title=""><i class="fa-regular fa-floppy-disk"></i></a>
                                          <a href="#" title=""><i class="fa-regular fa-trash-can"></i></a>
                                       </div>
                                       <div class="add-el">
                                          <a href="#" title="" class="addMoreColumn" type="element" element-unid="`+ element_2_unid + `" element-id="element-container` + element_2_unid + `" row-id="` + rowid_unid + `" section-id="` + sectionid + `" section-unid="` + unid + `"><i class="fa-solid fa-plus"></i></a>
                                       </div>
                                    </div>
                                </div>
                    
                            </div>
                        </div>
                        <div class=" col-sm-3">
                            <div class="col-add-el">
                                <div class="col-inner" id="element-container`+ element_3_unid + `">
                                    
                                    <div class="col-el-edit1 "  type="element" id="add-element-`+ element_3_unid + `"   section-unid="` + sectionid + `" section-unid="` + unid + `">
                                        <a href="#" title=""  class="add_column_element" type="element" element-unid="`+ element_3_unid + `" element-id="add-element-` + element_3_unid + `" type-id="add-element-3-` + rowid_unid + `"  column="3" section-id="` + sectionid + `" section-unid="` + unid + `" >Add Elements</a>
                                    </div>
                                    <div class="item-el-edit" >
                                       <div class="left-el">
                                          <a href="#" title=""><i class="fa-solid fa-arrow-up"></i></a>
                                          <a href="#" title=""><i class="fa-solid fa-arrow-down"></i></a>
                                      </div>
                                       <div class="right-el">
                                          <a href="#"  title="" id="add-element-settings-`+ element_3_unid + `" element-id="` + element_3_unid + `" row-id="` + rowid_unid + `"  section-id="` + sectionid + `" section-unid="` + unid + `" settings-for="` + element_3_unid + `" settings-for-name="element-container" type="element" class="openSettings"  setting_values='` + settings_value_json + `'><i class="fa-solid fa-gear" id="settingIcon"></i></a>
                                          <a href="#" title=""><i class="fa-regular fa-copy"></i></a>
                                          <a href="#" title=""><i class="fa-regular fa-floppy-disk"></i></a>
                                          <a href="#" title=""><i class="fa-regular fa-trash-can"></i></a>
                                       </div>
                                       <div class="add-el">
                                          <a href="#" title="" class="addMoreColumn" type="element" element-unid="`+ element_3_unid + `" element-id="element-container` + element_3_unid + `" row-id="` + rowid_unid + `" section-id="` + sectionid + `" section-unid="` + unid + `"><i class="fa-solid fa-plus"></i></a>
                                       </div>
                                    </div>
                                </div>
                    
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="col-add-el ">
                                <div class="col-inner" id="element-container`+ element_4_unid + `">
                                  
                                    <div class="col-el-edit1 "  type="element" id="add-element-`+ element_4_unid + `"   section-unid="` + sectionid + `" section-unid="` + unid + `">
                                        <a href="#" title=""  class="add_column_element" type="element" element-unid="`+ element_4_unid + `" element-id="add-element-` + element_4_unid + `" type-id="add-element-4-` + rowid_unid + `"  column="4" section-id="` + sectionid + `" section-unid="` + unid + `" >Add Elements</a>
                                    </div>
                                    <div class="item-el-edit" >
                                       <div class="left-el">
                                          <a href="#" title=""><i class="fa-solid fa-arrow-up"></i></a>
                                          <a href="#" title=""><i class="fa-solid fa-arrow-down"></i></a>
                                      </div>
                                       <div class="right-el">
                                          <a href="#" title="" id="add-element-settings-`+ element_4_unid + `" element-id="` + element_4_unid + `" row-id="` + rowid_unid + `"  section-id="` + sectionid + `" section-unid="` + unid + `" settings-for="` + element_4_unid + `" settings-for-name="element-container" type="element" class="openSettings"  setting_values='` + settings_value_json + `'><i class="fa-solid fa-gear" id="settingIcon"></i></a>
                                          <a href="#" title=""><i class="fa-regular fa-copy"></i></a>
                                          <a href="#" title=""><i class="fa-regular fa-floppy-disk"></i></a>
                                          <a href="#" title=""><i class="fa-regular fa-trash-can"></i></a>
                                       </div>
                                       <div class="add-el">
                                          <a href="#" title="" class="addMoreColumn" type="element" element-unid="`+ element_4_unid + `" element-id="element-container` + element_4_unid + `" row-id="` + rowid_unid + `" section-id="` + sectionid + `" section-unid="` + unid + `"><i class="fa-solid fa-plus"></i></a>
                                       </div>
                                    </div>
                                </div>
                    
                            </div>
                        </div>`;
    }


    html += `    </div>
                    <div class="row-el-edit">
                       <div class="left-el">
                           <a href="#" title="" row-id="row-container`+ rowid_unid + `" row-unid="` + rowid_unid + `" class="upRowContainer"><i class="fa-solid fa-arrow-up"></i></a>
                           <a href="#" title="" row-id="row-container`+ rowid_unid + `" row-unid="` + rowid_unid + `" class="downRowContainer"><i class="fa-solid fa-arrow-down"></i></a>
                       </div>
                       <div class="right-el">
                           <a href="#" title="" id="`+ row_settings_id + `" row-id="` + row_settings_id + `"  section-id="` + sectionid + `" section-unid="` + unid + `" settings-for="` + rowid_unid + `" settings-for-name="row-container" type="row" class="openSettings"  setting_values='` + settings_value_json + `'><i class="fa-solid fa-gear" id="settingIcon"></i></a>
                          <a href="#" title=""><i class="fa-regular fa-copy"></i></a>
                          <a href="#" title=""><i class="fa-regular fa-floppy-disk"></i></a>
                          <a href="#" title="" row-id="row-container`+ rowid_unid + `" row-unid="` + rowid_unid + `" class="deleteRow"><i class="fa-regular fa-trash-can"></i></a>
                      </div>
                      <div class="add-el Dipali">
                         <a href="#" title="" class="add_row" type="row" add-type="same-section" type-id="add-row`+ rowid_unid + `"  section-id="` + sectionid + `" section-unid="` + unid + `" parent-div="row-container"  row-unid="` + rowid_unid + `"><i class="fa-solid fa-plus"></i></a>
                     </div>
                    </div>
                </div>`;

    return html;

}



function getRowColumnsPreviewHtml(rowid_unid, column_count, unid, sectionid, columns_unid_arr) {
    //    var sectionid = "preview-row-el"+unid;
    //    
    //    var row_settings_id = "row-el-settings"+unid;    
    //        
    var html = ` <div class="row-el row-container-preview" id="row-container-preview` + rowid_unid + `">
                    <div class="col-el row">`;

    if (column_count == 1) {
        var element_1_unid = columns_unid_arr[0];

        html += `<div class="col-add-el col-sm-12">
                            <div class="col-inner"  id="element-container-preview`+ element_1_unid + `" >
                               <div class="add-row-preview" type="row" id="add-element-preview`+ element_1_unid + `"  section-id="` + sectionid + `" section-unid="` + unid + `"></div>
                            </div>
                       </div>`;

    }

    if (column_count == 2) {
        var element_1_unid = columns_unid_arr[0];

        var element_2_unid = columns_unid_arr[1];

        html += `<div class="col-add-el col-sm-6">
                            <div class="col-inner" id="element-container-preview`+ element_1_unid + `" >
                               <div class="add-row-preview" type="row" id="add-element-preview`+ element_1_unid + `"  section-id="` + sectionid + `" section-unid="` + unid + `"></div>
                            </div>
                        </div>
                        <div class="col-add-el col-sm-6">
                            <div class="col-inner" id="element-container-preview`+ element_2_unid + `" >
                               <div class="add-row-preview" type="row" id="add-element-preview`+ element_2_unid + `"  section-id="` + sectionid + `" section-unid="` + unid + `"></div>
                            </div>
                        </div>`;
    }

    if (column_count == 3) {
        var element_1_unid = columns_unid_arr[0];

        var element_2_unid = columns_unid_arr[1];

        var element_3_unid = columns_unid_arr[2];

        html += `<div class="col-add-el col-sm-4">
                            <div class="col-inner" id="element-container-preview`+ element_1_unid + `" >
                               <div class="add-row-preview" type="row" id="add-element-preview`+ element_1_unid + `"  section-id="` + sectionid + `" section-unid="` + unid + `"></div>
                            </div>
                        </div>
                        <div class="col-add-el col-sm-4">
                            <div class="col-inner" id="element-container-preview`+ element_2_unid + `" >
                               <div class="add-row-preview" type="row" id="add-element-preview`+ element_2_unid + `"  section-id="` + sectionid + `" section-unid="` + unid + `"></div>
                            </div>
                        </div>
                        <div class="col-add-el col-sm-4">
                            <div class="col-inner" id="element-container-preview`+ element_3_unid + `" >
                               <div class="add-row-preview" type="row" id="add-element-preview`+ element_3_unid + `"  section-id="` + sectionid + `" section-unid="` + unid + `"></div>
                            </div>
                        </div>`;
    }

    if (column_count == 4) {
        var element_1_unid = columns_unid_arr[0];

        var element_2_unid = columns_unid_arr[1];

        var element_3_unid = columns_unid_arr[2];

        var element_4_unid = columns_unid_arr[3];

        html += `<div class="col-add-el col-sm-3">
                            <div class="col-inner" id="element-container-preview`+ element_1_unid + `" >
                               <div class="add-row-preview" type="row" id="add-element-preview`+ element_1_unid + `"  section-id="` + sectionid + `" section-unid="` + unid + `"></div>
                            </div>
                        </div>
                        <div class="col-add-el col-sm-3">
                            <div class="col-inner" id="element-container-preview`+ element_2_unid + `" >
                               <div class="add-row-preview" type="row" id="add-element-preview`+ element_2_unid + `"  section-id="` + sectionid + `" section-unid="` + unid + `"></div>
                            </div>
                        </div>
                        <div class="col-add-el col-sm-3">
                            <div class="col-inner" id="element-container-preview`+ element_3_unid + `" >
                               <div class="add-row-preview" type="row" id="add-element-preview`+ element_3_unid + `"  section-id="` + sectionid + `" section-unid="` + unid + `"></div>
                            </div>
                        </div>
                        <div class="col-add-el col-sm-3">
                            <div class="col-inner" id="element-container-preview`+ element_4_unid + `" >
                               <div class="add-row-preview" type="row" id="add-element-preview`+ element_4_unid + `"  section-id="` + sectionid + `" section-unid="` + unid + `"></div>
                            </div>
                        </div>`;
    }


    html += `    </div>
                </div>`;

    return html;

}




function getAddMoreColumnsHtml(rowid_unid, unid, sectionid, columns_unid_arr) {

    var row_settings_id = "row-el-settings" + rowid_unid;

    var element_1_unid = columns_unid_arr;
    var html = `<div class="col-inner" id="element-container` + element_1_unid + `" >

                            <div class="col-el-edit1"  type="element" id="add-element-`+ element_1_unid + `"  section-id="` + sectionid + `" section-unid="` + unid + `">
                                <a href="#" title=""  class="add_column_element" type="element" element-unid="`+ element_1_unid + `"  element-id="add-element-` + element_1_unid + `" type-id="add-element-1-` + element_1_unid + `"  column="1"  section-id="` + sectionid + `" section-unid="` + unid + `" >Add Elements</a>
                            </div>
                            <div class="item-el-edit" >
                               <div class="left-el">
                                  <a href="#" title=""><i class="fa-solid fa-arrow-up"></i></a>
                                  <a href="#" title=""><i class="fa-solid fa-arrow-down"></i></a>
                              </div>
                               <div class="right-el">
                                  <a href="#" title="" id="add-element-settings-`+ element_1_unid + `" element-id="` + element_1_unid + `" row-id="` + rowid_unid + `"  section-id="` + sectionid + `" section-unid="` + unid + `" settings-for="` + element_1_unid + `" settings-for-name="element-container" type="element" class="openSettings"  setting_values='` + settings_value_json + `'><i class="fa-solid fa-gear" id="settingIcon" ></i></a>
                                  <a href="#" title=""><i class="fa-regular fa-copy"></i></a>
                                  <a href="#" title=""><i class="fa-regular fa-floppy-disk"></i></a>
                                  <a href="#" title=""><i class="fa-regular fa-trash-can"></i></a>
                               </div>
                               <div class="add-el">
                                  <a href="#" title="" class="addMoreColumn" type="element" element-unid="`+ element_1_unid + `" element-id="element-container` + element_1_unid + `" row-id="` + rowid_unid + `" section-id="` + sectionid + `" section-unid="` + unid + `"><i class="fa-solid fa-plus"></i></a>
                               </div>
                            </div>
                    </div>`;


    return html;

}


function getAddMoreColumnsPreviewHtml(rowid_unid, unid, sectionid, columns_unid_arr) {

    var row_settings_id = "row-el-settings" + rowid_unid;

    var element_1_unid = columns_unid_arr;

    html = `<div class="col-inner" id="element-container-preview` + element_1_unid + `" >
              <div class="add-row-preview" type="row" id="add-element-preview`+ element_1_unid + `"  section-id="` + sectionid + `" section-unid="` + unid + `"></div>
          </div>`;

    return html;

}




function getElementHtml(template, id) {

    //this method is calling to show and hide settings element wise
    checkElementForSettings(template);

    var html = '';

    if(template == "tem_headline"){

        html +=`<h1 id="editor`+id+`"  contenteditable="true" class="ne elHeadline hsSize3 lh4 elMargin0 elBGStyle0 hsTextShadow0 edit editor inline_ckeditor" style="text-align: center;font-size: 32px" data-bold="inherit" data-gramm="false" contenteditable="false">
                <b>Large Call to Action Headline</b>
              </h1>`;
    }
    if(template == "tem_sub_headline"){
        html +=`<p id="editor`+id+`" contenteditable="true">
                   Small Call to Action Headline
                </p>`;
    }
    if(template == "tem_paragraph"){
        html +=`<p id="editor`+id+`" contenteditable="true">

                   P Tag
                </p>`;
    }
    if (template == "tem_bullet_line") {
        $("#bulletlist_setting").removeClass("hide");
        html +=`<div id="editor`+id+`" contenteditable="true"><ul>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                </ul><div>`;
    }
    if (template == "tem_quotes") {

        html +=`<div id="editor`+id+`" contenteditable="true"><ul>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                 </ul><div>`;
    }


    if(template == "tem_image"){
        
        html +=`<img id="editor`+id+`" src="https://via.placeholder.com/350x150/e1e5e6/6d7b8b?text=Demo+Image" width="500">`;
    }
    if(template == "tem_imagepopup"){
        
        html +=`<button id="editor`+id+`" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#imagePopupModal">

                Image Popup
              </button>`;
    }

    if(template == "tem_video"){
        
        html +=`<div class="text-end">
                    <input id="editor`+id+`"  type="file" accept="video/mp4,video/mkv, video/x-m4v,video/*" class="mb-2">
                </div>
             <video id="video"></video>`;
    }

    if(template == "tem_videopopup"){
        
        html +=`<button id="editor`+id+`" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#videoPopupModal">

                    Video Popup
                  </button>`;
    }

    if(template == "tem_audioplayer"){
        
        html +=`<audio controls>
                    <source src="https://www.w3schools.com/TagS/horse.ogg" type="audio/ogg">
                </audio>`;
    }


    if(template == "tem_button"){
        
        html +=`<button id="editor`+id+`" type="button" class="btn btn-primary edit-on-click">Primary</button>
                <br>
                <div class="controls-update" style="display:none;"> <a href="#">update</a></div>`;
    }

    if (template == "tem_fbbutton") {
        html += `<div>
                    <a href=""><i class="fa-brands fa-facebook"></i></a>
                </div>`;
    }

    if(template == "tem_input"){
        html +='<input id="editor`+id+`" type="text" class="form-control mb-1" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping">';

    }

    if (template == "tem_selectbox") {

        html +=`<select id="editor`+id+`" class="form-select mb-1" aria-label="Default select example">

                    <option selected></option>
                    <option value="1"></option>
                    <option value="2"></option>
                    <option value="3"></option>
                 </select>`;
    }
    if (template == "tem_textarea") {

        html +='<textarea id="editor`+id+`" class="form-control mb-1" id="area1" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>';
    }
      if (template == "tem_checkbox") {
        html += `<div class="form-check">
               <div class="editor7 d-flex">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
                Default checkbox
            </label>
        </div>
       </div>`;
    }

    if (template == "tem_smssignup") {
        html += `<form class="text-start">
                <div class="mb-3">
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Name</label>
                    <input type="text" class="form-control" id="" aria-describedby="">
                  </div>
                  <label for="exampleInputEmail1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Number</label>
                  <input type="number" class="form-control" id="exampleInputPassword1">
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>`;
    }

    if (template == "tem_billingadd") {
        html += `<form class="text-start">
                <div class="mb-3">
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Fullname</label>
                    <input type="text" class="form-control" id="" aria-describedby="">
                  </div>
                  <label for="exampleInputEmail1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Number</label>
                  <input type="number" class="form-control" id="exampleInputPassword1">
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Address</label>
                  <input type="text" class="form-control mb-2" id="exampleInputPassword1" placeholder="street address">
                  <input type="text" class="form-control" id="exampleInputPassword1"
                    placeholder="suite, Apt, unit, building, flooer, etc. address">
                </div>
                <div class="row mb-2">
                  <div class="col-md-4">
                    <label for="validationCustom04" class="form-label">State</label>
                    <select class="form-select" id="validationCustom04" required>
                      <option selected disabled value="">Choose...</option>
                      <option>...</option>
                    </select>
                    <div class="invalid-feedback">
                      Please select a valid state.
                    </div>
                  </div>
                  <div class="col-md-4">
                    <label for="validationCustom05" class="form-label">City</label>
                    <input type="text" class="form-control" id="validationCustom05">
                  </div>
                  <div class="col-md-4">
                    <label for="validationCustom05" class="form-label">Zip Code</label>
                    <input type="number" class="form-control" id="validationCustom05">
                  </div>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>`;
    }

    if (template == "tem_shippingadd") {
        html += `<form class="text-start">
                <div class="mb-3">
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Fullname</label>
                    <input type="text" class="form-control" id="" aria-describedby="">
                  </div>
                  <label for="exampleInputEmail1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Number</label>
                  <input type="number" class="form-control" id="exampleInputPassword1">
                </div>
                <div class="mb-3">
                   <label for="exampleInputPassword1" class="form-label">Address</label>
                    <input type="text" class="form-control mb-2" id="exampleInputPassword1" placeholder="street address">
                    <input type="text" class="form-control" id="exampleInputPassword1"
                        placeholder="suite, Apt, unit, building, flooer, etc. address"/>
                </div>
                <div class="row mb-2">
                  <div class="col-md-6">
                       <label for="validationCustom04" class="form-label">State</label>
                        <select class="form-select" id="validationCustom04" required>
                        <option selected disabled value="">Choose...</option>
                        <option>...</option>
                        </select>
                        <div class="invalid-feedback">
                        Please select a valid state.
                        </div>
                  </div>
                 <div class="col-md-6">
                        <label for="validationCustom05" class="form-label">City</label>
                        <input type="text" class="form-control" id="validationCustom05">
                  </div>
                  <div class="col-md-6">
                        <label for="validationCustom05" class="form-label">Zip Code</label>
                        <input type="number" class="form-control" id="validationCustom05">
                  </div>
                  <div class="col-12 mt-2">
                        <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">Make this my default address</label>
                        </div>
                  </div>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>`;
    }

    if (template == "tem_survey") {
        html += `<form class="row g-3 text-start">
                <div class="col-md-6">
                  <label for="inputEmail4" class="form-label">First Name</label>
                  <input type="text" class="form-control" id="">
                </div>
                <div class="col-md-6">
                  <label for="inputPassword4" class="form-label">Last Name</label>
                  <input type="text" class="form-control" id="">
                </div>
                <div class="col-12">
                  <label for="" class="form-label">Address</label>
                  <input type="text" class="form-control" id="" placeholder="1234 Main St">
                </div>
                <div class="col-md-3">
                  <label for="" class="form-label">City</label>
                  <input type="text" class="form-control" id="">
                </div>
                <div class="col-md-3">
                  <label for="" class="form-label">State</label>
                  <select id="" class="form-select">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div class="col-md-3">
                  <label for="" class="form-label">Country</label>
                  <select id="" class="form-select">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div class="col-md-3">
                  <label for="inputZip" class="form-label">Zip</label>
                  <input type="text" class="form-control" id="">
                </div>
                <div class="col-md-12">
                  <label for="" class="form-label">Phone</label>
                  <input type="number" class="form-control" id="">
                </div>
                <div class="col-md-12">
                  <label for="" class="form-label">Email Address</label>
                  <input type="email" class="form-control" id="">
                </div>
                <div class="col-12">
                  <p>How was your experiance ?</p>
                  <div>
                    <input type="radio" name="experiance">
                    <span>Good</span>
                  </div>
                  <div>
                    <input type="radio" name="experiance">
                    <span>Bad</span>
                  </div>
                  <div>
                    <input type="radio" name="experiance">
                    <span>Very good</span>
                  </div>
                  <div>
                    <input type="radio" name="experiance">
                    <span>Worst</span>
                  </div>
                </div>
                <div class="col-12">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </form>`;
    }

    if (template == "tem_countdown") {
        html += `<div class="text-center">
                    <div id="countdown">
                       <ul class="ps-0 d-flex list-unstyled gap-2 justify-content-center">
                          <li><div id="days"></div><span>days</span></li>
                          <li><div id="hours"></div><span>Hours</span></li>
                          <li><div id="minutes"></div><span>Minutes</span></li>
                          <li><div id="seconds"></div><span>Seconds</span></li>
                        </ul>
                    </div>
                </div>`;
    }

    if (template == "tem_minutetimer") {
        html += '<div><span id="timer">01:01</span></div>';

    }

    if (template == "tem_icon") {
        html += '';
    }

    if (template == "tem_image_feature") {
        html += `<div class="card">
                <img src="./img/face1.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <p class="card-text text-dark">Some quick example text to build on the card title and make up the bulk
                    of the card's content.</p>
                </div>`;
    }

    if (template == "tem_navigation") {
        html += `<div>
                    <div>
                     <input type="text" name="" id="" class="form-control mb-2" placeholder="Enter Address">
                    </div>
                    <div class="overflow-hidden col-12">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14895.672058127486!2d79.03059214999999!3d21.0359662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1681992392860!5m2!1sen!2sin"  width="100%" height="auto" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                   </div>
                </div>`;
    }

    if (template == "tem_faq") {
        html += `<div class="accordion FAQ-accordian" id="accordionPanelsStayOpenExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseOne">
                      <span class="badge">1</span> What is loren ipsum?
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show"
                    aria-labelledby="panelsStayOpen-headingOne">
                    <div class="accordion-body">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                      been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                      galley of type and scrambled it to make a type specimen book.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseTwo">
                      <span class="badge">2</span> Where does it come from?
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingTwo">
                    <div class="accordion-body">
                      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
                      of classical Latin literature from 45 BC, making it over 2000 years old.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseThree">
                      <span class="badge">3</span> Why do we use it?
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingThree">
                    <div class="accordion-body">
                      It is a long established fact that a reader will be distracted by the readable content of a
                      page when looking at its layout. The point of using Lorem Ipsum is that it has a
                      more-or-less normal distribution of letters, as opposed to using 'Content here, content
                      here.
                    </div>
                  </div>
                </div>
              </div>`;
    }

    if (template == "tem_divider") {
        html += '<div class="hr" />';
    }

    if (template == "tem_progress_bar") {
        html += `<div class="progress">
                    <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
               </div>`;
    }

    if (template == "tem_image_list") {
        html += `<ul class="list-group list-one">
                <li class="list-group-item"><img src="https://images.pexels.com/photos/12629063/pexels-photo-12629063.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" class="img-fluid" alt="...">List1</li>
                <li class="list-group-item"><img src="https://images.pexels.com/photos/12629063/pexels-photo-12629063.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" class="img-fluid" alt="...">List2</li>
                <li class="list-group-item"><img src="https://images.pexels.com/photos/12629063/pexels-photo-12629063.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" class="img-fluid" alt="...">List3</li>
                <li class="list-group-item"><img src="https://images.pexels.com/photos/12629063/pexels-photo-12629063.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" class="img-fluid" alt="...">List4</li>
                <li class="list-group-item"><img src="https://images.pexels.com/photos/12629063/pexels-photo-12629063.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" class="img-fluid" alt="...">List15</li>
              </ul>`;
    }

    if (template == "tem_pricing_table") {
        html += `<div class="col">
                <div class="pricing-card">
                  <h3 class="pricing-card-header">Basic</h3>
                  <div class="price">Free</div>
                  <ul class="list-unstyled">
                    <li>Unlimited Data Transfer</li>
                    <li>25,000 monthly visits</li>
                    <li><strong>1</strong>Emial Support</li>
                    <li>20GB Local Storage</li>
                    <li><strong>1x</strong> CPU & RAM</li>
                  </ul>
                  <a href="#" class="order-btn">Order Now</a>
                </div>
              </div>
              <div class="col">
                <div class="pricing-card">
                  <h3 class="pricing-card-header">Startup</h3>
                  <div class="price"><sup>$</sup>15<span>/MO</span></div>
                  <ul class="list-unstyled">
                    <li>Unlimited Data Transfer</li>
                    <li>25,000 monthly visits</li>
                    <li><strong>1</strong>Emial Support</li>
                    <li>20GB Local Storage</li>
                    <li><strong>1x</strong> CPU & RAM</li>
                  </ul>
                  <a href="#" class="order-btn">Order Now</a>
                </div>
              </div>`;
    }

    if (template == "tem_social_share") {
        html += `<div class="d-flex gap-2">
                    <div>
                      <a href=""><i class="fa-brands fa-instagram"></i></a>
                    </div>
                    <div>
                      <a href=""><i class="fa-solid fa-share-nodes"></i></a>
                    </div>
                    <div>
                      <a href=""><i class="fa-brands fa-facebook"></i></a>
                    </div>
                </div>`;
    }



    if (template == "tem_privacy_notice") {
        html += `<div id="editor_div">
                    <form method="" >
                    <textarea id="text_editor" class="form-control"  name="text_editor"></textarea>
                      <button type="submit" class=" btn btn-primary mt-2">Submit</button>
                    </form>
                </div>`;
    }

    if (template == "tem_fb_comments") {
        html += `<div class="avatar_comment col-sm-1 mb-2">
                    <img src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg" alt="avatar" />
                  </div>
                  <div class="box_comment col-sm-11">
                    <textarea class="commentar" placeholder="Add a comment..."></textarea>
                    <div class="box_post">
                      <div class="form-check float-start">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault"> Also post on facebook </label>
                      </div>
                      <div class="float-end">
                        <button type="button" class="btn btn-primary">Post</button>
                      </div>
                    </div>
                </div>`;
    }

    if (template == "tem_text_block") {
        html += '<textarea name="" id="" cols="30" rows="10" class="form-control"></textarea>';
    }

    if (template == "tem_custom_js_html") {
        html += ` <div class="col-12">
        <h3>
         Custom editore
        </h3>
        <div class="col-inner1">
         <div id="codeEditor">function foo(items) {
           var x = "All this is syntax highlighted";
           return x;
       }</div>
        </div>
      </div>`;
    }

    return html;
}

function getElementPreviewHtml(template, id) {

    var html = '';

    if(template == "tem_headline"){
        html +=`<h1 id="element_preview_editor`+id+`" class="ne elHeadline hsSize3 lh4 elMargin0 elBGStyle0 hsTextShadow0" style="text-align: center;font-size: 32px" data-bold="inherit" data-gramm="false" contenteditable="false">
                <b>Large Call to Action Headline</b>
              </h1>`;
    }
    if(template == "tem_sub_headline"){
        html +=`<h2 id="element_preview_editor`+id+`" class="ne elHeadline hsSize2 lh3 elMargin0 elBGStyle0 hsTextShadow0" style="text-align: center;font-size: 23px" data-bold="inherit" data-gramm="false">
                  Small Call to Action Headline
                </h2>`;
    }
     if(template == "tem_paragraph"){
        html +=`<p id="element_preview_editor`+id+`"  >
                   P Tag
                </p>`;
    }
    if(template == "tem_bullet_line"){
        
        html +=`<div id="element_preview_editor`+id+`"  ><ul>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                </ul><div>`;
    }
    if(template == "tem_quotes"){

        html += `<div id="element_preview_editor` + id + `"  ><ul>
                    <figure class="text-start">
                    <blockquote class="blockquote">
                    <p>A well-known quote, contained in a blockquote element.</p>
                    </blockquote>
                    <figcaption class="blockquote-footer">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                    </figcaption>
                </figure>
                 </ul><div>`;
    }

    if(template == "tem_image"){
        
        html += `<img src="https://via.placeholder.com/350x150/e1e5e6/6d7b8b?text=Demo+Image" class="img-fluid">`;
    }
    if(template == "tem_imagepopup"){
        
        html += `<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#imagePopupModal">
                Image Popup
              </button>`;
    }

    if(template == "tem_video"){
        
        html +=`<div class="text-end">
                    <input id="file" type="file" accept="video/mp4,video/mkv, video/x-m4v,video/*" class="mb-2">
                </div>
             <video id="video"></video>`;
    }

    if(template == "tem_videopopup"){
        
        html +=`<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#videoPopupModal">
                    Video Popup
                  </button>`;
    }

    if(template == "tem_audioplayer"){
        
        html +=`<audio controls>
                    <source src="https://www.w3schools.com/TagS/horse.ogg" type="audio/ogg">
                </audio>`;
    }


    if(template == "tem_button"){
        
        html +=`<button type="button" class="btn btn-primary edit-on-click">Primary</button>
                <br>
                <div class="controls-update" style="display:none;"> <a href="#">update</a></div>`;
    }

    if(template == "tem_fbbutton"){
        html +=`<div>
                    <a href=""><i class="fa-brands fa-facebook"></i></a>
                </div>`;
    }

    if(template == "tem_input"){
        html +='<input type="text" class="form-control mb-1" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping">';
    }

    if(template == "tem_selectbox"){
        $("#select_input_setting").removeClass("hide");
        html +=`<select class="form-select mb-1" aria-label="Default select example">
                    <option selected></option>
                    <option value="1"></option>
                    <option value="2"></option>
                    <option value="3"></option>
                 </select>`;
    }
    if(template == "tem_textarea"){
        $("#textarea_setting").removeClass("hide");
        html +='<textarea class="form-control mb-1" id="area1" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>';
    }
    if(template == "tem_checkbox"){
        html +=`<div class="form-check">
                        <div class="editor7 d-flex">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="flexCheckDefault">
                                Default checkbox
                            </label>
                        </div>
                </div>`;
    }

    if(template == "tem_smssignup"){
        html +=`<form class="text-start">
                <div class="mb-3">
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Name</label>
                    <input type="text" class="form-control" id="" aria-describedby="">
                  </div>
                  <label for="exampleInputEmail1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Number</label>
                  <input type="number" class="form-control" id="exampleInputPassword1">
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>`;
    }
       
    if(template == "tem_billingadd"){
        html +=`<form class="text-start">
                <div class="mb-3">
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Fullname</label>
                    <input type="text" class="form-control" id="" aria-describedby="">
                  </div>
                  <label for="exampleInputEmail1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Number</label>
                  <input type="number" class="form-control" id="exampleInputPassword1">
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Address</label>
                  <input type="text" class="form-control mb-2" id="exampleInputPassword1" placeholder="street address">
                  <input type="text" class="form-control" id="exampleInputPassword1"
                    placeholder="suite, Apt, unit, building, flooer, etc. address">
                </div>
                <div class="row mb-2">
                  <div class="col-md-4">
                    <label for="validationCustom04" class="form-label">State</label>
                    <select class="form-select" id="validationCustom04" required>
                      <option selected disabled value="">Choose...</option>
                      <option>...</option>
                    </select>
                    <div class="invalid-feedback">
                      Please select a valid state.
                    </div>
                  </div>
                  <div class="col-md-4">
                    <label for="validationCustom05" class="form-label">City</label>
                    <input type="text" class="form-control" id="validationCustom05">
                  </div>
                  <div class="col-md-4">
                    <label for="validationCustom05" class="form-label">Zip Code</label>
                    <input type="number" class="form-control" id="validationCustom05">
                  </div>
                </div>
                button type="submit" class="btn btn-primary">Submit</button>
              </form>`;
    }
       
    if(template == "tem_shippingadd"){
        html +=`<form class="text-start">
                <div class="mb-3">
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Fullname</label>
                    <input type="text" class="form-control" id="" aria-describedby="">
                  </div>
                  <label for="exampleInputEmail1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Number</label>
                  <input type="number" class="form-control" id="exampleInputPassword1">
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Address</label>
                  <input type="text" class="form-control mb-2" id="exampleInputPassword1" placeholder="street address">
                  <input type="text" class="form-control" id="exampleInputPassword1"
                    placeholder="suite, Apt, unit, building, flooer, etc. address
                </div>
                <div class="row mb-2 d-flex">
                        <div class="col-md-6">
                                <label for="validationCustom04" class="form-label">State</label>
                                <select class="form-select" id="validationCustom04" required>
                                <option selected disabled value="">Choose...</option>
                                <option>...</option>
                                </select>
                                <div class="invalid-feedback">
                                Please select a valid state.
                                </div>
                        </div>
                        <div class="col-md-6">
                                <label for="validationCustom05" class="form-label">City</label>
                                <input type="text" class="form-control" id="validationCustom05">
                        </div>
                        <div class="col-md-6">
                                <label for="validationCustom05" class="form-label">Zip Code</label>
                                <input type="number" class="form-control" id="validationCustom05">
                        </div>
                    <div class="col-12 mt-2">
                      <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                            <label class="form-check-label" for="exampleCheck1">Make this my default address</label>
                      </div>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>`;
    }
       
    if(template == "tem_survey"){
        html +=`<form class="row g-3 text-start">
                <div class="col-md-6">
                  <label for="inputEmail4" class="form-label">First Name</label>
                  <input type="text" class="form-control" id="">
                </div>
                <div class="col-md-6">
                  <label for="inputPassword4" class="form-label">Last Name</label>
                  <input type="text" class="form-control" id="">
                </div>
                <div class="col-12">
                  <label for="" class="form-label">Address</label>
                  <input type="text" class="form-control" id="" placeholder="1234 Main St">
                </div>
                <div class="col-md-3">
                  <label for="" class="form-label">City</label>
                  <input type="text" class="form-control" id="">
                </div>
                <div class="col-md-3">
                  <label for="" class="form-label">State</label>
                  <select id="" class="form-select">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div class="col-md-3">
                  <label for="" class="form-label">Country</label>
                  <select id="" class="form-select">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div class="col-md-3">
                  <label for="inputZip" class="form-label">Zip</label>
                  <input type="text" class="form-control" id="">
                </div>
                <div class="col-md-12">
                  <label for="" class="form-label">Phone</label>
                  <input type="number" class="form-control" id="">
                </div>
                <div class="col-md-12">
                  <label for="" class="form-label">Email Address</label>
                  <input type="email" class="form-control" id="">
                </div>
                <div class="col-12">
                  <p>How was your experiance ?</p>
                  <div>
                    <input type="radio" name="experiance">
                    <span>Good</span>
                  </div>
                  <div>
                    <input type="radio" name="experiance">
                    <span>Bad</span>
                  </div>
                  <div>
                    <input type="radio" name="experiance">
                    <span>Very good</span>
                  </div>
                  <div>
                    <input type="radio" name="experiance">
                    <span>Worst</span>
                  </div>
                </div>
                <div class="col-12">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </form>`;
    }
       
    if(template == "tem_countdown"){
        html +=`<div class="text-center">
                    <div id="countdown">
                        <ul class="ps-0 d-flex list-unstyled gap-2 justify-content-center">
                            <li><div id="days"></div><span>days</span></li>
                            <li><div id="hours"></div><span>Hours</span></li>
                            <li><div id="minutes"></div><span>Minutes</span></li>
                            <li><div id="seconds"></div><span>Seconds</span></li>
                        </ul>
                    </div>
                </div>`;
    }
       
    if(template == "tem_minutetimer"){
        html += '<div><span id="timer">01:01</span></div>';
        
    }
       
    if(template == "tem_icon"){
        html +='';
    }
       
    if(template == "tem_image_feature"){
        html += `<div class="card">
                <img src="./img/face1.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <p class="card-text text-dark">Some quick example text to build on the card title and make up the bulk
                    of the card's content.</p>
                </div>`;
    }
       
    if(template == "tem_navigation"){
        html +=`<div>
                    <div>
                     <input type="text" name="" id="" class="form-control mb-2" placeholder="Enter Address">
                    </div>
                    <div class="overflow-hidden col-12">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14895.672058127486!2d79.03059214999999!3d21.0359662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1681992392860!5m2!1sen!2sin"  width="100%" height="auto" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                   </div>
                </div>`;
    }
       
    if(template == "tem_faq"){
        html +=`<div class="accordion FAQ-accordian" id="accordionPanelsStayOpenExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseOne">
                      <span class="badge">1</span> What is loren ipsum?
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show"
                    aria-labelledby="panelsStayOpen-headingOne">
                    <div class="accordion-body">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                      been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                      galley of type and scrambled it to make a type specimen book.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseTwo">
                      <span class="badge">2</span> Where does it come from?
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingTwo">
                    <div class="accordion-body">
                      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
                      of classical Latin literature from 45 BC, making it over 2000 years old.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseThree">
                      <span class="badge">3</span> Why do we use it?
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingThree">
                    <div class="accordion-body">
                      It is a long established fact that a reader will be distracted by the readable content of a
                      page when looking at its layout. The point of using Lorem Ipsum is that it has a
                      more-or-less normal distribution of letters, as opposed to using 'Content here, content
                      here.
                    </div>
                  </div>
                </div>
              </div>`;
    }
       
    if(template == "tem_divider"){
        html +='<div class="hr" />';
    }
       
    if(template == "tem_progress_bar"){
        html +=`<div class="progress">
                    <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
               </div>`;
    }
       
    if(template == "tem_image_list"){
        html +=`<ul class="list-group list-one">
                <li class="list-group-item"><img src="https://images.pexels.com/photos/12629063/pexels-photo-12629063.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" class="img-fluid" alt="...">List1</li>
                <li class="list-group-item"><img src="https://images.pexels.com/photos/12629063/pexels-photo-12629063.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" class="img-fluid" alt="...">List2</li>
                <li class="list-group-item"><img src="https://images.pexels.com/photos/12629063/pexels-photo-12629063.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" class="img-fluid" alt="...">List3</li>
                <li class="list-group-item"><img src="https://images.pexels.com/photos/12629063/pexels-photo-12629063.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" class="img-fluid" alt="...">List4</li>
                <li class="list-group-item"><img src="https://images.pexels.com/photos/12629063/pexels-photo-12629063.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" class="img-fluid" alt="...">List15</li>
              </ul>`;
    }
     
    if(template == "tem_pricing_table"){
        html +=`<div class="col">
                <div class="pricing-card">
                  <h3 class="pricing-card-header">Basic</h3>
                  <div class="price">Free</div>
                  <ul class="list-unstyled">
                    <li>Unlimited Data Transfer</li>
                    <li>25,000 monthly visits</li>
                    <li><strong>1</strong>Emial Support</li>
                    <li>20GB Local Storage</li>
                    <li><strong>1x</strong> CPU & RAM</li>
                  </ul>
                  <a href="#" class="order-btn">Order Now</a>
                </div>
              </div>
              <div class="col">
                <div class="pricing-card">
                  <h3 class="pricing-card-header">Startup</h3>
                  <div class="price"><sup>$</sup>15<span>/MO</span></div>
                  <ul class="list-unstyled">
                    <li>Unlimited Data Transfer</li>
                    <li>25,000 monthly visits</li>
                    <li><strong>1</strong>Emial Support</li>
                    <li>20GB Local Storage</li>
                    <li><strong>1x</strong> CPU & RAM</li>
                  </ul>
                  <a href="#" class="order-btn">Order Now</a>
                </div>
              </div>`;
    }

    if(template == "tem_social_share"){
        html +=`<div  class="d-flex gap-2">
                    <div>
                      <a href=""><i class="fa-brands fa-instagram"></i></a>
                    </div>
                    <div>
                      <a href=""><i class="fa-solid fa-share-nodes"></i></a>
                    </div>
                    <div>
                      <a href=""><i class="fa-brands fa-facebook"></i></a>
                    </div>
                </div>`;
    }
       
    
       
    if(template == "tem_privacy_notice"){
        html +=`<div id="editor_div">
                    <form method="" >
                      <textarea id="text_editor" class="form-control"   name="text_editor"></textarea>
                      <button type="submit" class=" btn btn-primary mt-2">Submit</button>
                    </form>
                </div>`;
    }
       
    if(template == "tem_fb_comments"){
        html += `<div class="avatar_comment col-sm-1 mb-2">
                    <img src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg" alt="avatar" />
                  </div>
                  <div class="box_comment col-sm-11">
                    <textarea class="commentar" placeholder="Add a comment..."></textarea>
                    <div class="box_post">
                      <div class="form-check float-start">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault"> Also post on facebook </label>
                      </div>
                      <div class="float-end">
                        <button type="button" class="btn btn-primary">Post</button>
                      </div>
                    </div>
                </div>`;
    }
       
    if(template == "tem_text_block"){
        html +='<textarea name="" id="" cols="30" rows="10" class="form-control"></textarea>';
    }
       
    if(template == "tem_custom_js_html"){
        html += ` <div class="col-12">
    //     <h3>
    //      Custom editore
    //     </h3>
    //     <div class="col-inner1">
    //      <div id="codeEditor">function foo(items) {
    //        var x = "All this is syntax highlighted";
    //        return x;
    //    }</div>
    //     </div>
    //   </div>`;
    }
    
    return html; 

}


function getUniqueId() {
    //var uniq = (new Date()).getTime();
    var uniq = Date.now().toString(36) + Math.random().toString(36).substr(2);
    return uniq;
}

function setColor(type, parent_key, id, event) {
    console.log("here input changes trigger");
    console.log($(this));
    var type = type;
    var input_id = id;
    var parent_key = parent_key;
    var value = event.value;
    console.log(input_id);
    console.log(value);
    console.log(parent_key);
    var settings_for_id = $("#right-panel").attr('settings-for');
    var settings_for_name = $("#right-panel").attr('settings-for-name');
    var settings_pos = $("#right-panel").attr('settings-pos');
    var parent_type = $("#right-panel").attr('parent-type');
    var settings_element = $("#right-panel").attr('settings-element');

    console.log("settings for id --" + settings_for_id);
    console.log("settings for name " + settings_for_name);
    console.log("settings uid " + settings_pos);
    console.log("settings element " + settings_element);
    console.log("type " + type);
    console.log("preview div id==  #" + settings_for_name + "-preview" + settings_for_id);
    console.log("div id== #" + settings_for_name + settings_for_id);

    if (input_id == 'bg-color') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("background-color", value);
        $("#" + settings_for_name + settings_for_id).children(":first").css("background-color", value);
    }
    if (input_id == 'text-color') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("color", value);
        $("#" + settings_for_name + settings_for_id).children(":first").css("color", value);
    }
    if (input_id == 'border-color') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("border", "5px solid " + value);
        $("#" + settings_for_name + settings_for_id).children(":first").css("border", "5px solid " + value);
    }

    /*
    if(parent_type =="section"){
        if (input_id == 'bg-color') {
            $("#main-container-preview" + settings_pos).children(":first").css("background-color", value);
            $("#main-container" + settings_pos).children(":first").css("background-color", value);
        }
        if (input_id == 'text-color') {
            $("#main-container-preview" + settings_pos).css("color", value);
            $("#main-container" + settings_pos).children(":first").css("color", value);
        }
        if (input_id == 'border-color') {
            $("#main-container-preview" + settings_pos).css("border", "5px solid " + value);
            $("#main-container" + settings_pos).children(":first").css("border", "5px solid " + value);
        }
    }
    
    if(parent_type =="row"){
        if (input_id == 'bg-color') {
            $("#row-container-preview" + settings_pos).children(":first").css("background-color", value);
            $("#row-container" + settings_pos).children(":first").css("background-color", value);
        }
        if (input_id == 'text-color') {
            $("#row-container-preview" + settings_pos).children(":first").css("color", value);
            $("#row-container" + settings_pos).children(":first").css("color", value);
        }
        if (input_id == 'border-color') {
            $("#row-container-preview" + settings_pos).children(":first").css("border", "5px solid " + value);
            $("#row-container" + settings_pos).children(":first").css("border", "5px solid " + value);
        }
    }
    */


    console.log("#" + settings_element);
    var setting_values = $("#" + settings_element).attr('setting_values');
    console.log("++setting values==" + setting_values);
    var objData = {}
    if (setting_values != "" && setting_values != 'undefined') {
        objData = JSON.parse(setting_values);
        console.log("setting values--");
        console.log(objData);

        if (objData.hasOwnProperty(parent_key)) {
            console.log("key present " + parent_key);
            console.log("key data " + objData[parent_key]);
            console.log("input id " + input_id);

            if (objData[parent_key].hasOwnProperty(input_id)) {
                $.each(objData[parent_key], function (key, objvalue) {
                    console.log("key:" + key);
                    console.log("input id: " + input_id);
                    if (key == input_id) {
                        console.log(objData[parent_key][input_id]);
                        console.log(objData[parent_key][input_id]);
                        objData[parent_key][input_id] = value;
                    }
                    //                            console.log( key + ": " + value );
                });
                //                        objData.parent_key.input_id = value;

            } else {
                console.log("in else ");//                        
                objData[parent_key][input_id] = value;
            }
        } else {
            console.log("in parent key not present else ");
            //if key not present then create its object fist 
            if (objData[parent_key] == undefined) {
                objData[parent_key] = {}
            }
            objData[parent_key][input_id] = value;
        }
    } else {
        console.log("in setting else ");
        //if key not present then create its object fist
        if (objData[parent_key] == undefined) {
            objData[parent_key] = {}
        }
        objData[parent_key][input_id] = value;
    }
    console.log(objData);
    console.log(JSON.stringify(objData));
    $("#" + settings_element).attr('setting_values', JSON.stringify(objData));

}

function addHeadParaElement(event, template){
    
    var type = $("#choose_elements_dialog").attr('type');
        var type_id = $("#choose_elements_dialog").attr('type-id');
        var section_id = $("#choose_elements_dialog").attr('section-id');
        var section_unid = $("#choose_elements_dialog").attr('section-unid');
//        var template = $("#choose_elements_dialog").attr('template');
        var column = $("#choose_elements_dialog").attr('column');
        var element_unid = $("#choose_elements_dialog").attr('element-unid');
        var element_id = $("#choose_elements_dialog").attr('element-id');
        console.log("Add element clicked");
        console.log("type id ===="+type_id);
        console.log(section_id);
        console.log(section_unid);
        console.log(type_id);
        console.log(element_unid);
        console.log("check this==="+element_unid);

        $("#add-element-settings-"+element_unid).attr("element_type",template);
        var elementhtml = getElementHtml(template,element_unid);
        var elementPreviewhtml = getElementPreviewHtml(template,element_unid);
        
        $(elementhtml).insertAfter("#"+element_id);
        $(elementPreviewhtml).insertAfter("#add-element-preview"+element_unid);
        
        $("#add-element-preview"+element_unid).parent().css("background-color","transparent");
        $("#add-element-preview"+element_unid).remove();
        $("#"+type_id).remove();
        $('#addNewElement').modal('hide');
        $("#element-container"+element_unid +" .add-element").remove();
        
        call_Inlineeditor_onchange(element_unid);

}

function addColumns(event, count) {
    console.log("in add row columns");
    var type = $("#choose_columns_dialog").attr('type');
    var type_id = $("#choose_columns_dialog").attr('type-id');
    var section_id = $("#choose_columns_dialog").attr('section-id');
    var section_unid = $("#choose_columns_dialog").attr('section-unid');
    var parent_div = $("#choose_columns_dialog").attr('parent-div');
    var row_unid = $("#choose_columns_dialog").attr('row-unid');

    console.log(type);
    console.log(type_id);
    console.log(section_id);
    console.log(section_unid);
    console.log("parent div " + parent_div);
    console.log("row unid " + row_unid);

    var column_count = count;
    var uniqueid = getUniqueId();

    var columns_unid_arr = [];

    for (var i = 0; i < column_count; i++) {
        columns_unid_arr.push(getUniqueId());
    }

    console.log("column unid arr--");
    console.log(columns_unid_arr);
    console.log("====");

    var columnhtml = getColumnsHtml(uniqueid, column_count, section_unid, section_id, columns_unid_arr);
    var columnPreviewhtml = getRowColumnsPreviewHtml(uniqueid, column_count, section_unid, section_id, columns_unid_arr);

    if (parent_div == "") {
        console.log("parent div not present");
        $(columnhtml).insertAfter("#" + type_id);
        $(columnPreviewhtml).insertAfter("#add-row-preview" + section_unid);
    } else {
        console.log("parent div prresent");
        $(columnhtml).insertAfter("#" + parent_div + row_unid);
        $(columnPreviewhtml).insertAfter("#row-container-preview" + row_unid);
    }


    //    $(columnhtml).insertAfter("#"+type_id);
    //    $(columnPreviewhtml).insertAfter("#add-row-preview"+section_unid);


    $("#add-row-preview" + section_unid).remove();
    $("#" + type_id).remove();

    $('#addRowModal').modal('hide');
}


function addColumns(event, count) {
    console.log("in add row columns");
    var type = $("#choose_columns_dialog").attr('type');
    var type_id = $("#choose_columns_dialog").attr('type-id');
    var section_id = $("#choose_columns_dialog").attr('section-id');
    var section_unid = $("#choose_columns_dialog").attr('section-unid');
    var parent_div = $("#choose_columns_dialog").attr('parent-div');
    var row_unid = $("#choose_columns_dialog").attr('row-unid');

    console.log(type);
    console.log(type_id);
    console.log(section_id);
    console.log(section_unid);
    console.log("parent div " + parent_div);
    console.log("row unid " + row_unid);

    var column_count = count;
    var uniqueid = getUniqueId();

    var columns_unid_arr = [];

    for (var i = 0; i < column_count; i++) {
        columns_unid_arr.push(getUniqueId());
    }

    console.log("column unid arr--");
    console.log(columns_unid_arr);
    console.log("====");

    var columnhtml = getColumnsHtml(uniqueid, column_count, section_unid, section_id, columns_unid_arr);
    var columnPreviewhtml = getRowColumnsPreviewHtml(uniqueid, column_count, section_unid, section_id, columns_unid_arr);

    if (parent_div == "") {
        console.log("parent div not present");
        $(columnhtml).insertAfter("#" + type_id);
        $(columnPreviewhtml).insertAfter("#add-row-preview" + section_unid);
    } else {
        console.log("parent div prresent");
        $(columnhtml).insertAfter("#" + parent_div + row_unid);
        $(columnPreviewhtml).insertAfter("#row-container-preview" + row_unid);
    }


    //    $(columnhtml).insertAfter("#"+type_id);
    //    $(columnPreviewhtml).insertAfter("#add-row-preview"+section_unid);


    $("#add-row-preview" + section_unid).remove();
    $("#" + type_id).remove();

    $('#addRowModal').modal('hide');
}


$("body").on('click', ".addMoreColumn", function (event) {
    event.preventDefault();
    console.log("in add row columns");
    var type = $(this).attr('type');
    var type_id = $(this).attr('type-id');
    var element_id = $(this).attr('element-id');
    var element_unid = $(this).attr('element-unid');
    var section_id = $(this).attr('section-id');
    var section_unid = $(this).attr('section-unid');
    var row_unid = $(this).attr('row-id');

    console.log("====");
    console.log(type);
    console.log(type_id);
    console.log(element_id);
    console.log(element_unid);
    console.log(section_id);
    console.log(section_unid);
    console.log("row unid " + row_unid);

    var column_count = 1;
    var uniqueid = getUniqueId();

    console.log("uniqueid " + uniqueid);


    var columnhtml = getAddMoreColumnsHtml(row_unid, section_unid, section_id, uniqueid);
    var columnPreviewhtml = getAddMoreColumnsPreviewHtml(row_unid, section_unid, section_id, uniqueid);



    $(columnhtml).insertAfter("#" + element_id);
    $(columnPreviewhtml).insertAfter("#element-container-preview" + element_unid);


    //$("#add-row-preview"+section_unid).remove();
    //$("#"+type_id).remove();

    //$('#addRowModal').modal('hide');
});


function call_Inlineeditor_onchange(id){
    
    // Turn off automatic editor creation first.
   CKEDITOR.disableAutoInline = true;
   var editor_id = "editor"+id;
   var editor = CKEDITOR.inline(editor_id);
   console.log(editor);
   // The "change" event is fired whenever a change is made in the editor.
   editor.on( 'change', function( evt ) {
       // getData() returns CKEditor's HTML content.
       console.log( 'Total bytes: ' + evt.editor.getData() );
       $("#element_preview_editor"+id).html(evt.editor.getData());
   });
    
}

function addImageElement(event, template) {
    var type = $("#choose_elements_dialog").attr('type');
    var type_id = $("#choose_elements_dialog").attr('type-id');
    var section_id = $("#choose_elements_dialog").attr('section-id');
    var section_unid = $("#choose_elements_dialog").attr('section-unid');
    //        var template = $("#choose_elements_dialog").attr('template');
    var column = $("#choose_elements_dialog").attr('column');
    var element_unid = $("#choose_elements_dialog").attr('element-unid');
    var element_id = $("#choose_elements_dialog").attr('element-id');
    console.log("Add element clicked");
    console.log("type id ====" + type_id);
    console.log(section_id);
    console.log(section_unid);
    console.log(type_id);
    console.log(element_unid);

    $("#add-element-settings-" + element_unid).attr("element_type", template);

    var elementhtml = getElementHtml(template, section_id);
    var elementPreviewhtml = getElementPreviewHtml(template, section_id);
    $("#element-container" + element_unid + " .add-element").remove();

    $(elementhtml).insertAfter("#" + element_id);
    $(elementPreviewhtml).insertAfter("#add-element-preview" + element_unid);

    $("#add-element-preview" + element_unid).parent().css("background-color", "transparent");
    $("#add-element-preview" + element_unid).remove();
    $("#" + type_id).remove();
    $('#addNewElement').modal('hide');
}

function addVideoElement(event, template) {
    var type = $("#choose_elements_dialog").attr('type');
    var type_id = $("#choose_elements_dialog").attr('type-id');
    var section_id = $("#choose_elements_dialog").attr('section-id');
    var section_unid = $("#choose_elements_dialog").attr('section-unid');
    //        var template = $("#choose_elements_dialog").attr('template');
    var column = $("#choose_elements_dialog").attr('column');
    var element_unid = $("#choose_elements_dialog").attr('element-unid');
    var element_id = $("#choose_elements_dialog").attr('element-id');
    console.log("Add element clicked");
    console.log("type id ====" + type_id);
    console.log(section_id);
    console.log(section_unid);
    console.log(type_id);
    console.log(element_unid);

    $("#add-element-settings-" + element_unid).attr("element_type", template);

    var elementhtml = getElementHtml(template, section_id);
    var elementPreviewhtml = getElementPreviewHtml(template, section_id);

    $(elementhtml).insertAfter("#" + element_id);
    $(elementPreviewhtml).insertAfter("#add-element-preview" + element_unid);
    $("#element-container" + element_unid + " .add-element").remove();

    $("#add-element-preview" + element_unid).remove();
    $("#" + type_id).remove();
    $('#addNewElement').modal('hide');
}

function addAudioPlayerElement(event, template) {
    var type = $("#choose_elements_dialog").attr('type');
    var type_id = $("#choose_elements_dialog").attr('type-id');
    var section_id = $("#choose_elements_dialog").attr('section-id');
    var section_unid = $("#choose_elements_dialog").attr('section-unid');
    //        var template = $("#choose_elements_dialog").attr('template');
    var column = $("#choose_elements_dialog").attr('column');
    var element_unid = $("#choose_elements_dialog").attr('element-unid');
    var element_id = $("#choose_elements_dialog").attr('element-id');
    console.log("Add element clicked");
    console.log("type id ====" + type_id);
    console.log(section_id);
    console.log(section_unid);
    console.log(type_id);
    console.log(element_unid);

    $("#add-element-settings-" + element_unid).attr("element_type", template);

    var elementhtml = getElementHtml(template, section_id);
    var elementPreviewhtml = getElementPreviewHtml(template, section_id);
    $("#element-container" + element_unid + " .add-element").remove();

    $(elementhtml).insertAfter("#" + element_id);
    $(elementPreviewhtml).insertAfter("#add-element-preview" + element_unid);


    $("#add-element-preview" + element_unid).remove();
    $("#" + type_id).remove();
    $('#addNewElement').modal('hide');
}

function addFormElement(event, template) {
    var type = $("#choose_elements_dialog").attr('type');
    var type_id = $("#choose_elements_dialog").attr('type-id');
    var section_id = $("#choose_elements_dialog").attr('section-id');
    var section_unid = $("#choose_elements_dialog").attr('section-unid');
    //        var template = $("#choose_elements_dialog").attr('template');
    var column = $("#choose_elements_dialog").attr('column');
    var element_unid = $("#choose_elements_dialog").attr('element-unid');
    var element_id = $("#choose_elements_dialog").attr('element-id');
    console.log("Add element clicked");
    console.log("type id ====" + type_id);
    console.log(section_id);
    console.log(section_unid);
    console.log(type_id);
    console.log(element_unid);

    $("#add-element-settings-" + element_unid).attr("element_type", template);

    var elementhtml = getElementHtml(template, section_id);
    var elementPreviewhtml = getElementPreviewHtml(template, section_id);
    $("#element-container" + element_unid + " .add-element").remove();
    $(elementhtml).insertAfter("#" + element_id);
    $(elementPreviewhtml).insertAfter("#add-element-preview" + element_unid);


    $("#add-element-preview" + element_unid).remove();
    $("#" + type_id).remove();
    $('#addNewElement').modal('hide');
}

function setImageProperties(type, parent_key, id, event) {
    console.log("here input changes trigger");
    console.log($(this));
    var type = type;
    var input_id = id;
    var parent_key = parent_key;
    var value = event.value;
    console.log(input_id);
    console.log(value);
    console.log(parent_key);
    var settings_for_id = $("#right-panel").attr('settings-for');
    var settings_for_name = $("#right-panel").attr('settings-for-name');
    var settings_pos = $("#right-panel").attr('settings-pos');
    var parent_type = $("#right-panel").attr('parent-type');
    var settings_element = $("#right-panel").attr('settings-element');

    console.log("settings for id --" + settings_for_id);
    console.log("settings for name " + settings_for_name);
    console.log("settings uid " + settings_pos);
    console.log("settings element " + settings_element);
    console.log("type " + type);
    console.log("preview div id==  #" + settings_for_name + "-preview" + settings_for_id);
    console.log("div id== #" + settings_for_name + settings_for_id);

    if (input_id == 'image_alt_text') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").attr("alt", value);
        $("#" + settings_for_name + settings_for_id).children(":first").attr("alt", value);
    }
    if (input_id == 'image_height') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("height", value);
        $("#" + settings_for_name + settings_for_id).children(":first").css("height", value);
    }
    if (input_id == 'image_width') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("width", value);
        $("#" + settings_for_name + settings_for_id).children(":first").css("width", value);
    }
    if (input_id == 'image_url_target') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").attr("_target", value);
        $("#" + settings_for_name + settings_for_id).children(":first").attr("_target", value);
    }
    if (input_id == 'image_background_size') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("background-size", value);
        $("#" + settings_for_name + settings_for_id).children(":first").css("background-size", value);
    }
    if (input_id == 'image_background_repeat') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("background-repeat:", value);
        $("#" + settings_for_name + settings_for_id).children(":first").css("background-repeat", value);
    }
    if (input_id == 'image_background_attachment') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("background-attachment", value);
        $("#" + settings_for_name + settings_for_id).children(":first").css("background-attachment", value);
    }



    console.log("#" + settings_element);
    var setting_values = $("#" + settings_element).attr('setting_values');
    console.log("++setting values==" + setting_values);
    var objData = {}
    if (setting_values != "" && setting_values != 'undefined') {
        objData = JSON.parse(setting_values);
        console.log("setting values--");
        console.log(objData);

        if (objData.hasOwnProperty(parent_key)) {
            console.log("key present " + parent_key);
            console.log("key data " + objData[parent_key]);
            console.log("input id " + input_id);

            if (objData[parent_key].hasOwnProperty(input_id)) {
                $.each(objData[parent_key], function (key, objvalue) {
                    console.log("key:" + key);
                    console.log("input id: " + input_id);
                    if (key == input_id) {
                        console.log(objData[parent_key][input_id]);
                        console.log(objData[parent_key][input_id]);
                        objData[parent_key][input_id] = value;
                    }
                    //                            console.log( key + ": " + value );
                });
                //                        objData.parent_key.input_id = value;

            } else {
                console.log("in else ");//                        
                objData[parent_key][input_id] = value;
            }
        } else {
            console.log("in parent key not present else ");
            //if key not present then create its object fist 
            if (objData[parent_key] == undefined) {
                objData[parent_key] = {}
            }
            objData[parent_key][input_id] = value;
        }
    } else {
        console.log("in setting else ");
        //if key not present then create its object fist
        if (objData[parent_key] == undefined) {
            objData[parent_key] = {}
        }
        objData[parent_key][input_id] = value;
    }
    console.log(objData);
    console.log(JSON.stringify(objData));
    $("#" + settings_element).attr('setting_values', JSON.stringify(objData));

}


function setMarginAndPadding(type, parent_key, id, event) {
    console.log("here input changes trigger");
    console.log($(this));
    var type = type;
    var input_id = id;
    var parent_key = parent_key;
    var value = event.value;
    console.log("Dipali input_id--" + input_id);
    console.log(value);
    console.log(parent_key);
    var settings_for_id = $("#right-panel").attr('settings-for');
    var settings_for_name = $("#right-panel").attr('settings-for-name');
    var settings_pos = $("#right-panel").attr('settings-pos');
    var parent_type = $("#right-panel").attr('parent-type');
    var settings_element = $("#right-panel").attr('settings-element');

    console.log("settings for id --" + settings_for_id);
    console.log("settings for name " + settings_for_name);
    console.log("settings uid " + settings_pos);
    console.log("settings element " + settings_element);
    console.log("type " + type);
    console.log("preview div id==  #" + settings_for_name + "-preview" + settings_for_id);
    console.log("div id== #" + settings_for_name + settings_for_id);

    if (input_id == 'margin_top') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("margin-top", `${Number(value)}px`);
        $("#" + settings_for_name + settings_for_id).children(":first").css("margin-top", `${Number(value)}px`);
    }
    if (input_id == 'margin_bottom') {
        console.log("here in margin bottom");
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css({ "margin-bottom": `${Number(value)}px` });
        $("#" + settings_for_name + settings_for_id).children(":first").css({ "margin-bottom": `${Number(value)}px` });
    }
    if (input_id == 'margin_left') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("margin-left", `${Number(value)}px`);
        $("#" + settings_for_name + settings_for_id).children(":first").css("margin-left", `${Number(value)}px`);
    }
    if (input_id == 'margin_right') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("margin-right", `${Number(value)}px`);
        $("#" + settings_for_name + settings_for_id).children(":first").css("margin-right", `${Number(value)}px`);
    }
    if (input_id == 'margin_range') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("margin", `${Number(value)}px`);
        $("#" + settings_for_name + settings_for_id).children(":first").css("margin", `${Number(value)}px`);
        const marginValue = document.getElementById("marginValue");
        marginValue.innerHTML = `${value}px`;
    }

    if (input_id == 'padding_top') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("padding-top", `${Number(value)}px`);
        $("#" + settings_for_name + settings_for_id).children(":first").css("padding-top", `${Number(value)}px`);
    }
    if (input_id == 'padding_bottom') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("padding-bottom", `${Number(value)}px`);
        $("#" + settings_for_name + settings_for_id).children(":first").css("padding-bottom", `${Number(value)}px`);
    }
    if (input_id == 'padding_left') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("padding-left", `${Number(value)}px`);
        $("#" + settings_for_name + settings_for_id).children(":first").css("padding-left", `${Number(value)}px`);
    }
    if (input_id == 'padding_right') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("padding-right", `${Number(value)}px`);
        $("#" + settings_for_name + settings_for_id).children(":first").css("padding-right", `${Number(value)}px`);
    }
    if (input_id == 'padding_range') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("padding", `${Number(value)}px`);
        $("#" + settings_for_name + settings_for_id).children(":first").css("padding", `${Number(value)}px`);
        const paddingValue = document.getElementById("paddingValue");
        paddingValue.innerHTML = `${value}px`;
    }






    console.log("#" + settings_element);
    var setting_values = $("#" + settings_element).attr('setting_values');
    console.log("++setting values==" + setting_values);
    var objData = {}
    if (setting_values != "" && setting_values != 'undefined') {
        objData = JSON.parse(setting_values);
        console.log("setting values--");
        console.log(objData);

        if (objData.hasOwnProperty(parent_key)) {
            console.log("key present " + parent_key);
            console.log("key data " + objData[parent_key]);
            console.log("input id " + input_id);

            if (objData[parent_key].hasOwnProperty(input_id)) {
                $.each(objData[parent_key], function (key, objvalue) {
                    console.log("key:" + key);
                    console.log("input id: " + input_id);
                    if (key == input_id) {
                        console.log(objData[parent_key][input_id]);
                        console.log(objData[parent_key][input_id]);
                        objData[parent_key][input_id] = value;
                    }
                    //                            console.log( key + ": " + value );
                });
                //                        objData.parent_key.input_id = value;

            } else {
                console.log("in else ");//                        
                objData[parent_key][input_id] = value;
            }
        } else {
            console.log("in parent key not present else ");
            //if key not present then create its object fist 
            if (objData[parent_key] == undefined) {
                objData[parent_key] = {}
            }
            objData[parent_key][input_id] = value;
        }
    } else {
        console.log("in setting else ");
        //if key not present then create its object fist
        if (objData[parent_key] == undefined) {
            objData[parent_key] = {}
        }
        objData[parent_key][input_id] = value;
    }
    console.log(objData);
    console.log(JSON.stringify(objData));
    $("#" + settings_element).attr('setting_values', JSON.stringify(objData));

}

function setSizeAndPosition(type, parent_key, id, event) {
    console.log("here input changes trigger");
    console.log($(this));
    var type = type;
    var input_id = id;
    var parent_key = parent_key;
    var value = event.value;
    console.log(input_id);
    console.log(value);
    console.log(parent_key);
    var settings_for_id = $("#right-panel").attr('settings-for');
    var settings_for_name = $("#right-panel").attr('settings-for-name');
    var settings_pos = $("#right-panel").attr('settings-pos');
    var parent_type = $("#right-panel").attr('parent-type');
    var settings_element = $("#right-panel").attr('settings-element');

    // console.log("settings for id --" + settings_for_id);
    // console.log("settings for name " + settings_for_name);
    // console.log("settings uid " + settings_pos);
    // console.log("settings element " + settings_element);
    // console.log("type " + type);
    // console.log("preview div id==  #" + settings_for_name + "-preview" + settings_for_id);
    // console.log("div id== #" + settings_for_name + settings_for_id);
    console.log("value:-",value,"input_id:-",input_id)

    if (input_id == 'align_left') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("text-align", "left");
        $("#" + settings_for_name + settings_for_id).children(":first").css("text-align", "left");
        value = "left";
    }
    if (input_id == 'align_center') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("text-align", "center");
        $("#" + settings_for_name + settings_for_id).children(":first").css("text-align", "center");
        value = "center";
    }
    if (input_id == 'align_right') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("text-align", "right");
        $("#" + settings_for_name + settings_for_id).children(":first").css("text-align", "right");
        value = "right";
    }
    if (input_id == 'size_posotion_range') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("width", `${value}%`);
        $("#" + settings_for_name + settings_for_id).children(":first").css("width", `${value}%`);
           const widthValue = document.getElementById("widthValue");
        widthValue.innerHTML = `${value}%`
    }



    console.log("#" + settings_element);
    var setting_values = $("#" + settings_element).attr('setting_values');
    console.log("++setting values==" + setting_values);
    var objData = {}
    if (setting_values != "" && setting_values != 'undefined') {
        objData = JSON.parse(setting_values);
        console.log("setting values--");
        console.log(objData);

        if (objData.hasOwnProperty(parent_key)) {
            console.log("key present " + parent_key);
            console.log("key data " + objData[parent_key]);
            console.log("input id " + input_id);

            if (objData[parent_key].hasOwnProperty(input_id)) {
                $.each(objData[parent_key], function (key, objvalue) {
                    console.log("key:" + key);
                    console.log("input id: " + input_id);
                    if (key == input_id) {
                        console.log(objData[parent_key][input_id]);
                        console.log(objData[parent_key][input_id]);
                        objData[parent_key][input_id] = value;
                    }
                    //                            console.log( key + ": " + value );
                });
                //                        objData.parent_key.input_id = value;

            } else {
                console.log("in else ");//                        
                objData[parent_key][input_id] = value;
            }
        } else {
            console.log("in parent key not present else ");
            //if key not present then create its object fist 
            if (objData[parent_key] == undefined) {
                objData[parent_key] = {}
            }
            objData[parent_key][input_id] = value;
        }
    } else {
        console.log("in setting else ");
        //if key not present then create its object fist
        if (objData[parent_key] == undefined) {
            objData[parent_key] = {}
        }
        objData[parent_key][input_id] = value;
    }
    console.log(objData);
    console.log(JSON.stringify(objData));
    $("#" + settings_element).attr('setting_values', JSON.stringify(objData));

}


function setBorder(type, parent_key, id, event) {
    console.log("here input changes trigger");
    console.log($(this));
    var type = type;
    var input_id = id;
    var parent_key = parent_key;
    var value = event.value;
    console.log(input_id);
    // console.log(value);
    console.log(parent_key);
    var settings_for_id = $("#right-panel").attr('settings-for');
    var settings_for_name = $("#right-panel").attr('settings-for-name');
    var settings_pos = $("#right-panel").attr('settings-pos');
    var parent_type = $("#right-panel").attr('parent-type');
    var settings_element = $("#right-panel").attr('settings-element');

    // console.log("settings for id --" + settings_for_id);
    // console.log("settings for name " + settings_for_name);
    // console.log("settings uid " + settings_pos);
    // console.log("settings elem/ent " + settings_element);
    // console.log("type " + type);
    // console.log("preview div id==  #"+settings_for_name+"-preview" + settings_for_id);
    // console.log("div id== #"+settings_for_name+ settings_for_id);

    // console.log("value:-",value ,"input_id:-",input_id)

    // if (input_id == 'border') {
    //     $("#"+settings_for_name+"-preview" + settings_for_id).children(":first").css("background-color", value);
    //     $("#"+settings_for_name + settings_for_id).children(":first").css("background-color", value);
    // }

    console.log("border",value,"input_id:-",input_id)

    if (input_id == 'edit-block-style') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("border-style", `${value}`);
        $("#" + settings_for_name + settings_for_id).children(":first").css("border-style", `${value}`);
    }
    if (input_id == 'edit-block-border-width') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("border-width", `${value}`);
        $("#" + settings_for_name + settings_for_id).children(":first").css("border-width", `${value}`);
    }
    if (input_id == 'border_color') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("border-color", `${value}`);
        $("#" + settings_for_name + settings_for_id).children(":first").css("border-color", `${value}`);
    }
    if (input_id == 'border_range') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("border-radius", `${value}%`);
        $("#" + settings_for_name + settings_for_id).children(":first").css("border-radius", `${value}%`);
        const borderRadiusValue = document.getElementById("borderRadiusValue");
        borderRadiusValue.innerHTML = `${value}%`
    }
    if (input_id == 'border_top') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("border-top-width", `${value}px`);
        $("#" + settings_for_name + settings_for_id).children(":first").css("border-top-width", `${value}px`);
    }
    if (input_id == 'border_bottom') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("border-bottom-width", `${value}px`);
        $("#" + settings_for_name + settings_for_id).children(":first").css("border-bottom-width", `${value}px`);
    }
    if (input_id == 'border_left') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("border-left-width", `${value}px`);
        $("#" + settings_for_name + settings_for_id).children(":first").css("border-left-width", `${value}px`);
    }
    if (input_id == 'border_right') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("border-right-width", `${value}px`);
        $("#" + settings_for_name + settings_for_id).children(":first").css("border-right-width", `${value}px`);
    }


    console.log("#" + settings_element);
    var setting_values = $("#" + settings_element).attr('setting_values');
    console.log("++setting values==" + setting_values);
    var objData = {}
    if (setting_values != "" && setting_values != 'undefined') {
        objData = JSON.parse(setting_values);
        console.log("setting values--");
        console.log(objData);

        if (objData.hasOwnProperty(parent_key)) {
            console.log("key present " + parent_key);
            console.log("key data " + objData[parent_key]);
            console.log("input id " + input_id);

            if (objData[parent_key].hasOwnProperty(input_id)) {
                $.each(objData[parent_key], function (key, objvalue) {
                    console.log("key:" + key);
                    console.log("input id: " + input_id);
                    if (key == input_id) {
                        console.log(objData[parent_key][input_id]);
                        console.log(objData[parent_key][input_id]);
                        objData[parent_key][input_id] = value;
                    }
                    //                            console.log( key + ": " + value );
                });
                //                        objData.parent_key.input_id = value;

            } else {
                console.log("in else ");//                        
                objData[parent_key][input_id] = value;
            }
        } else {
            console.log("in parent key not present else ");
            //if key not present then create its object fist 
            if (objData[parent_key] == undefined) {
                objData[parent_key] = {}
            }
            objData[parent_key][input_id] = value;
        }
    } else {
        console.log("in setting else ");
        //if key not present then create its object fist
        if (objData[parent_key] == undefined) {
            objData[parent_key] = {}
        }
        objData[parent_key][input_id] = value;
    }
    console.log(objData);
    console.log(JSON.stringify(objData));
    $("#" + settings_element).attr('setting_values', JSON.stringify(objData));

}

function setButtonProperties(type, parent_key, id, event) {
    console.log("here input changes trigger");
    console.log($(this));
    var type = type;
    var input_id = id;
    var parent_key = parent_key;
    var value = event.value;
    console.log(input_id);
    console.log(value);
    console.log(parent_key);
    var settings_for_id = $("#right-panel").attr('settings-for');
    var settings_for_name = $("#right-panel").attr('settings-for-name');
    var settings_pos = $("#right-panel").attr('settings-pos');
    var parent_type = $("#right-panel").attr('parent-type');
    var settings_element = $("#right-panel").attr('settings-element');

    console.log("settings for id --" + settings_for_id);
    console.log("settings for name " + settings_for_name);
    console.log("settings uid " + settings_pos);
    console.log("settings element " + settings_element);
    console.log("type " + type);
    console.log("preview div id==  #" + settings_for_name + "-preview" + settings_for_id);
    console.log("div id== #" + settings_for_name + settings_for_id);

    if (input_id == 'button_text') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").html(value);
        $("#" + settings_for_name + settings_for_id).children(":first").html(value);
    }
    if (input_id == 'button_subtext') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").text(value);
        $("#" + settings_for_name + settings_for_id).children(":first").text(value);
    }
    if (input_id == 'button_arialabel') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").attr("aria-label", value);
        $("#" + settings_for_name + settings_for_id).children(":first").attr("aria-label", value);
    }
    if (input_id == 'button_fontfamily') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("font-family", value);
        $("#" + settings_for_name + settings_for_id).children(":first").css("font-family", value);
    }
    if (input_id == 'button_bgcolor') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("background-color", value);
        $("#" + settings_for_name + settings_for_id).children(":first").css("background-color", value);
    }
    if (input_id == 'button_textcolor') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("color", value);
        $("#" + settings_for_name + settings_for_id).children(":first").css("color", value);
    }



    console.log("#" + settings_element);
    var setting_values = $("#" + settings_element).attr('setting_values');
    console.log("++setting values==" + setting_values);
    var objData = {}
    if (setting_values != "" && setting_values != 'undefined') {
        objData = JSON.parse(setting_values);
        console.log("setting values--");
        console.log(objData);

        if (objData.hasOwnProperty(parent_key)) {
            console.log("key present " + parent_key);
            console.log("key data " + objData[parent_key]);
            console.log("input id " + input_id);

            if (objData[parent_key].hasOwnProperty(input_id)) {
                $.each(objData[parent_key], function (key, objvalue) {
                    console.log("key:" + key);
                    console.log("input id: " + input_id);
                    if (key == input_id) {
                        console.log(objData[parent_key][input_id]);
                        console.log(objData[parent_key][input_id]);
                        objData[parent_key][input_id] = value;
                    }
                    //                            console.log( key + ": " + value );
                });
                //                        objData.parent_key.input_id = value;

            } else {
                console.log("in else ");//                        
                objData[parent_key][input_id] = value;
            }
        } else {
            console.log("in parent key not present else ");
            //if key not present then create its object fist 
            if (objData[parent_key] == undefined) {
                objData[parent_key] = {}
            }
            objData[parent_key][input_id] = value;
        }
    } else {
        console.log("in setting else ");
        //if key not present then create its object fist
        if (objData[parent_key] == undefined) {
            objData[parent_key] = {}
        }
        objData[parent_key][input_id] = value;
    }
    console.log(objData);
    console.log(JSON.stringify(objData));
    $("#" + settings_element).attr('setting_values', JSON.stringify(objData));

}

function setInputProperties(type, parent_key, id, event) {
    console.log("here input changes trigger");
    console.log($(this));
    var type = type;
    var input_id = id;
    var parent_key = parent_key;
    var value = event.value;
    console.log(input_id);
    console.log(value);
    console.log(parent_key);
    var settings_for_id = $("#right-panel").attr('settings-for');
    var settings_for_name = $("#right-panel").attr('settings-for-name');
    var settings_pos = $("#right-panel").attr('settings-pos');
    var parent_type = $("#right-panel").attr('parent-type');
    var settings_element = $("#right-panel").attr('settings-element');

    console.log("settings for id --" + settings_for_id);
    console.log("settings for name " + settings_for_name);
    console.log("settings uid " + settings_pos);
    console.log("settings element " + settings_element);
    console.log("type " + type);
    console.log("preview div id==  #" + settings_for_name + "-preview" + settings_for_id);
    console.log("div id== #" + settings_for_name + settings_for_id);

    if (input_id == 'input_type') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("background-color", value);
        $("#" + settings_for_name + settings_for_id).children(":first").css("background-color", value);
    }
    if (input_id == 'input_placeholder') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").attr("placeholder", value);
        $("#" + settings_for_name + settings_for_id).children(":first").attr("placeholder", value);
    }
    if (input_id == 'input_required') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").attr("required", value);
        $("#" + settings_for_name + settings_for_id).children(":first").attr("required", value);
    }
    if (input_id == 'input_fontfamily') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("font-family", value);
        $("#" + settings_for_name + settings_for_id).children(":first").css("font-family", value);
    }



    console.log("#" + settings_element);
    var setting_values = $("#" + settings_element).attr('setting_values');
    console.log("++setting values==" + setting_values);
    var objData = {}
    if (setting_values != "" && setting_values != 'undefined') {
        objData = JSON.parse(setting_values);
        console.log("setting values--");
        console.log(objData);

        if (objData.hasOwnProperty(parent_key)) {
            console.log("key present " + parent_key);
            console.log("key data " + objData[parent_key]);
            console.log("input id " + input_id);

            if (objData[parent_key].hasOwnProperty(input_id)) {
                $.each(objData[parent_key], function (key, objvalue) {
                    console.log("key:" + key);
                    console.log("input id: " + input_id);
                    if (key == input_id) {
                        console.log(objData[parent_key][input_id]);
                        console.log(objData[parent_key][input_id]);
                        objData[parent_key][input_id] = value;
                    }
                    //                            console.log( key + ": " + value );
                });
                //                        objData.parent_key.input_id = value;

            } else {
                console.log("in else ");//                        
                objData[parent_key][input_id] = value;
            }
        } else {
            console.log("in parent key not present else ");
            //if key not present then create its object fist 
            if (objData[parent_key] == undefined) {
                objData[parent_key] = {}
            }
            objData[parent_key][input_id] = value;
        }
    } else {
        console.log("in setting else ");
        //if key not present then create its object fist
        if (objData[parent_key] == undefined) {
            objData[parent_key] = {}
        }
        objData[parent_key][input_id] = value;
    }
    console.log(objData);
    console.log(JSON.stringify(objData));
    $("#" + settings_element).attr('setting_values', JSON.stringify(objData));

}

function setTextAreaProperties(type, parent_key, id, event) {
    console.log("here input changes trigger");
    console.log($(this));
    var type = type;
    var input_id = id;
    var parent_key = parent_key;
    var value = event.value;
    console.log(input_id);
    console.log(value);
    console.log(parent_key);
    var settings_for_id = $("#right-panel").attr('settings-for');
    var settings_for_name = $("#right-panel").attr('settings-for-name');
    var settings_pos = $("#right-panel").attr('settings-pos');
    var parent_type = $("#right-panel").attr('parent-type');
    var settings_element = $("#right-panel").attr('settings-element');

    console.log("settings for id --" + settings_for_id);
    console.log("settings for name " + settings_for_name);
    console.log("settings uid " + settings_pos);
    console.log("settings element " + settings_element);
    console.log("type " + type);
    console.log("preview div id==  #" + settings_for_name + "-preview" + settings_for_id);
    console.log("div id== #" + settings_for_name + settings_for_id);

    if (input_id == 'textarea_inputtype') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("background-color", value);
        $("#" + settings_for_name + settings_for_id).children(":first").css("background-color", value);
    }
    if (input_id == 'textarea_placeholder') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").attr("placeholder", value);
        $("#" + settings_for_name + settings_for_id).children(":first").attr("placeholder", value);
    }
    if (input_id == 'textarea_required') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").attr("required", value);
        $("#" + settings_for_name + settings_for_id).children(":first").attr("required", value);
    }
    if (input_id == 'textarea_required') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("font-family", value);
        $("#" + settings_for_name + settings_for_id).children(":first").css("font-family", value);
    }
    if (input_id == 'textarea_font_size') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("font-size", `${value}px`);
        $("#" + settings_for_name + settings_for_id).children(":first").css("font-size", `${value}px`);
         const textAreaFontValue = document.getElementById("textAreaFontValue");
         textAreaFontValue.innerHTML = `${value}px`
    }



    console.log("#" + settings_element);
    var setting_values = $("#" + settings_element).attr('setting_values');
    console.log("++setting values==" + setting_values);
    var objData = {}
    if (setting_values != "" && setting_values != 'undefined') {
        objData = JSON.parse(setting_values);
        console.log("setting values--");
        console.log(objData);

        if (objData.hasOwnProperty(parent_key)) {
            console.log("key present " + parent_key);
            console.log("key data " + objData[parent_key]);
            console.log("input id " + input_id);

            if (objData[parent_key].hasOwnProperty(input_id)) {
                $.each(objData[parent_key], function (key, objvalue) {
                    console.log("key:" + key);
                    console.log("input id: " + input_id);
                    if (key == input_id) {
                        console.log(objData[parent_key][input_id]);
                        console.log(objData[parent_key][input_id]);
                        objData[parent_key][input_id] = value;
                    }
                    //                            console.log( key + ": " + value );
                });
                //                        objData.parent_key.input_id = value;

            } else {
                console.log("in else ");//                        
                objData[parent_key][input_id] = value;
            }
        } else {
            console.log("in parent key not present else ");
            //if key not present then create its object fist 
            if (objData[parent_key] == undefined) {
                objData[parent_key] = {}
            }
            objData[parent_key][input_id] = value;
        }
    } else {
        console.log("in setting else ");
        //if key not present then create its object fist
        if (objData[parent_key] == undefined) {
            objData[parent_key] = {}
        }
        objData[parent_key][input_id] = value;
    }
    console.log(objData);
    console.log(JSON.stringify(objData));
    $("#" + settings_element).attr('setting_values', JSON.stringify(objData));

}

function setSelectInputProperties(type, parent_key, id, event) {
    console.log("here input changes trigger");
    console.log($(this));
    var type = type;
    var input_id = id;
    var parent_key = parent_key;
    var value = event.value;
    console.log(input_id);
    console.log(value);
    console.log(parent_key);
    var settings_for_id = $("#right-panel").attr('settings-for');
    var settings_for_name = $("#right-panel").attr('settings-for-name');
    var settings_pos = $("#right-panel").attr('settings-pos');
    var parent_type = $("#right-panel").attr('parent-type');
    var settings_element = $("#right-panel").attr('settings-element');

    console.log("settings for id --" + settings_for_id);
    console.log("settings for name " + settings_for_name);
    console.log("settings uid " + settings_pos);
    console.log("settings element " + settings_element);
    console.log("type " + type);
    console.log("preview div id==  #" + settings_for_name + "-preview" + settings_for_id);
    console.log("div id== #" + settings_for_name + settings_for_id);

    if (input_id == 'select_input_type') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("background-color", value);
        $("#" + settings_for_name + settings_for_id).children(":first").css("background-color", value);
    }
    if (input_id == 'select_input_name') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").attr("name", value);
        $("#" + settings_for_name + settings_for_id).children(":first").attr("name", value);
    }
    if (input_id == 'select_input_required') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").attr("required", value);
        $("#" + settings_for_name + settings_for_id).children(":first").attr("required", value);
    }
    if (input_id == 'select_input_fontfamily') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("font-family", value);
        $("#" + settings_for_name + settings_for_id).children(":first").css("font-family", value);
    }



    console.log("#" + settings_element);
    var setting_values = $("#" + settings_element).attr('setting_values');
    console.log("++setting values==" + setting_values);
    var objData = {}
    if (setting_values != "" && setting_values != 'undefined') {
        objData = JSON.parse(setting_values);
        console.log("setting values--");
        console.log(objData);

        if (objData.hasOwnProperty(parent_key)) {
            console.log("key present " + parent_key);
            console.log("key data " + objData[parent_key]);
            console.log("input id " + input_id);

            if (objData[parent_key].hasOwnProperty(input_id)) {
                $.each(objData[parent_key], function (key, objvalue) {
                    console.log("key:" + key);
                    console.log("input id: " + input_id);
                    if (key == input_id) {
                        console.log(objData[parent_key][input_id]);
                        console.log(objData[parent_key][input_id]);
                        objData[parent_key][input_id] = value;
                    }
                    //                            console.log( key + ": " + value );
                });
                //                        objData.parent_key.input_id = value;

            } else {
                console.log("in else ");//                        
                objData[parent_key][input_id] = value;
            }
        } else {
            console.log("in parent key not present else ");
            //if key not present then create its object fist 
            if (objData[parent_key] == undefined) {
                objData[parent_key] = {}
            }
            objData[parent_key][input_id] = value;
        }
    } else {
        console.log("in setting else ");
        //if key not present then create its object fist
        if (objData[parent_key] == undefined) {
            objData[parent_key] = {}
        }
        objData[parent_key][input_id] = value;
    }
    console.log(objData);
    console.log(JSON.stringify(objData));
    $("#" + settings_element).attr('setting_values', JSON.stringify(objData));

}

function setIconProperties(type, parent_key, id, event) {
    console.log("here input changes trigger");
    console.log($(this));
    var type = type;
    var input_id = id;
    var parent_key = parent_key;
    var value = event.value;
    console.log(input_id);
    console.log(value);
    console.log(parent_key);
    var settings_for_id = $("#right-panel").attr('settings-for');
    var settings_for_name = $("#right-panel").attr('settings-for-name');
    var settings_pos = $("#right-panel").attr('settings-pos');
    var parent_type = $("#right-panel").attr('parent-type');
    var settings_element = $("#right-panel").attr('settings-element');

    console.log("settings for id --" + settings_for_id);
    console.log("settings for name " + settings_for_name);
    console.log("settings uid " + settings_pos);
    console.log("settings element " + settings_element);
    console.log("type " + type);
    console.log("preview div id==  #" + settings_for_name + "-preview" + settings_for_id);
    console.log("div id== #" + settings_for_name + settings_for_id);

    if (input_id == 'icon_align') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("text-align", value);
        $("#" + settings_for_name + settings_for_id).children(":first").css("text-align", value);
    }
    if (input_id == 'text-color') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").attr("action", value);
        $("#" + settings_for_name + settings_for_id).children(":first").attr("action", value);
    }
    if (input_id == 'icon_url_target') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").attr("_target", value);
        $("#" + settings_for_name + settings_for_id).children(":first").attr("_target", value);
    }



    console.log("#" + settings_element);
    var setting_values = $("#" + settings_element).attr('setting_values');
    console.log("++setting values==" + setting_values);
    var objData = {}
    if (setting_values != "" && setting_values != 'undefined') {
        objData = JSON.parse(setting_values);
        console.log("setting values--");
        console.log(objData);

        if (objData.hasOwnProperty(parent_key)) {
            console.log("key present " + parent_key);
            console.log("key data " + objData[parent_key]);
            console.log("input id " + input_id);

            if (objData[parent_key].hasOwnProperty(input_id)) {
                $.each(objData[parent_key], function (key, objvalue) {
                    console.log("key:" + key);
                    console.log("input id: " + input_id);
                    if (key == input_id) {
                        console.log(objData[parent_key][input_id]);
                        console.log(objData[parent_key][input_id]);
                        objData[parent_key][input_id] = value;
                    }
                    //                            console.log( key + ": " + value );
                });
                //                        objData.parent_key.input_id = value;

            } else {
                console.log("in else ");//                        
                objData[parent_key][input_id] = value;
            }
        } else {
            console.log("in parent key not present else ");
            //if key not present then create its object fist 
            if (objData[parent_key] == undefined) {
                objData[parent_key] = {}
            }
            objData[parent_key][input_id] = value;
        }
    } else {
        console.log("in setting else ");
        //if key not present then create its object fist
        if (objData[parent_key] == undefined) {
            objData[parent_key] = {}
        }
        objData[parent_key][input_id] = value;
    }
    console.log(objData);
    console.log(JSON.stringify(objData));
    $("#" + settings_element).attr('setting_values', JSON.stringify(objData));

}


function setVideoProperties(type, parent_key, id, event) {
    console.log("here input changes trigger");
    console.log($(this));
    var type = type;
    var input_id = id;
    var parent_key = parent_key;
    var value = event.value;
    console.log(input_id);
    console.log(value);
    console.log(parent_key);
    var settings_for_id = $("#right-panel").attr('settings-for');
    var settings_for_name = $("#right-panel").attr('settings-for-name');
    var settings_pos = $("#right-panel").attr('settings-pos');
    var parent_type = $("#right-panel").attr('parent-type');
    var settings_element = $("#right-panel").attr('settings-element');

    console.log("settings for id --" + settings_for_id);
    console.log("settings for name " + settings_for_name);
    console.log("settings uid " + settings_pos);
    console.log("settings element " + settings_element);
    console.log("type " + type);
    console.log("preview div id==  #" + settings_for_name + "-preview" + settings_for_id);
    console.log("div id== #" + settings_for_name + settings_for_id);

    if (input_id == 'video_type') {
        //$("#"+settings_for_name+"-preview" + settings_for_id).children(":first").css("background-color", value);
        //$("#"+settings_for_name + settings_for_id).children(":first").css("background-color", value);
    }
    if (input_id == 'video_embed') {
        //$("#"+settings_for_name+"-preview" + settings_for_id).children(":first").css("color", value);
        //$("#"+settings_for_name + settings_for_id).children(":first").css("color", value);
    }
    if (input_id == 'video_overlay_text') {
        // $("#"+settings_for_name+"-preview" + settings_for_id).children(":first").css("border", "5px solid " + value);
        //$("#"+settings_for_name + settings_for_id).children(":first").css("border", "5px solid " + value);
    }
    if (input_id == 'video_title') {
        //$("#"+settings_for_name+"-preview" + settings_for_id).children(":first").css("border", "5px solid " + value);
        //$("#"+settings_for_name + settings_for_id).children(":first").css("border", "5px solid " + value);
    }
    if (input_id == 'video_bgcolor') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("background-color", value);
        $("#" + settings_for_name + settings_for_id).children(":first").css("background-color", value);
    }
    if (input_id == 'video_textcolor') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("color", value);
        $("#" + settings_for_name + settings_for_id).children(":first").css("color", value);
    }



    console.log("#" + settings_element);
    var setting_values = $("#" + settings_element).attr('setting_values');
    console.log("++setting values==" + setting_values);
    var objData = {}
    if (setting_values != "" && setting_values != 'undefined') {
        objData = JSON.parse(setting_values);
        console.log("setting values--");
        console.log(objData);

        if (objData.hasOwnProperty(parent_key)) {
            console.log("key present " + parent_key);
            console.log("key data " + objData[parent_key]);
            console.log("input id " + input_id);

            if (objData[parent_key].hasOwnProperty(input_id)) {
                $.each(objData[parent_key], function (key, objvalue) {
                    console.log("key:" + key);
                    console.log("input id: " + input_id);
                    if (key == input_id) {
                        console.log(objData[parent_key][input_id]);
                        console.log(objData[parent_key][input_id]);
                        objData[parent_key][input_id] = value;
                    }
                    //                            console.log( key + ": " + value );
                });
                //                        objData.parent_key.input_id = value;

            } else {
                console.log("in else ");//                        
                objData[parent_key][input_id] = value;
            }
        } else {
            console.log("in parent key not present else ");
            //if key not present then create its object fist 
            if (objData[parent_key] == undefined) {
                objData[parent_key] = {}
            }
            objData[parent_key][input_id] = value;
        }
    } else {
        console.log("in setting else ");
        //if key not present then create its object fist
        if (objData[parent_key] == undefined) {
            objData[parent_key] = {}
        }
        objData[parent_key][input_id] = value;
    }
    console.log(objData);
    console.log(JSON.stringify(objData));
    $("#" + settings_element).attr('setting_values', JSON.stringify(objData));

}

function setAudioProperties(type, parent_key, id, event) {
    console.log("here input changes trigger");
    console.log($(this));
    var type = type;
    var input_id = id;
    var parent_key = parent_key;
    var value = event.value;
    console.log(input_id);
    console.log(value);
    console.log(parent_key);
    var settings_for_id = $("#right-panel").attr('settings-for');
    var settings_for_name = $("#right-panel").attr('settings-for-name');
    var settings_pos = $("#right-panel").attr('settings-pos');
    var parent_type = $("#right-panel").attr('parent-type');
    var settings_element = $("#right-panel").attr('settings-element');

    console.log("settings for id --" + settings_for_id);
    console.log("settings for name " + settings_for_name);
    console.log("settings uid " + settings_pos);
    console.log("settings element " + settings_element);
    console.log("type " + type);
    console.log("preview div id==  #" + settings_for_name + "-preview" + settings_for_id);
    console.log("div id== #" + settings_for_name + settings_for_id);

    if (input_id == 'audio_fileurl') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("background-color", value);
        $("#" + settings_for_name + settings_for_id).children(":first").css("background-color", value);
    }
    if (input_id == 'audio_controls') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("color", value);
        $("#" + settings_for_name + settings_for_id).children(":first").css("color", value);
    }
    if (input_id == 'audio_autoplay') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("border", "5px solid " + value);
        $("#" + settings_for_name + settings_for_id).children(":first").css("border", "5px solid " + value);
    }
    if (input_id == 'audio_loop') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("border", "5px solid " + value);
        $("#" + settings_for_name + settings_for_id).children(":first").css("border", "5px solid " + value);
    }



    console.log("#" + settings_element);
    var setting_values = $("#" + settings_element).attr('setting_values');
    console.log("++setting values==" + setting_values);
    var objData = {}
    if (setting_values != "" && setting_values != 'undefined') {
        objData = JSON.parse(setting_values);
        console.log("setting values--");
        console.log(objData);

        if (objData.hasOwnProperty(parent_key)) {
            console.log("key present " + parent_key);
            console.log("key data " + objData[parent_key]);
            console.log("input id " + input_id);

            if (objData[parent_key].hasOwnProperty(input_id)) {
                $.each(objData[parent_key], function (key, objvalue) {
                    console.log("key:" + key);
                    console.log("input id: " + input_id);
                    if (key == input_id) {
                        console.log(objData[parent_key][input_id]);
                        console.log(objData[parent_key][input_id]);
                        objData[parent_key][input_id] = value;
                    }
                    //                            console.log( key + ": " + value );
                });
                //                        objData.parent_key.input_id = value;

            } else {
                console.log("in else ");//                        
                objData[parent_key][input_id] = value;
            }
        } else {
            console.log("in parent key not present else ");
            //if key not present then create its object fist 
            if (objData[parent_key] == undefined) {
                objData[parent_key] = {}
            }
            objData[parent_key][input_id] = value;
        }
    } else {
        console.log("in setting else ");
        //if key not present then create its object fist
        if (objData[parent_key] == undefined) {
            objData[parent_key] = {}
        }
        objData[parent_key][input_id] = value;
    }
    console.log(objData);
    console.log(JSON.stringify(objData));
    $("#" + settings_element).attr('setting_values', JSON.stringify(objData));

}


function setBulletListProperties(type, parent_key, id, event) {
    console.log("here input changes trigger");
    console.log($(this));
    var type = type;
    var input_id = id;
    var parent_key = parent_key;
    var value = event.value;
    console.log(input_id);
    console.log(value);
    console.log(parent_key);
    var settings_for_id = $("#right-panel").attr('settings-for');
    var settings_for_name = $("#right-panel").attr('settings-for-name');
    var settings_pos = $("#right-panel").attr('settings-pos');
    var parent_type = $("#right-panel").attr('parent-type');
    var settings_element = $("#right-panel").attr('settings-element');

    console.log("settings for id --" + settings_for_id);
    console.log("settings for name " + settings_for_name);
    console.log("settings uid " + settings_pos);
    console.log("settings element " + settings_element);
    console.log("type " + type);
    console.log("preview div id==  #" + settings_for_name + "-preview" + settings_for_id);
    console.log("div id== #" + settings_for_name + settings_for_id);

    if (input_id == 'bulletlist_type') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("background-color", value);
        $("#" + settings_for_name + settings_for_id).children(":first").css("background-color", value);
    }
    if (input_id == 'bulletlist_fontfamily') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("color", value);
        $("#" + settings_for_name + settings_for_id).children(":first").css("color", value);
    }
    if (input_id == 'bulletlist_iconcolor') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("border", "5px solid " + value);
        $("#" + settings_for_name + settings_for_id).children(":first").css("border", "5px solid " + value);
    }
    if (input_id == 'bulletlist_textcolor') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("border", "5px solid " + value);
        $("#" + settings_for_name + settings_for_id).children(":first").css("border", "5px solid " + value);
    }
    if (input_id == 'bulletlist_left_margin_range') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("margin-left", `${value}px`);
        $("#" + settings_for_name + settings_for_id).children(":first").css("margin-left", `${value}px`);
        const bullshitLeftMargin = document.getElementById("bullshitLeftMargin");
        bullshitLeftMargin.innerHTML = `${value}px`
    }



    console.log("#" + settings_element);
    var setting_values = $("#" + settings_element).attr('setting_values');
    console.log("++setting values==" + setting_values);
    var objData = {}
    if (setting_values != "" && setting_values != 'undefined') {
        objData = JSON.parse(setting_values);
        console.log("setting values--");
        console.log(objData);

        if (objData.hasOwnProperty(parent_key)) {
            console.log("key present " + parent_key);
            console.log("key data " + objData[parent_key]);
            console.log("input id " + input_id);

            if (objData[parent_key].hasOwnProperty(input_id)) {
                $.each(objData[parent_key], function (key, objvalue) {
                    console.log("key:" + key);
                    console.log("input id: " + input_id);
                    if (key == input_id) {
                        console.log(objData[parent_key][input_id]);
                        console.log(objData[parent_key][input_id]);
                        objData[parent_key][input_id] = value;
                    }
                    //                            console.log( key + ": " + value );
                });
                //                        objData.parent_key.input_id = value;

            } else {
                console.log("in else ");//                        
                objData[parent_key][input_id] = value;
            }
        } else {
            console.log("in parent key not present else ");
            //if key not present then create its object fist 
            if (objData[parent_key] == undefined) {
                objData[parent_key] = {}
            }
            objData[parent_key][input_id] = value;
        }
    } else {
        console.log("in setting else ");
        //if key not present then create its object fist
        if (objData[parent_key] == undefined) {
            objData[parent_key] = {}
        }
        objData[parent_key][input_id] = value;
    }
    console.log(objData);
    console.log(JSON.stringify(objData));
    $("#" + settings_element).attr('setting_values', JSON.stringify(objData));

}


function setDividerProperties(type, parent_key, id, event) {
    console.log("here input changes trigger");
    console.log($(this));
    var type = type;
    var input_id = id;
    var parent_key = parent_key;
    var value = event.value;
    console.log(input_id);
    console.log(value);
    console.log(parent_key);
    var settings_for_id = $("#right-panel").attr('settings-for');
    var settings_for_name = $("#right-panel").attr('settings-for-name');
    var settings_pos = $("#right-panel").attr('settings-pos');
    var parent_type = $("#right-panel").attr('parent-type');
    var settings_element = $("#right-panel").attr('settings-element');

    console.log("settings for id --" + settings_for_id);
    console.log("settings for name " + settings_for_name);
    console.log("settings uid " + settings_pos);
    console.log("settings element " + settings_element);
    console.log("type " + type);
    console.log("preview div id==  #" + settings_for_name + "-preview" + settings_for_id);
    console.log("div id== #" + settings_for_name + settings_for_id);

       // if (input_id == 'divider_width') {
    //     $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("background-color", value);
    //     $("#" + settings_for_name + settings_for_id).children(":first").css("background-color", value);
    // }
    if (input_id == 'divider_align') {

        if (value === "left") {
            $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("margin", "0px auto 0px 0px");
            $("#" + settings_for_name + settings_for_id).children(":first").css("margin", "0px auto 0px 0px");
        }
        if (value === "right") {

            $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("margin", "0px 0px 0px auto");
            $("#" + settings_for_name + settings_for_id).children(":first").css("margin", "0px 0px 0px auto");
        }
        if (value === "center") {
            $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("margin", "0 auto");
            $("#" + settings_for_name + settings_for_id).children(":first").css("margin", "0 auto");
        }

    }
    
    if (input_id == 'divider_height') {
        
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("border", `${value}px solid #000`);
        $("#" + settings_for_name + settings_for_id).children(":first").css("border", `${value}px solid #000`);
    }
    if (input_id == 'divider_style') {
        console.log("divider_style", typeof value, "border", `1px ${value} #000`)
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("border-style", `${value} !important` );
        $("#" + settings_for_name + settings_for_id).children(":first").css("border-style" , `${value} !important`);

    }
    if (input_id == 'divider_color') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("border", "5px solid " + value);
        $("#" + settings_for_name + settings_for_id).children(":first").css("border", "5px solid " + value);
    }
    if (input_id == 'divider_width_range') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("width", `${value}%`);
        $("#" + settings_for_name + settings_for_id).children(":first").css("width", `${value}%`);
        const dividerWidthValue = document.getElementById("dividerWidthValue");
        dividerWidthValue.innerText = `${value}%`
    }




    console.log("#" + settings_element);
    var setting_values = $("#" + settings_element).attr('setting_values');
    console.log("++setting values==" + setting_values);
    var objData = {}
    if (setting_values != "" && setting_values != 'undefined') {
        objData = JSON.parse(setting_values);
        console.log("setting values--");
        console.log(objData);

        if (objData.hasOwnProperty(parent_key)) {
            console.log("key present " + parent_key);
            console.log("key data " + objData[parent_key]);
            console.log("input id " + input_id);

            if (objData[parent_key].hasOwnProperty(input_id)) {
                $.each(objData[parent_key], function (key, objvalue) {
                    console.log("key:" + key);
                    console.log("input id: " + input_id);
                    if (key == input_id) {
                        console.log(objData[parent_key][input_id]);
                        console.log(objData[parent_key][input_id]);
                        objData[parent_key][input_id] = value;
                    }
                    //                            console.log( key + ": " + value );
                });
                //                        objData.parent_key.input_id = value;

            } else {
                console.log("in else ");//                        
                objData[parent_key][input_id] = value;
            }
        } else {
            console.log("in parent key not present else ");
            //if key not present then create its object fist 
            if (objData[parent_key] == undefined) {
                objData[parent_key] = {}
            }
            objData[parent_key][input_id] = value;
        }
    } else {
        console.log("in setting else ");
        //if key not present then create its object fist
        if (objData[parent_key] == undefined) {
            objData[parent_key] = {}
        }
        objData[parent_key][input_id] = value;
    }
    console.log(objData);
    console.log(JSON.stringify(objData));
    $("#" + settings_element).attr('setting_values', JSON.stringify(objData));
}


function setProgressbarProperties(type, parent_key, id, event) {
    console.log("here input changes trigger");
    console.log($(this));
    var type = type;
    var input_id = id;
    var parent_key = parent_key;
    var value = event.value;
    console.log(input_id);
    console.log(value);
    console.log(parent_key);
    var settings_for_id = $("#right-panel").attr('settings-for');
    var settings_for_name = $("#right-panel").attr('settings-for-name');
    var settings_pos = $("#right-panel").attr('settings-pos');
    var parent_type = $("#right-panel").attr('parent-type');
    var settings_element = $("#right-panel").attr('settings-element');

    console.log("settings for id --" + settings_for_id);
    console.log("settings for name " + settings_for_name);
    console.log("settings uid " + settings_pos);
    console.log("settings element " + settings_element);
    console.log("type " + type);
    console.log("preview div id==  #" + settings_for_name + "-preview" + settings_for_id);
    console.log("div id== #" + settings_for_name + settings_for_id);

    if (input_id == 'progressbar_percent') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("background-color", value);
        $("#" + settings_for_name + settings_for_id).children(":first").css("background-color", value);
    }
    if (input_id == 'progressbar_fontfamily') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("color", value);
        $("#" + settings_for_name + settings_for_id).children(":first").css("color", value);
    }
    if (input_id == 'progressbar_color') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("border", "5px solid " + value);
        $("#" + settings_for_name + settings_for_id).children(":first").css("border", "5px solid " + value);
    }
    if (input_id == 'progressbar_width_range') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("width", `${value}%`);
        $("#" + settings_for_name + settings_for_id).children(":first").css("width", `${value}%`);
        const progressbarWidthValue = document.getElementById("progressbarWidthValue");
        progressbarWidthValue.innerText = `${value}%`
    }



    console.log("#" + settings_element);
    var setting_values = $("#" + settings_element).attr('setting_values');
    console.log("++setting values==" + setting_values);
    var objData = {}
    if (setting_values != "" && setting_values != 'undefined') {
        objData = JSON.parse(setting_values);
        console.log("setting values--");
        console.log(objData);

        if (objData.hasOwnProperty(parent_key)) {
            console.log("key present " + parent_key);
            console.log("key data " + objData[parent_key]);
            console.log("input id " + input_id);

            if (objData[parent_key].hasOwnProperty(input_id)) {
                $.each(objData[parent_key], function (key, objvalue) {
                    console.log("key:" + key);
                    console.log("input id: " + input_id);
                    if (key == input_id) {
                        console.log(objData[parent_key][input_id]);
                        console.log(objData[parent_key][input_id]);
                        objData[parent_key][input_id] = value;
                    }
                    //                            console.log( key + ": " + value );
                });
                //                        objData.parent_key.input_id = value;

            } else {
                console.log("in else ");//                        
                objData[parent_key][input_id] = value;
            }
        } else {
            console.log("in parent key not present else ");
            //if key not present then create its object fist 
            if (objData[parent_key] == undefined) {
                objData[parent_key] = {}
            }
            objData[parent_key][input_id] = value;
        }
    } else {
        console.log("in setting else ");
        //if key not present then create its object fist
        if (objData[parent_key] == undefined) {
            objData[parent_key] = {}
        }
        objData[parent_key][input_id] = value;
    }
    console.log(objData);
    console.log(JSON.stringify(objData));
    $("#" + settings_element).attr('setting_values', JSON.stringify(objData));

}

function setNavbarProperties(type, parent_key, id, event) {
    console.log("here input changes trigger");
    console.log($(this));
    var type = type;
    var input_id = id;
    var parent_key = parent_key;
    var value = event.value;
    console.log(input_id);
    console.log(value);
    console.log(parent_key);
    var settings_for_id = $("#right-panel").attr('settings-for');
    var settings_for_name = $("#right-panel").attr('settings-for-name');
    var settings_pos = $("#right-panel").attr('settings-pos');
    var parent_type = $("#right-panel").attr('parent-type');
    var settings_element = $("#right-panel").attr('settings-element');

    console.log("settings for id --" + settings_for_id);
    console.log("settings for name " + settings_for_name);
    console.log("settings uid " + settings_pos);
    console.log("settings element " + settings_element);
    console.log("type " + type);
    console.log("preview div id==  #" + settings_for_name + "-preview" + settings_for_id);
    console.log("div id== #" + settings_for_name + settings_for_id);

    if (input_id == 'navbar_text') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("background-color", value);
        $("#" + settings_for_name + settings_for_id).children(":first").css("background-color", value);
    }
    if (input_id == 'navbar_url_action') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("color", value);
        $("#" + settings_for_name + settings_for_id).children(":first").css("color", value);
    }
    if (input_id == 'navbar_link_target') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("border", "5px solid " + value);
        $("#" + settings_for_name + settings_for_id).children(":first").css("border", "5px solid " + value);
    }



    console.log("#" + settings_element);
    var setting_values = $("#" + settings_element).attr('setting_values');
    console.log("++setting values==" + setting_values);
    var objData = {}
    if (setting_values != "" && setting_values != 'undefined') {
        objData = JSON.parse(setting_values);
        console.log("setting values--");
        console.log(objData);

        if (objData.hasOwnProperty(parent_key)) {
            console.log("key present " + parent_key);
            console.log("key data " + objData[parent_key]);
            console.log("input id " + input_id);

            if (objData[parent_key].hasOwnProperty(input_id)) {
                $.each(objData[parent_key], function (key, objvalue) {
                    console.log("key:" + key);
                    console.log("input id: " + input_id);
                    if (key == input_id) {
                        console.log(objData[parent_key][input_id]);
                        console.log(objData[parent_key][input_id]);
                        objData[parent_key][input_id] = value;
                    }
                    //                            console.log( key + ": " + value );
                });
                //                        objData.parent_key.input_id = value;

            } else {
                console.log("in else ");//                        
                objData[parent_key][input_id] = value;
            }
        } else {
            console.log("in parent key not present else ");
            //if key not present then create its object fist 
            if (objData[parent_key] == undefined) {
                objData[parent_key] = {}
            }
            objData[parent_key][input_id] = value;
        }
    } else {
        console.log("in setting else ");
        //if key not present then create its object fist
        if (objData[parent_key] == undefined) {
            objData[parent_key] = {}
        }
        objData[parent_key][input_id] = value;
    }
    console.log(objData);
    console.log(JSON.stringify(objData));
    $("#" + settings_element).attr('setting_values', JSON.stringify(objData));

}

function setFontFamily(type, parent_key, id, event) {
    console.log("here input changes trigger");
    console.log($(this));
    var type = type;
    var input_id = id;
    var parent_key = parent_key;
    var value = event.value;
    console.log(input_id);
    console.log(value);
    console.log(parent_key);
    var settings_for_id = $("#right-panel").attr('settings-for');
    var settings_for_name = $("#right-panel").attr('settings-for-name');
    var settings_pos = $("#right-panel").attr('settings-pos');
    var parent_type = $("#right-panel").attr('parent-type');
    var settings_element = $("#right-panel").attr('settings-element');

    console.log("settings for id --" + settings_for_id);
    console.log("settings for name " + settings_for_name);
    console.log("settings uid " + settings_pos);
    console.log("settings element " + settings_element);
    console.log("type " + type);
    console.log("preview div id==  #" + settings_for_name + "-preview" + settings_for_id);
    console.log("div id== #" + settings_for_name + settings_for_id);


    console.log("value:-", value, "input_id:-", input_id);

    if (input_id == 'font-weight') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("font-weight", value);
        $("#" + settings_for_name + settings_for_id).children(":first").css("font-weight", value);
    }
    if (input_id == 'font-family') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("font-family", value);
        $("#" + settings_for_name + settings_for_id).children(":first").css("font-family", value);
    }
    if (input_id == 'font-range') {
        $("#" + settings_for_name + "-preview" + settings_for_id).children(":first").css("font-size", `${value}px`);
        $("#" + settings_for_name + settings_for_id).children(":first").css("font-size", `${value}px`);
        const fontValue = document.getElementById("fontValue");
        fontValue.innerHTML = `${value}px`;
    }




    console.log("#" + settings_element);
    var setting_values = $("#" + settings_element).attr('setting_values');
    console.log("++setting values==" + setting_values);
    var objData = {}
    if (setting_values != "" && setting_values != 'undefined') {
        objData = JSON.parse(setting_values);
        console.log("setting values--");
        console.log(objData);

        if (objData.hasOwnProperty(parent_key)) {
            console.log("key present " + parent_key);
            console.log("key data " + objData[parent_key]);
            console.log("input id " + input_id);

            if (objData[parent_key].hasOwnProperty(input_id)) {
                $.each(objData[parent_key], function (key, objvalue) {
                    console.log("key:" + key);
                    console.log("input id: " + input_id);
                    if (key == input_id) {
                        console.log(objData[parent_key][input_id]);
                        console.log(objData[parent_key][input_id]);
                        objData[parent_key][input_id] = value;
                    }
                    //                            console.log( key + ": " + value );
                });
                //                        objData.parent_key.input_id = value;

            } else {
                console.log("in else ");//                        
                objData[parent_key][input_id] = value;
            }
        } else {
            console.log("in parent key not present else ");
            //if key not present then create its object fist 
            if (objData[parent_key] == undefined) {
                objData[parent_key] = {}
            }
            objData[parent_key][input_id] = value;
        }
    } else {
        console.log("in setting else ");
        //if key not present then create its object fist
        if (objData[parent_key] == undefined) {
            objData[parent_key] = {}
        }
        objData[parent_key][input_id] = value;
    }
    console.log(objData);
    console.log(JSON.stringify(objData));
    $("#" + settings_element).attr('setting_values', JSON.stringify(objData));

}


function addAdvanceFormElement(event, template) {
    var type = $("#choose_elements_dialog").attr('type');
    var type_id = $("#choose_elements_dialog").attr('type-id');
    var section_id = $("#choose_elements_dialog").attr('section-id');
    var section_unid = $("#choose_elements_dialog").attr('section-unid');
    //        var template = $("#choose_elements_dialog").attr('template');
    var column = $("#choose_elements_dialog").attr('column');
    var element_unid = $("#choose_elements_dialog").attr('element-unid');
    var element_id = $("#choose_elements_dialog").attr('element-id');
    console.log("Add element clicked");
    console.log("type id ====" + type_id);
    console.log(section_id);
    console.log(section_unid);
    console.log(type_id);
    console.log(element_unid);

    $("#add-element-settings-" + element_unid).attr("element_type", template);

    var elementhtml = getElementHtml(template, section_id);
    var elementPreviewhtml = getElementPreviewHtml(template, section_id);
    $("#element-container" + element_unid + " .add-element").remove();
    $(elementhtml).insertAfter("#" + element_id);
    $(elementPreviewhtml).insertAfter("#add-element-preview" + element_unid);


    $("#add-element-preview" + element_unid).remove();
    $("#" + type_id).remove();
    $('#addNewElement').modal('hide');
}


function addCountdownElement(event, template) {
    var type = $("#choose_elements_dialog").attr('type');
    var type_id = $("#choose_elements_dialog").attr('type-id');
    var section_id = $("#choose_elements_dialog").attr('section-id');
    var section_unid = $("#choose_elements_dialog").attr('section-unid');
    //        var template = $("#choose_elements_dialog").attr('template');
    var column = $("#choose_elements_dialog").attr('column');
    var element_unid = $("#choose_elements_dialog").attr('element-unid');
    var element_id = $("#choose_elements_dialog").attr('element-id');
    console.log("Add element clicked");
    console.log("type id ====" + type_id);
    console.log(section_id);
    console.log(section_unid);
    console.log(type_id);
    console.log(element_unid);

    $("#add-element-settings-" + element_unid).attr("element_type", template);

    var elementhtml = getElementHtml(template, section_id);
    var elementPreviewhtml = getElementPreviewHtml(template, section_id);
    $("#element-container" + element_unid + " .add-element").remove();

    $(elementhtml).insertAfter("#" + element_id);
    $(elementPreviewhtml).insertAfter("#add-element-preview" + element_unid);


    $("#add-element-preview" + element_unid).remove();
    $("#" + type_id).remove();
    $('#addNewElement').modal('hide');

    if (template == "tem_minutetimer") {
        // minute timer
        startTimer();
    }
    if (template == "tem_countdown") {
        // countdown
        startCountdown();
    }

}


function addIconElement(event, template) {
    var type = $("#choose_elements_dialog").attr('type');
    var type_id = $("#choose_elements_dialog").attr('type-id');
    var section_id = $("#choose_elements_dialog").attr('section-id');
    var section_unid = $("#choose_elements_dialog").attr('section-unid');
    //        var template = $("#choose_elements_dialog").attr('template');
    var column = $("#choose_elements_dialog").attr('column');
    var element_unid = $("#choose_elements_dialog").attr('element-unid');
    var element_id = $("#choose_elements_dialog").attr('element-id');
    console.log("Add element clicked");
    console.log("type id ====" + type_id);
    console.log(section_id);
    console.log(section_unid);
    console.log(type_id);
    console.log(element_unid);

    $("#add-element-settings-" + element_unid).attr("element_type", template);

    var elementhtml = getElementHtml(template, section_id);
    var elementPreviewhtml = getElementPreviewHtml(template, section_id);
    $("#element-container" + element_unid + " .add-element").remove();
    $(elementhtml).insertAfter("#" + element_id);
    $(elementPreviewhtml).insertAfter("#add-element-preview" + element_unid);


    $("#add-element-preview" + element_unid).remove();
    $("#" + type_id).remove();
    $('#addNewElement').modal('hide');
}

function addImageFeatureElement(event, template) {
    var type = $("#choose_elements_dialog").attr('type');
    var type_id = $("#choose_elements_dialog").attr('type-id');
    var section_id = $("#choose_elements_dialog").attr('section-id');
    var section_unid = $("#choose_elements_dialog").attr('section-unid');
    //        var template = $("#choose_elements_dialog").attr('template');
    var column = $("#choose_elements_dialog").attr('column');
    var element_unid = $("#choose_elements_dialog").attr('element-unid');
    var element_id = $("#choose_elements_dialog").attr('element-id');
    console.log("Add element clicked");
    console.log("type id ====" + type_id);
    console.log(section_id);
    console.log(section_unid);
    console.log(type_id);
    console.log(element_unid);

    $("#add-element-settings-" + element_unid).attr("element_type", template);

    var elementhtml = getElementHtml(template, section_id);
    var elementPreviewhtml = getElementPreviewHtml(template, section_id);
    $("#element-container" + element_unid + " .add-element").remove();
    $(elementhtml).insertAfter("#" + element_id);
    $(elementPreviewhtml).insertAfter("#add-element-preview" + element_unid);


    $("#add-element-preview" + element_unid).remove();
    $("#" + type_id).remove();
    $('#addNewElement').modal('hide');
}

function addNavigationElement(event, template) {
    var type = $("#choose_elements_dialog").attr('type');
    var type_id = $("#choose_elements_dialog").attr('type-id');
    var section_id = $("#choose_elements_dialog").attr('section-id');
    var section_unid = $("#choose_elements_dialog").attr('section-unid');
    //        var template = $("#choose_elements_dialog").attr('template');
    var column = $("#choose_elements_dialog").attr('column');
    var element_unid = $("#choose_elements_dialog").attr('element-unid');
    var element_id = $("#choose_elements_dialog").attr('element-id');
    console.log("Add element clicked");
    console.log("type id ====" + type_id);
    console.log(section_id);
    console.log(section_unid);
    console.log(type_id);
    console.log(element_unid);

    $("#add-element-settings-" + element_unid).attr("element_type", template);

    var elementhtml = getElementHtml(template, section_id);
    var elementPreviewhtml = getElementPreviewHtml(template, section_id);
    $("#element-container" + element_unid + " .add-element").remove();
    $(elementhtml).insertAfter("#" + element_id);
    $(elementPreviewhtml).insertAfter("#add-element-preview" + element_unid);


    $("#add-element-preview" + element_unid).remove();
    $("#" + type_id).remove();
    $('#addNewElement').modal('hide');
}

function addFAQElement(event, template) {
    var type = $("#choose_elements_dialog").attr('type');
    var type_id = $("#choose_elements_dialog").attr('type-id');
    var section_id = $("#choose_elements_dialog").attr('section-id');
    var section_unid = $("#choose_elements_dialog").attr('section-unid');
    //        var template = $("#choose_elements_dialog").attr('template');
    var column = $("#choose_elements_dialog").attr('column');
    var element_unid = $("#choose_elements_dialog").attr('element-unid');
    var element_id = $("#choose_elements_dialog").attr('element-id');
    console.log("Add element clicked");
    console.log("type id ====" + type_id);
    console.log(section_id);
    console.log(section_unid);
    console.log(type_id);
    console.log(element_unid);

    $("#add-element-settings-" + element_unid).attr("element_type", template);

    var elementhtml = getElementHtml(template, section_id);
    var elementPreviewhtml = getElementPreviewHtml(template, section_id);
    $("#element-container" + element_unid + " .add-element").remove();
    $(elementhtml).insertAfter("#" + element_id);
    $(elementPreviewhtml).insertAfter("#add-element-preview" + element_unid);


    $("#add-element-preview" + element_unid).remove();
    $("#" + type_id).remove();
    $('#addNewElement').modal('hide');
}

function addDividerElement(event, template) {
    var type = $("#choose_elements_dialog").attr('type');
    var type_id = $("#choose_elements_dialog").attr('type-id');
    var section_id = $("#choose_elements_dialog").attr('section-id');
    var section_unid = $("#choose_elements_dialog").attr('section-unid');
    //        var template = $("#choose_elements_dialog").attr('template');
    var column = $("#choose_elements_dialog").attr('column');
    var element_unid = $("#choose_elements_dialog").attr('element-unid');
    var element_id = $("#choose_elements_dialog").attr('element-id');
    console.log("Add element clicked");
    console.log("type id ====" + type_id);
    console.log(section_id);
    console.log(section_unid);
    console.log(type_id);
    console.log(element_unid);

    $("#add-element-settings-" + element_unid).attr("element_type", template);

    var elementhtml = getElementHtml(template, section_id);
    var elementPreviewhtml = getElementPreviewHtml(template, section_id);
    $("#element-container" + element_unid + " .add-element").remove();
    $(elementhtml).insertAfter("#" + element_id);
    $(elementPreviewhtml).insertAfter("#add-element-preview" + element_unid);


    $("#add-element-preview" + element_unid).remove();
    $("#" + type_id).remove();
    $('#addNewElement').modal('hide');
}

function addProgressBarElement(event, template) {
    var type = $("#choose_elements_dialog").attr('type');
    var type_id = $("#choose_elements_dialog").attr('type-id');
    var section_id = $("#choose_elements_dialog").attr('section-id');
    var section_unid = $("#choose_elements_dialog").attr('section-unid');
    //        var template = $("#choose_elements_dialog").attr('template');
    var column = $("#choose_elements_dialog").attr('column');
    var element_unid = $("#choose_elements_dialog").attr('element-unid');
    var element_id = $("#choose_elements_dialog").attr('element-id');
    console.log("Add element clicked");
    console.log("type id ====" + type_id);
    console.log(section_id);
    console.log(section_unid);
    console.log(type_id);
    console.log(element_unid);

    $("#add-element-settings-" + element_unid).attr("element_type", template);

    var elementhtml = getElementHtml(template, section_id);
    var elementPreviewhtml = getElementPreviewHtml(template, section_id);
    $("#element-container" + element_unid + " .add-element").remove();
    $(elementhtml).insertAfter("#" + element_id);
    $(elementPreviewhtml).insertAfter("#add-element-preview" + element_unid);


    $("#add-element-preview" + element_unid).remove();
    $("#" + type_id).remove();
    $('#addNewElement').modal('hide');
}

function addImageListElement(event, template) {
    var type = $("#choose_elements_dialog").attr('type');
    var type_id = $("#choose_elements_dialog").attr('type-id');
    var section_id = $("#choose_elements_dialog").attr('section-id');
    var section_unid = $("#choose_elements_dialog").attr('section-unid');
    //        var template = $("#choose_elements_dialog").attr('template');
    var column = $("#choose_elements_dialog").attr('column');
    var element_unid = $("#choose_elements_dialog").attr('element-unid');
    var element_id = $("#choose_elements_dialog").attr('element-id');
    console.log("Add element clicked");
    console.log("type id ====" + type_id);
    console.log(section_id);
    console.log(section_unid);
    console.log(type_id);
    console.log(element_unid);

    $("#add-element-settings-" + element_unid).attr("element_type", template);

    var elementhtml = getElementHtml(template, section_id);
    var elementPreviewhtml = getElementPreviewHtml(template, section_id);
    $("#element-container" + element_unid + " .add-element").remove();
    $(elementhtml).insertAfter("#" + element_id);
    $(elementPreviewhtml).insertAfter("#add-element-preview" + element_unid);


    $("#add-element-preview" + element_unid).remove();
    $("#" + type_id).remove();
    $('#addNewElement').modal('hide');
}

function addPricingTableElement(event, template) {
    var type = $("#choose_elements_dialog").attr('type');
    var type_id = $("#choose_elements_dialog").attr('type-id');
    var section_id = $("#choose_elements_dialog").attr('section-id');
    var section_unid = $("#choose_elements_dialog").attr('section-unid');
    //        var template = $("#choose_elements_dialog").attr('template');
    var column = $("#choose_elements_dialog").attr('column');
    var element_unid = $("#choose_elements_dialog").attr('element-unid');
    var element_id = $("#choose_elements_dialog").attr('element-id');
    console.log("Add element clicked");
    console.log("type id ====" + type_id);
    console.log(section_id);
    console.log(section_unid);
    console.log(type_id);
    console.log(element_unid);

    $("#add-element-settings-" + element_unid).attr("element_type", template);

    var elementhtml = getElementHtml(template, section_id);
    var elementPreviewhtml = getElementPreviewHtml(template, section_id);
    $("#element-container" + element_unid + " .add-element").remove();
    $(elementhtml).insertAfter("#" + element_id);
    $(elementPreviewhtml).insertAfter("#add-element-preview" + element_unid);


    $("#add-element-preview" + element_unid).remove();
    $("#" + type_id).remove();
    $('#addNewElement').modal('hide');
}

function addSocialShareElement(event, template) {
    var type = $("#choose_elements_dialog").attr('type');
    var type_id = $("#choose_elements_dialog").attr('type-id');
    var section_id = $("#choose_elements_dialog").attr('section-id');
    var section_unid = $("#choose_elements_dialog").attr('section-unid');
    //        var template = $("#choose_elements_dialog").attr('template');
    var column = $("#choose_elements_dialog").attr('column');
    var element_unid = $("#choose_elements_dialog").attr('element-unid');
    var element_id = $("#choose_elements_dialog").attr('element-id');
    console.log("Add element clicked");
    console.log("type id ====" + type_id);
    console.log(section_id);
    console.log(section_unid);
    console.log(type_id);
    console.log(element_unid);

    $("#add-element-settings-" + element_unid).attr("element_type", template);

    var elementhtml = getElementHtml(template, section_id);
    var elementPreviewhtml = getElementPreviewHtml(template, section_id);
    $("#element-container" + element_unid + " .add-element").remove();
    $(elementhtml).insertAfter("#" + element_id);
    $(elementPreviewhtml).insertAfter("#add-element-preview" + element_unid);


    $("#add-element-preview" + element_unid).remove();
    $("#" + type_id).remove();
    $('#addNewElement').modal('hide');
}

function addPrivacyNoticeElement(event, template) {
    var type = $("#choose_elements_dialog").attr('type');
    var type_id = $("#choose_elements_dialog").attr('type-id');
    var section_id = $("#choose_elements_dialog").attr('section-id');
    var section_unid = $("#choose_elements_dialog").attr('section-unid');
    //        var template = $("#choose_elements_dialog").attr('template');
    var column = $("#choose_elements_dialog").attr('column');
    var element_unid = $("#choose_elements_dialog").attr('element-unid');
    var element_id = $("#choose_elements_dialog").attr('element-id');
    console.log("Add element clicked");
    console.log("type id ====" + type_id);
    console.log(section_id);
    console.log(section_unid);
    console.log(type_id);
    console.log(element_unid);

    $("#add-element-settings-" + element_unid).attr("element_type", template);

    var elementhtml = getElementHtml(template, section_id);
    var elementPreviewhtml = getElementPreviewHtml(template, section_id);
    $("#element-container" + element_unid + " .add-element").remove();
    $(elementhtml).insertAfter("#" + element_id);
    $(elementPreviewhtml).insertAfter("#add-element-preview" + element_unid);


    $("#add-element-preview" + element_unid).remove();
    $("#" + type_id).remove();
    $('#addNewElement').modal('hide');
}

function addFBCommentsElement(event, template) {
    var type = $("#choose_elements_dialog").attr('type');
    var type_id = $("#choose_elements_dialog").attr('type-id');
    var section_id = $("#choose_elements_dialog").attr('section-id');
    var section_unid = $("#choose_elements_dialog").attr('section-unid');
    //        var template = $("#choose_elements_dialog").attr('template');
    var column = $("#choose_elements_dialog").attr('column');
    var element_unid = $("#choose_elements_dialog").attr('element-unid');
    var element_id = $("#choose_elements_dialog").attr('element-id');
    console.log("Add element clicked");
    console.log("type id ====" + type_id);
    console.log(section_id);
    console.log(section_unid);
    console.log(type_id);
    console.log(element_unid);

    $("#add-element-settings-" + element_unid).attr("element_type", template);

    var elementhtml = getElementHtml(template, section_id);
    var elementPreviewhtml = getElementPreviewHtml(template, section_id);
    $("#element-container" + element_unid + " .add-element").remove();
    $(elementhtml).insertAfter("#" + element_id);
    $(elementPreviewhtml).insertAfter("#add-element-preview" + element_unid);


    $("#add-element-preview" + element_unid).remove();
    $("#" + type_id).remove();
    $('#addNewElement').modal('hide');
}

function addTextBlockElement(event, template) {
    var type = $("#choose_elements_dialog").attr('type');
    var type_id = $("#choose_elements_dialog").attr('type-id');
    var section_id = $("#choose_elements_dialog").attr('section-id');
    var section_unid = $("#choose_elements_dialog").attr('section-unid');
    //        var template = $("#choose_elements_dialog").attr('template');
    var column = $("#choose_elements_dialog").attr('column');
    var element_unid = $("#choose_elements_dialog").attr('element-unid');
    var element_id = $("#choose_elements_dialog").attr('element-id');
    console.log("Add element clicked");
    console.log("type id ====" + type_id);
    console.log(section_id);
    console.log(section_unid);
    console.log(type_id);
    console.log(element_unid);

    $("#add-element-settings-" + element_unid).attr("element_type", template);

    var elementhtml = getElementHtml(template, section_id);
    var elementPreviewhtml = getElementPreviewHtml(template, section_id);
    $("#element-container" + element_unid + " .add-element").remove();
    $(elementhtml).insertAfter("#" + element_id);
    $(elementPreviewhtml).insertAfter("#add-element-preview" + element_unid);


    $("#add-element-preview" + element_unid).remove();
    $("#" + type_id).remove();
    $('#addNewElement').modal('hide');
}

function addCustomJshtmlElement(event, template) {
    var type = $("#choose_elements_dialog").attr('type');
    var type_id = $("#choose_elements_dialog").attr('type-id');
    var section_id = $("#choose_elements_dialog").attr('section-id');
    var section_unid = $("#choose_elements_dialog").attr('section-unid');
    //        var template = $("#choose_elements_dialog").attr('template');
    var column = $("#choose_elements_dialog").attr('column');
    var element_unid = $("#choose_elements_dialog").attr('element-unid');
    var element_id = $("#choose_elements_dialog").attr('element-id');
    console.log("Add element clicked");
    console.log("type id ====" + type_id);
    console.log(section_id);
    console.log(section_unid);
    console.log(type_id);
    console.log(element_unid);

    $("#add-element-settings-" + element_unid).attr("element_type", template);

    var elementhtml = getElementHtml(template, section_id);
    var elementPreviewhtml = getElementPreviewHtml(template, section_id);
    $("#element-container" + element_unid + " .add-element").remove();
    $(elementhtml).insertAfter("#" + element_id);
    $(elementPreviewhtml).insertAfter("#add-element-preview" + element_unid);


    $("#add-element-preview" + element_unid).remove();
    $("#" + type_id).remove();
    $('#addNewElement').modal('hide');
}

function addFacebookButtonElement(event, template) {
    var type = $("#choose_elements_dialog").attr('type');
    var type_id = $("#choose_elements_dialog").attr('type-id');
    var section_id = $("#choose_elements_dialog").attr('section-id');
    var section_unid = $("#choose_elements_dialog").attr('section-unid');
    //        var template = $("#choose_elements_dialog").attr('template');
    var column = $("#choose_elements_dialog").attr('column');
    var element_unid = $("#choose_elements_dialog").attr('element-unid');
    var element_id = $("#choose_elements_dialog").attr('element-id');
    console.log("Add element clicked");
    console.log("type id ====" + type_id);
    console.log(section_id);
    console.log(section_unid);
    console.log(type_id);
    console.log(element_unid);

    $("#add-element-settings-" + element_unid).attr("element_type", template);

    var elementhtml = getElementHtml(template, section_id);
    var elementPreviewhtml = getElementPreviewHtml(template, section_id);
    $("#element-container" + element_unid + " .add-element").remove();
    $(elementhtml).insertAfter("#" + element_id);
    $(elementPreviewhtml).insertAfter("#add-element-preview" + element_unid);


    $("#add-element-preview" + element_unid).remove();
    $("#" + type_id).remove();
    $('#addNewElement').modal('hide');
}




function checkElementForSettings(template) {
    $(".settings-li").addClass("hide");

    if (template == "tem_headline") {
        $.each(textSetting, function (key, value) {
            $("#" + value).removeClass('hide');
        });
    }
    if (template == "section") {
        $.each(sectionSetting, function (key, value) {
            $("#" + value).removeClass('hide');
        });
    }
    if (template == "tem_sub_headline") {
        $.each(textSetting, function (key, value) {
            $("#" + value).removeClass('hide');
        });
    }
    if (template == "tem_paragraph") {
        $.each(textSetting, function (key, value) {
            $("#" + value).removeClass('hide');
        });
    }
    if (template == "tem_bullet_line") {
        $.each(bulletlistSetting, function (key, value) {
            $("#" + value).removeClass('hide');
        });
    }
    if (template == "tem_quotes") {
        $.each(quotesSetting, function (key, value) {
            $("#" + value).removeClass('hide');
        });
    }

    if (template == "tem_image") {
        $.each(imageSetting, function (key, value) {
            $("#" + value).removeClass('hide');
        });
    }
    if (template == "tem_imagepopup") {
        $.each(imageSetting, function (key, value) {
            $("#" + value).removeClass('hide');
        });
    }

    if (template == "tem_video") {
        $.each(videoSetting, function (key, value) {
            $("#" + value).removeClass('hide');
        });
    }

    if (template == "tem_videopopup") {
        $.each(videoPopupSetting, function (key, value) {
            $("#" + value).removeClass('hide');
        });
    }

    if (template == "tem_audioplayer") {
        $.each(audioPlayerSetting, function (key, value) {
            $("#" + value).removeClass('hide');
        });
    }

    if (template == "tem_button") {
        $.each(buttonSetting, function (key, value) {
            $("#" + value).removeClass('hide');
        });
    }

    if (template == "tem_fbbutton") {
        $.each(fbButtonSetting, function (key, value) {
            $("#" + value).removeClass('hide');
        });
    }

    if (template == "tem_input") {
        $.each(inputSetting, function (key, value) {
            $("#" + value).removeClass('hide');
        });
    }

    if (template == "tem_selectbox") {
        $.each(selectSetting, function (key, value) {
            $("#" + value).removeClass('hide');
        });
    }
    if (template == "tem_textarea") {
        $.each(textareaSetting, function (key, value) {
            $("#" + value).removeClass('hide');
        });
    }
    if (template == "tem_checkbox") {
        $.each(checkboxSetting, function (key, value) {
            $("#" + value).removeClass('hide');
        });
    }

    if (template == "tem_smssignup") {
        $.each(smsSetting, function (key, value) {
            $("#" + value).removeClass('hide');
        });
    }

    if (template == "tem_billingadd") {
        $.each(billSetting, function (key, value) {
            $("#" + value).removeClass('hide');
        });
    }

    if (template == "tem_shippingadd") {
        $.each(shippingSetting, function (key, value) {
            $("#" + value).removeClass('hide');
        });
    }

    if (template == "tem_survey") {
        $.each(surveySetting, function (key, value) {
            $("#" + value).removeClass('hide');
        });
    }

    if (template == "tem_countdown") {
        $.each(coundownSetting, function (key, value) {
            $("#" + value).removeClass('hide');
        });
    }

    if (template == "tem_minutetimer") {
        $.each(minuteTimerSetting, function (key, value) {
            $("#" + value).removeClass('hide');
        });
    }

    if (template == "tem_icon") {
        $.each(iconSetting, function (key, value) {
            $("#" + value).removeClass('hide');
        });
    }

    if (template == "tem_image_feature") {
        $.each(imageFeatureSetting, function (key, value) {
            $("#" + value).removeClass('hide');
        });
    }

    if (template == "tem_navigation") {
        $.each(navigationSetting, function (key, value) {
            $("#" + value).removeClass('hide');
        });
    }

    if (template == "tem_faq") {
        $.each(faqSetting, function (key, value) {
            $("#" + value).removeClass('hide');
        });
    }

    if (template == "tem_divider") {
        $.each(dividerSetting, function (key, value) {
            $("#" + value).removeClass('hide');
        });
    }

    if (template == "tem_progress_bar") {
        $.each(progressbarSetting, function (key, value) {
            $("#" + value).removeClass('hide');
        });
    }

    if (template == "tem_image_list") {
        $.each(imageListSetting, function (key, value) {
            $("#" + value).removeClass('hide');
        });
    }

    if (template == "tem_pricing_table") {
        $.each(pricingTableSetting, function (key, value) {
            $("#" + value).removeClass('hide');
        });
    }

    if (template == "tem_social_share") {
        $.each(socialShareSetting, function (key, value) {
            $("#" + value).removeClass('hide');
        });
    }

    if (template == "tem_privacy_notice") {
        $.each(privacySetting, function (key, value) {
            $("#" + value).removeClass('hide');
        });
    }

    if (template == "tem_fb_comments") {
        $.each(fbCommentsSetting, function (key, value) {
            $("#" + value).removeClass('hide');
        });
    }

    if (template == "tem_text_block") {
        $.each(textBlockSetting, function (key, value) {
            $("#" + value).removeClass('hide');
        });
    }

    if (template == "tem_custom_js_html") {
        $.each(customhtmlSetting, function (key, value) {
            $("#" + value).removeClass('hide');
        });
       function runAfter() {
        if (document.querySelector("#codeEditor")) {
            codeEditor()
        }
       }
       setTimeout(runAfter,1000)
    
    }

}





function startTimer() {
    var presentTime = document.getElementById('timer').innerHTML;
    var timeArray = presentTime.split(/[:]+/);
    var m = timeArray[0];
    var s = checkSecond((timeArray[1] - 1));
    if (s == 59) { m = m - 1 }
    if ((m + '').length == 1) {
        m = '0' + m;
    }
    if (m < 0) {
        m = '59';
    }
    document.getElementById('timer').innerHTML = m + ":" + s;
    setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
    if (sec < 10 && sec >= 0) { sec = "0" + sec }; // add zero in front of numbers < 10
    if (sec < 0) { sec = "59" };
    return sec;
}




// countdown

function startCountdown() {
    const second = 1000,
                minute = second * 60,
                hour = minute * 60,
                day = hour * 24;

            //I'm adding this section so I don't have to keep updating this pen every year :-)
            //remove this if you don't need it
            let today = new Date(),
                dd = String(today.getDate()).padStart(2, "0"),
                mm = String(today.getMonth() + 1).padStart(2, "0"),
                yyyy = today.getFullYear(),
                nextYear = yyyy + 1,
                dayMonth = "09/30/",
                birthday = dayMonth + yyyy;

                 today = mm + "/" + dd + "/" + yyyy;
          
            //end

            const countDown = new Date(birthday).getTime(),
                x = setInterval(function () {

                    const now = new Date().getTime(),
                        distance = countDown - now;

                        document.getElementById("days").innerText = Math.floor(distance / (day)),
                        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

             
                    //seconds
                }, 0)
};



//   for sidebar hide and show
$('body').click(function (evt) {
    if (evt.target.id == "right-panel" || evt.target.id == "settingIcon") {
        $("#right-panel").addClass("show_sidebar");
    } else {
        if (evt.target.id != "settingIcon") {
            $("#right-panel").removeClass("show_sidebar");
        }
    }
});

$("#settingIcon").click(function () {
    console.log("run")
    $("#right-panel").toggleClass("show_sidebar");
});

$("#right-panel").click(function (e) {
    e.stopPropagation();
});

// for copy html
// $("body").on('click', ".copyCol", function () {
//     var rowUnid = $(this).attr("row-id")
//     var unid = $(this).attr("column-id")
//     $(`#row-container${rowUnid} .col-el`).append($("#column-id" + unid).clone())
//     // console.log("running", $(`#row-container${rowUnid}`), rowUnid)
// });

// code editor
function codeEditor() {
    var editor = ace.edit('codeEditor');
    // Default value is the first one in comments
    // All options are set to default value
    editor.setOptions({
      // editor options
      selectionStyle: 'line',// "line"|"text"
      highlightActiveLine: true, // boolean
      highlightSelectedWord: true, // boolean
      readOnly: false, // boolean: true if read only
      cursorStyle: 'ace', // "ace"|"slim"|"smooth"|"wide"
      mergeUndoDeltas: true, // false|true|"always"
      behavioursEnabled: true, // boolean: true if enable custom behaviours
      wrapBehavioursEnabled: true, // boolean
      autoScrollEditorIntoView: undefined, // boolean: this is needed if editor is inside scrollable page
      keyboardHandler: null, // function: handle custom keyboard events
      
      // renderer options
      animatedScroll: false, // boolean: true if scroll should be animated
      displayIndentGuides: false, // boolean: true if the indent should be shown. See 'showInvisibles'
      showInvisibles: false, // boolean -> displayIndentGuides: true if show the invisible tabs/spaces in indents
      showPrintMargin: true, // boolean: true if show the vertical print margin
      printMarginColumn: 80, // number: number of columns for vertical print margin
      printMargin: undefined, // boolean | number: showPrintMargin | printMarginColumn
      showGutter: true, // boolean: true if show line gutter
      fadeFoldWidgets: false, // boolean: true if the fold lines should be faded
      showFoldWidgets: true, // boolean: true if the fold lines should be shown ?
      showLineNumbers: true,
      highlightGutterLine: false, // boolean: true if the gutter line should be highlighted
      hScrollBarAlwaysVisible: false, // boolean: true if the horizontal scroll bar should be shown regardless
      vScrollBarAlwaysVisible: false, // boolean: true if the vertical scroll bar should be shown regardless
      fontSize: 12, // number | string: set the font size to this many pixels
      fontFamily: undefined, // string: set the font-family css value
      maxLines: undefined, // number: set the maximum lines possible. This will make the editor height changes
      minLines: undefined, // number: set the minimum lines possible. This will make the editor height changes
      maxPixelHeight: 0, // number -> maxLines: set the maximum height in pixel, when 'maxLines' is defined. 
      scrollPastEnd: 0, // number -> !maxLines: if positive, user can scroll pass the last line and go n * editorHeight more distance 
      fixedWidthGutter: false, // boolean: true if the gutter should be fixed width
      theme: 'ace/theme/textmate', // theme string from ace/theme or custom?
     
      // mouseHandler options
      scrollSpeed: 2, // number: the scroll speed index
      dragDelay: 0, // number: the drag delay before drag starts. it's 150ms for mac by default 
      dragEnabled: true, // boolean: enable dragging
      focusTimout: 0, // number: the focus delay before focus starts.
      tooltipFollowsMouse: true, // boolean: true if the gutter tooltip should follow mouse
    
      // session options
      firstLineNumber: 1, // number: the line number in first line
      overwrite: false, // boolean
      newLineMode: 'auto', // "auto" | "unix" | "windows"
      useWorker: true, // boolean: true if use web worker for loading scripts
      useSoftTabs: true, // boolean: true if we want to use spaces than tabs
      tabSize: 4, // number
      wrap: false, // boolean | string | number: true/'free' means wrap instead of horizontal scroll, false/'off' means horizontal scroll instead of wrap, and number means number of column before wrap. -1 means wrap at print margin
      indentedSoftWrap: true, // boolean
      foldStyle: 'markbegin', // enum: 'manual'/'markbegin'/'markbeginend'.
      mode: 'ace/mode/html' // string: path to language mode 
    });
}

// adding margin top the first element
// $("body").on("mouseover", ".col-inner", function (e) {
//     $(this).closest('.col-inner').addClass("margin_top_to_element");
// });
// $("body").on("mouseout", ".col-inner", function (e) {
//     $(this).closest('.col-inner').removeClass("margin_top_to_element");
// });

