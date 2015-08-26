/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// ####################################################################################################################################################
// #################################################### PUBLIC ATTRIBUTES #############################################################################
// ####################################################################################################################################################

// Property that represents the map shows in the app
var filePath = "../res/xml/catalog.xml";

// XML TAGS
var tagCatalog = "catalog";
var tagGroup = "contact_group";
var tagPerson = "contact";

var catalog;
var groups;
var contacts;

// ###################################################################################################################################################
// ################################################## PHONEGAP DEFAULT FUNCTIONS #####################################################################
// ###################################################################################################################################################

// Application Constructor
function initialize() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
}

// deviceready Event Handler
// The scope of 'this' is the event. In order to call the 'receivedEvent'
// function, we must explicitly call 'app.receivedEvent(...);'
function onDeviceReady() {
    console.log('Log: JAM-app starts..');
    
    // Call to parse the catalog.xml file
    parser();
}

// ###################################################################################################################################################
// ############################################################ PARSER FUNCTIONS #####################################################################
// ###################################################################################################################################################

/**
 * Function that parse the XML file for catalog
 */
function parser() {
    console.log('Log: XML parser initialized..');
    
    // Obtain the raw information for the XML file
  /*  var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    xmlhttp.send();
    var xmlDoc = xmlhttp.responseXML;     
    catalog = xmlDoc.getElementsByTagName(tagCatalog);
    alert("Info: Catalog size is " + catalog.length);
    
    // Loop around all groups to get all information
    groups = [];
    for (var i = 0; i < catalog.length; i++) {
        var currentGroup = catalog[i].getElementsByTagName(tagGroup);
        groups.push(currentGroup);
        // Now, loop around the current group and print its values TESTING
        for (int j = 0; j < currentGroup.length; j++) {
            var currentContact = currentGroup[j].getElementsByTagName(tagPerson);
            contacts.push(currentContact);
            console.log("Log: current contact info is " + currentContact);
            alert("Contact " + j + " in group " + i);
        }
    }*/
}
