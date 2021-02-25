# CareDx-challenge
<b></b>
<b></b>
<p align="center"> 
Salesforce Visualforce page built using Skuid UX/UI tool. This Page creates an An Overview of a Coffee Company's Child Accounts, Open Cases, Opportunites and Pipeline Value. 
  
## Table of Contents
1. [Demo](https://github.com/rdelarosa3/caredx-challenge#demo)
2. [Technologies Applied](https://github.com/rdelarosa3/caredx-challenge#technologies)
3. [Overview - Approach - Assumptions](https://github.com/rdelarosa3/caredx-challenge#overview)

### Demo

                        
### Technologies

- Salesforce.com [link](https://developer.salesforce.com/)
- Visualforce [link](https://developer.salesforce.com/docs/atlas.en-us.pages.meta/pages/pages_intro.htm)
- Skuid v12.4.20 [link](https://www.skuid.com/)

### Overview 

### Approach

1. Use of Skuid Page API version 1.
2. Use Standard sObjects to tie with models.
3. Use of Skuid Design Systems to create theme for Skuid Page
4. Created inline CSS inline to apply unique formatting to Skuid Components throught their CSS Classes
5. JavaScript Snippets to handle Interactions such as click events.
6. Use of Action Sequences to automate sObject, Component, UI manipulation. 

### Guide

1. User may view and search through the Accounts List on the left section.  
2. When an account is selected/clicked an Action Sequence will be triggered that queries 6 models tying them to the id of the account.
3. The Account information is rendered on the right section displaying an overview of the account.
4. The top section shows the Account Name and allows new Case Creation.
5. Below that section there are 3 Tiles with Interaction (click events) handled by Javascript Snippets.
6. When Cases are open user can click the tile and a Side Panel will open displaying the cases.
7. In the SidePanel thorugh the use of Field Editor the user can edit the Case.
8. If Case is updated and saved an Action Sequence will be triggered to query relaed models.
9. In the Pipeline Chart section user has ability to toggle diplay show/hide with the use of JavaScript Snippet
10. When Pipleine Stage is clicked Modal is open with Table details of Opportunity
11. Below a Deck Component is used to display Child Accounts Opportunities
12. Using Tab Compenent User can view Open Opportunites and Closed.
13. User cand edit Open Opportunites through Row Actions and using A Mass Row Action that triggers an Acion Sequence the user can refresh Models.
