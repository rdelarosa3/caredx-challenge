# CareDx Skuid Challenge
<b></b>
<b></b>
<p align="center"> 
Salesforce Visualforce page built using Skuid UX/UI tool. This Page creates an An Overview of a Coffee Company's Child Accounts, Open Cases, Opportunites and Pipeline Value. 
  
## Table of Contents
1. [Demo](https://github.com/rdelarosa3/caredx-challenge#demo)
2. [Technologies Applied](https://github.com/rdelarosa3/caredx-challenge#technologies)
3. [Install Instructions](https://github.com/rdelarosa3/caredx-challenge#instructions)
3. [Overview - Approach - Guide](https://github.com/rdelarosa3/caredx-challenge#overview)

### Demo

![ezgif com-gif-maker (5)](https://user-images.githubusercontent.com/40813295/109212553-48ba9b00-7775-11eb-8aa8-db2ae1f0fd1d.gif)
<img width="600" alt="Screen Shot 2021-02-25 at 1 12 24 PM" src="https://user-images.githubusercontent.com/40813295/109219331-1614a080-777d-11eb-9102-232980ec94a4.png">


                        
### Technologies

- Salesforce.com [link](https://developer.salesforce.com/)
- Visualforce [link](https://developer.salesforce.com/docs/atlas.en-us.pages.meta/pages/pages_intro.htm)
- Skuid v12.4.20 [link](https://www.skuid.com/)

### Instructions
- Use Skuid UX/UI Tool
- Page API:  V1
- Data source: Uses default Salesforce data source
- Design system: [Download this sktheme file](https://github.com/rdelarosa3/caredx-challenge/blob/main/caredx-challenge/CareDxV2.sktheme).  Use the Import function on the Design System page to add this system to your org. 
- Page XML:  [Download this xml file](https://github.com/rdelarosa3/caredx-challenge/blob/main/caredx-challenge/caredx.xml), and Create new Skuid Page select XML options and import XML file.
- In Page Composer edit page properties ensure sktheme file is selected by its name.
- Using Salesforce Classic create a new Visualforce page.
- Include <skuid:page page="YOURSKUIDPAGENAME"/> in Visualforce markup.

### Overview 

#### Approach

1. Use of Skuid Page API version 1.
2. Use Standard sObjects to tie with models.
3. Use of Skuid Design Systems to create theme for Skuid Page
4. Created inline CSS to apply unique formatting to Skuid Components through their CSS Classes
5. JavaScript Snippets to handle Interactions such as click events.
6. Use of Action Sequences to automate sObject, Component, UI manipulation. 

#### Guide

*** Requirements to interact with page*** 

Create Accounts with name ending in (Global).
Create at least one Child account for each Global Acccount.
Create Open/ Closed Opportunites for each child account to interact with chart.
Create At least one open case for any child company

1. User may view and search through the Accounts List on the left section.  
2. When an account is selected/clicked an Action Sequence will be triggered that queries 6 models tying them to the id of the account.
3. The Account information is rendered on the right section displaying an overview of the account.
4. The top section shows the Account Name and allows new Case Creation.
5. Below that section there are 3 Tiles with Interaction (click events) handled by Javascript Snippets.
6. When Cases are open user can click the tile and a Side Panel will open displaying the cases.
7. In the SidePanel thorugh the use of Field Editor the user can edit the Case.
8. If Case is updated and saved an Action Sequence will be triggered to query related models.
9. In the Pipeline Chart section user has ability to toggle diplay show/hide with the use of JavaScript Snippet
10. When Pipleine Stage is clicked Modal is open with Table details of Opportunity
11. Below a Deck Component is used to display Child Accounts Opportunities
12. Using Tab Compenent User can view Open and Closed Opportunites.
13. User may edit Open Opportunites through Row Actions and the user may refresh Models using a Mass Row Action that triggers an Action Sequence.
