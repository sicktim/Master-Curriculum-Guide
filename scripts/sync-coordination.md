# Continuity → MCG Synchronization Coordination

This document is the shared reference for cross-phase event lookups.
Each phase agent posts their MCG event code → name mapping table here,
and any cross-phase lookup requests.

## MCG Event Code Lookup Tables

### CF Phase (MCG 25B)

_Populated by CF sync agent on 2026-02-19. 99 total MCG events._

#### CF 5000 - Common Ground Training

| MCG Code | MCG Event Name |
|----------|---------------|
| CF 5101H | Emergency Parachute Training |
| CF 5110H | Life Support Equipment Training |
| CF 5120H | Local Area Survival |
| CF 5130A | Physiological Effects |
| CF 5140A | Ejection Decision Making |
| CF 5141A | Introduction to Emergency Procedures |
| CF 5201A | SARM In-Processing |
| CF 5210A | Flight Safety Brief |
| CF 5220A | Local Area Orientation Briefing |
| CF 5230A | Electronic Flight Bag Training |
| CF 5231Z | Electronic Flight Bag Turn-In |
| CF 5240E | Marshalling Exam |
| CF 5250A | DAS Academics |
| CF 5251H | DAS Planeside Academics |
| CF 5301A | Crew Resource Management |

#### CF 6100 - Airmanship Training

| MCG Code | MCG Event Name |
|----------|---------------|
| CF 6101A | Airmanship Intro |
| CF 6102A | Airmanship Lecture |
| CF 6103G | C-172 Ground School |
| CF 6110F | C-172 Airmanship FA-1 |
| CF 6111F | C-172 Airmanship FA-2 |
| CF 6112F | C-172 Airmanship FA-3 |
| CF 6113F | C-172 Airmanship FA-4 |
| CF 6114F | C-172 Airmanship FA-5 |
| CF 6115F | C-172 Airmanship FA-6 |
| CF 6120F | C-172 Airmanship CA-1 |
| CF 6121F | C-172 Airmanship CA-2 |
| CF 6130A | Curriculum Aircraft Familiarization |

#### CF 6200 - Glider Training

| MCG Code | MCG Event Name |
|----------|---------------|
| CF 6201M | Glider Familiarization and Solo MIB |
| CF 6202F | Glider Familiarization Flight 1 |
| CF 6203F | Glider Familiarization Flight 2 |
| CF 6210F | Glider Familiarization and Solo Flight 1 |
| CF 6211F | Glider Familiarization and Solo Flight 2 |
| CF 6212F | Glider Familiarization and Solo Flight 3 |
| CF 6213F | Glider Familiarization and Solo Flight 4 |
| CF 6214F | Glider Familiarization and Solo Flight 5 |
| CF 6215F | Glider Familiarization and Solo Flight 6 |

#### CF 6300 - T-38 Training

| MCG Code | MCG Event Name |
|----------|---------------|
| CF 6301G | T-38 Systems Refresher/Ground School |
| CF 6302A | T-38 Egress Academics |
| CF 6303S | T-38 Egress |
| CF 6304S | T-38 Cockpit Familiarization |
| CF 6305S | T-38 Cockpit Procedures Training |
| CF 6310B | T-38 Ground School CBT |
| CF 6320A | T-38 Compressor Stall Prevention |
| CF 6330E | T-38 Pilot Open Book Test |
| CF 6340E | T-38 Pilot Closed Book Exam |
| CF 6341E | T-38 NRA Closed Book Exam |
| CF 6350E | T-38 Pilot Boldface |
| CF 6351E | T-38 Mission Support Boldface |
| CF 6360F | T-38 CF-1 |
| CF 6361F | T-38 CF-2 |
| CF 6362F | T-38 CF-3 |
| CF 6370F | T-38 Flight Training (ABM/CSO/FTE) |
| CF 6371F | T-38 Flight Training (non-crew-solo) |
| CF 6380M | T-38 Weapons Familiarization MIB |
| CF 6381F | T-38 Weapons Familiarization |

#### CF 6400 - Learjet Training

| MCG Code | MCG Event Name |
|----------|---------------|
| CF 6401G | Calspan Variable Stability System Learjet Ground School |
| CF 6402F | Learjet CF-1 |
| CF 6403F | Learjet CF-2 |
| CF 6410F | Learjet Orientation |

#### CF 6500 - C-12 Training

| MCG Code | MCG Event Name |
|----------|---------------|
| CF 6501G | C-12 Ground School |
| CF 6502S | C-12 Egress |
| CF 6503S | C-12 Cockpit Familiarization |
| CF 6504S | C-12 Cockpit Procedures Training |
| CF 6510E | C-12 Open Book Exam |
| CF 6520E | C-12 Pilot Closed Book Exam |
| CF 6521E | C-12 MA Closed Book Exam |
| CF 6530E | C-12 Pilot Boldface |
| CF 6540F | C-12 CF-1 |
| CF 6541F | C-12 CF-2 |
| CF 6542F | C-12 CF-3 |
| CF 6550F | C-12 Flight Training (ABM/CSO/FTE) |
| CF 6551F | C-12 Flight Training (non-DG pilot) |
| CF 6552F | C-12 Flight Training (RPA) |

#### CF 6600 - F-16 Training

| MCG Code | MCG Event Name |
|----------|---------------|
| CF 6601G | F-16 Systems Refresher/Ground School |
| CF 6602A | F-16 Egress Academics |
| CF 6603S | F-16 Egress |
| CF 6604S | F-16 Cockpit Familiarization |
| CF 6605S | F-16 Cockpit Procedures Training |
| CF 6610S | F-16 Emergency Procedures Sim |
| CF 6620B | Control Room Ground School |
| CF 6621C | Control Room Familiarization |
| CF 6622C | Control Room Observation |
| CF 6630E | F-16 Open Book Exam |
| CF 6640E | F-16 Pilot/WSO Closed Book Exam |
| CF 6641E | F-16 MA Closed Book Exam |
| CF 6650E | F-16 Pilot (TPS Stud Only) CAPS |
| CF 6651E | F-16 WSO & MSF CAPS |
| CF 6660S | F-16 Emergency Procedures Checkout |
| CF 6670F | F-16 CF-1 |
| CF 6671F | F-16 CF-2 |
| CF 6672F | F-16 CF-3 |
| CF 6673F | F-16 CF-4 |
| CF 6680F | F-16 Flight Training (ABM/CSO/FTE/RPA) |
| CF 6681F | F-16 Flight Training (non-DG pilot) |
| CF 6690M | F-16 Departure Flight MIB |
| CF 6691F | F-16 Departure Flight |

#### CF 6700 - Formation / Photo-Chase Training

| MCG Code | MCG Event Name |
|----------|---------------|
| CF 6701F | T-38 CF-Form |
| CF 6710F | T-38 Form |
| CF 6720F | C-12 Form |

### FQ Phase (MCG 25B)

_Populated by FQ sync agent on 2026-02-19. 91 total MCG events across 11 modules._

#### FQ 6100 - Aircraft Equations of Motion

| MCG Code | MCG Event Name |
|----------|---------------|
| FQ 6101A | Aircraft Equations of Motion Lecture |
| FQ 6102E | Aircraft Equations of Motion Exam |
| FQ 6103Z | Aircraft Equations of Motion Debrief |

#### FQ 6200 - Aircraft Stability

| MCG Code | MCG Event Name |
|----------|---------------|
| FQ 6201A | Aircraft Stability Lecture |
| FQ 6202E | Aircraft Stability Exam |
| FQ 6203Z | Aircraft Stability Debrief |
| FQ 6210S | Flying Qualities Sim |
| FQ 6220M | Learjet VSS Introduction MIB |
| FQ 6221F | Learjet Long Stability Flight |
| FQ 6222F | Learjet Lat-Dir Stability Flight |
| FQ 6223F | Learjet Combined Long/Lat-Dir Flight |
| FQ 6230F | Glider Flying Qualities Flight |
| FQ 6240M | C-12 Static Stability Flight MIB |
| FQ 6241F | C-12 Static Stability Flight |
| FQ 6250M | Dynamics Control Room MIB |
| FQ 6251F | T-38 Dynamics Flight |
| FQ 6252C | T-38 Dynamics Control Room |

#### FQ 6300 - Flying Qualities Testing

| MCG Code | MCG Event Name |
|----------|---------------|
| FQ 6301A | T-38 Flying Qualities Test Plan Brief |
| FQ 6310F | T-38 Flying Qualities Test Plan Data Flight 1 |
| FQ 6311F | T-38 Flying Qualities Test Plan Data Flight 2 |
| FQ 6320W | T-38 Flying Qualities Test Plan Working Group |
| FQ 6321R | T-38 Flying Qualities Test Plan Oral Report |

#### FQ 7100 - Flight Control Systems

| MCG Code | MCG Event Name |
|----------|---------------|
| FQ 7101A | Flight Control Systems Lecture |
| FQ 7102E | Flight Control Systems Exam |
| FQ 7103Z | Flight Control System Debrief |
| FQ 7201A | Structures Fundamentals Lecture |
| FQ 7202A | Structures Flight Testing Lecture |
| FQ 7203E | Structures Exam |
| FQ 7204Z | Structures Debrief |
| FQ 7210A | FCS Development and Integration Testing Lecture |
| FQ 7220M | Learjet FCS Verification Ground Test MIB |
| FQ 7221I | Learjet FCS Verification Ground Test |
| FQ 7230M | F-16 Structures Envelope Expansion MIB |
| FQ 7231C | F-16 Structures Envelope Expansion Control Room |
| FQ 7232F | F-16 Structures Envelope Expansion |
| FQ 7301A | Data-Driven Analysis and Control for Domain Sciences |
| FQ 7310A | Data-Driven Control Capstone |

#### FQ 8100 - Handling Qualities Evaluation

| MCG Code | MCG Event Name |
|----------|---------------|
| FQ 8101A | Handling Qualities Evaluation Lecture |
| FQ 8102E | Handling Qualities Evaluation Exam |
| FQ 8103Z | Handling Qualities Evaluation Debrief |
| FQ 8110S | Handling Qualities Sim |
| FQ 8111S | PIO Sim |
| FQ 8120M | C-12 Multi Engine Handling Qualities MIB |
| FQ 8121F | C-12 Multi Engine Handling Qualities Flight |
| FQ 8130M | Learjet Handling Qualities Project Flight MIB |
| FQ 8131F | Learjet Handling Qualities Project Flight |
| FQ 8140M | T-38 Handling Qualities Flight MIB |
| FQ 8141F | T-38 Handling Qualities Flight |
| FQ 8150F | Target for T-38 Handling Qualities Flight |
| FQ 8160F | T-38 Combined Handling Qualities/Stall Flight |
| FQ 8170M | Learjet PIO Flight MIB |
| FQ 8171F | Learjet PIO Flight |
| FQ 8180M | VISTA Handling Qualities Flight MIB |
| FQ 8181F | VISTA Handling Qualities Flight |
| FQ 8201M | T-38 Handling Qualities Test Plan MIB |
| FQ 8202F | T-38 Handling Qualities Test Plan Data Flight |
| FQ 8210Y | T-38 Handling Qualities Test Plan Oral Report |

#### FQ 9100 - Failure Modes Testing

| MCG Code | MCG Event Name |
|----------|---------------|
| FQ 9101A | Failure Modes Testing Lecture |
| FQ 9110M | KC-135/C-12 Engine Out Testing Flight MIB |
| FQ 9111F | KC-135/C-12 Engine Out Testing Flight |

#### FQ 9200 - Stall, Departure and Spin Testing

| MCG Code | MCG Event Name |
|----------|---------------|
| FQ 9201A | Stall, Departure and Spin Testing Lecture |
| FQ 9202E | Stall, Departure and Spin Testing Exam |
| FQ 9203Z | Stall, Departure and Spin Testing Debrief |
| FQ 9210M | Glider Spin Flight MIB |
| FQ 9211F | Glider Spin Flight |
| FQ 9220M | T-38 Stall Flight MIB |
| FQ 9221F | T-38 Stall Flight |
| FQ 9230M | F-16 High AOA Envelope Expansion MIB |
| FQ 9231W | F-16 High AOA EE Test Plan Working Group 1 |
| FQ 9232W | F-16 High AOA EE Test Plan Working Group 2 |
| FQ 9233W | F-16 High AOA EE Flight Readiness Review |
| FQ 9234S | F-16 High AOA EE Rehearsal Sim |
| FQ 9235C | F-16 High AOA EE Rehearsal Control Room |
| FQ 9236F | F-16 High AOA EE Data Flight |
| FQ 9237C | F-16 High AOA EE Control Room |
| FQ 9238Y | F-16 High AOA EE Oral Report |
| FQ 9240G | A-29 Spin Ground School |
| FQ 9241M | A-29 Spin Flight MIB |
| FQ 9242F | A-29 Spin Flight |

#### FQ 9300 - Stores Certification

| MCG Code | MCG Event Name |
|----------|---------------|
| FQ 9301A | Stores Certification Lecture |

#### FQ 9400 - Envelope Expansion / First Flight

| MCG Code | MCG Event Name |
|----------|---------------|
| FQ 9401A | Aircraft Flight Envelope Testing Lecture |
| FQ 9410A | First Flight and Envelope Expansion Lecture |
| FQ 9411E | First Flight and Envelope Expansion Exam |
| FQ 9412Z | First Flight and Envelope Expansion Debrief |

#### FQ 9500 - Flying Qualities Practical Exam

| MCG Code | MCG Event Name |
|----------|---------------|
| FQ 9501M | Sim Flying Qualities Practical Exam MIB |
| FQ 9502S | Sim Flying Qualities Practical Exam |
| FQ 9503R | Sim Flying Qualities Practical Exam Written Report |
| FQ 9510M | T-38 Flying Qualities Practical Exam MIB |
| FQ 9511F | T-38 Flying Qualities Practical Exam |
| FQ 9512C | T-38 Flying Qualities Practical Control Room |
| FQ 9513R | T-38 Flying Qualities Practical Exam Written Report |

### PF Phase (MCG 25B)

_Populated by PF sync agent on 2026-02-19. 55 total MCG events._

#### PF 5100 - Performance Test Plan

| MCG Code | MCG Event Name |
|----------|---------------|
| PF 5101A | Performance Test Plan Lecture |

#### PF 6100 - Fixed Wing Aerodynamics

| MCG Code | MCG Event Name |
|----------|---------------|
| PF 6101A | Introduction to Aerodynamics Lecture |
| PF 6102E | Introduction to Aerodynamics Exam |
| PF 6103Z | Introduction to Aerodynamics Debrief |
| PF 6110A | Compressible/Hypersonic Aerodynamics Lecture |
| PF 6111E | Compressible/Hypersonic Aerodynamics Exam |
| PF 6112Z | Compressible/Hypersonic Aerodynamics Debrief |
| PF 6120M | T-38 Low L/D Flight MIB |
| PF 6121F | T-38 Low L/D Flight |

#### PF 6200 - Modeling and Simulation

| MCG Code | MCG Event Name |
|----------|---------------|
| PF 6201A | Modeling and Simulation Lecture |
| PF 6202E | Modeling and Simulation Exam |
| PF 6203Z | Modeling and Simulation Debrief |
| PF 6210A | Data Standardization Lecture |
| PF 6220M | T-38 Aerodynamic Modeling Flight/Data MIB |
| PF 6221F | T-38 Aerodynamic Modeling Flight |
| PF 6230F | Data Group Aerodynamic Modeling Data |
| PF 6240A | Model Validation Report Lecture |
| PF 6241R | Model Validation Report |

#### PF 7100 - Air Data System

| MCG Code | MCG Event Name |
|----------|---------------|
| PF 7101A | Pitot-Statics Lecture |
| PF 7102E | Pitot-Statics Exam |
| PF 7103Z | Pitot-Statics Debrief |
| PF 7110M | F-16/T-38 Tower Flyby Flight/Data MIB |
| PF 7111C | F-16/T-38 Tower Flyby Tower |
| PF 7112F | F-16/T-38 Tower Flyby Flight |
| PF 7120A | Air Data System Calibration Report Lecture |
| PF 7121R | Air Data System Calibration Report |

#### PF 7200 - Propulsion

| MCG Code | MCG Event Name |
|----------|---------------|
| PF 7201A | Propulsion Lecture |
| PF 7202E | Propulsion Exam |
| PF 7203Z | Propulsion Debrief |

#### PF 8100 - Takeoff and Cruise

| MCG Code | MCG Event Name |
|----------|---------------|
| PF 8101A | Takeoff and Landing Lecture |
| PF 8102M | Takeoff Data MIB |
| PF 8110A | Cruise Lecture |

#### PF 8200 - Energy

| MCG Code | MCG Event Name |
|----------|---------------|
| PF 8201A | Energy Lecture |
| PF 8202E | Energy Exam |
| PF 8203Z | Energy Debrief |
| PF 8210M | C-12 Level Accel/Turn Perf MIB |
| PF 8211F | C-12 Level Accel/Turn Perf Flight |
| PF 8220M | T-38 Level Accel/Turn Perf Control Room MIB |
| PF 8221C | T-38 Level Accel/Turn Perf Control Room |
| PF 8222F | T-38 Level Accel/Turn Perf Flight |
| PF 8230F | Data Group Level Accel/Turn Perf Data Flight 1 |
| PF 8231F | Data Group Level Accel/Turn Perf Data Flight 2 |
| PF 8232F | Data Group Level Accel/Turn Perf Data Flight 3 |

#### PF 8300 - Performance Testing

| MCG Code | MCG Event Name |
|----------|---------------|
| PF 8301M | C-12 Autopilot Flight Control System Flight MIB |
| PF 8302F | C-12 Autopilot Flight Control System Flight |
| PF 8310M | C-12 Performance Practical MIB |
| PF 8311F | C-12 Performance Practical Flight |
| PF 8320R | C-12 Performance Practical Written Report |
| PF 8330M | Multi-Engine Performance Practical MIB |
| PF 8331G | Multi-Engine Performance Practical Ground School |
| PF 8332F | Multi-Engine Performance Practical |
| PF 8340R | Multi-Engine Performance Practical Written Report |
| PF 8341R | Multi-Engine Performance Practical Written Report |
| PF 8350A | Performance Phase Final Test Oral Report Lecture |
| PF 8351Y | Performance Phase Final Test Oral Report |

### SY Phase (MCG 25B)

_Populated by SY sync agent on 2026-02-19. 86 total MCG events._

#### SY 5100 - Mission System Fundamentals

| MCG Code | MCG Event Name |
|----------|---------------|
| SY 5101A | Mission Systems Fundamentals Lecture |
| SY 5102L | Avionics Testing Lab |
| SY 5103R | Avionics Testing Lab Deficiency Report |

#### SY 5200 - Data-Driven Systems

| MCG Code | MCG Event Name |
|----------|---------------|
| SY 5201A | Data-Driven Analysis and Decision Making for Mission Systems Lecture |
| SY 5210S | Data Analysis Capstone |

#### SY 6100 - EO/IR and RADAR Systems

| MCG Code | MCG Event Name |
|----------|---------------|
| SY 6101A | Electro-Optics Lecture |
| SY 6102E | Electro-Optics Homework |
| SY 6103Z | Electro-Optics Debrief |
| SY 6104A | SAP/SCI Electro-Optics Lecture |
| SY 6110A | RADAR Lecture |
| SY 6111E | RADAR Homework |
| SY 6112Z | RADAR Debrief |
| SY 6113A | SAP/SCI RADAR Lecture |
| SY 6120L | RADAR Lab |
| SY 6121S | RADAR Simulator for Cleared Students |
| SY 6122S | RADAR Simulator for Uncleared Students |
| SY 6130M | F-16 Sensors Flight MIB |
| SY 6131F | F-16 Sensors Flight |
| SY 6132R | F-16 Sensors Flight Written Report |

#### SY 6200 - Space Communications

| MCG Code | MCG Event Name |
|----------|---------------|
| SY 6201A | Space Communications Lecture |
| SY 6202L | Space Communications Lab |
| SY 6203I | Space Communications and RF Exercise |
| SY 6204R | Space Communications and RF Report |

#### SY 6300 - Navigation and State Estimation

| MCG Code | MCG Event Name |
|----------|---------------|
| SY 6301A | Navigation and State Estimation Lecture |
| SY 6302Y | Navigation and State Estimation Oral Report |

#### SY 6400 - Component Mission Systems Exams

| MCG Code | MCG Event Name |
|----------|---------------|
| SY 6401E | Component Mission Systems End-of-Course Exam |
| SY 6402Z | Component Mission Systems End-of-Course Debrief |
| SY 6410A | SAP/SCI Component Test Seminar |

#### SY 7100 - Platform Mission Systems

| MCG Code | MCG Event Name |
|----------|---------------|
| SY 7101A | Human Machine Interfaces Lecture |
| SY 7102A | SAP/SCI Human Machine Interfaces Lecture |
| SY 7110A | Computer Software and Networks Lecture |
| SY 7111L | Computer Software and Networks Lab |
| SY 7112A | SAP/SCI Cyber Threats Lecture |
| SY 7120A | Testing Unmanned Platforms |

#### SY 7200 - Weapons Testing

| MCG Code | MCG Event Name |
|----------|---------------|
| SY 7201A | Weapons Integration and Testing Lecture |
| SY 7202H | Weapons Field Trip |
| SY 7210M | F-16 Weapons Delivery Sim/Flight MIB |
| SY 7211S | F-16 Weapons Delivery Sim |
| SY 7212F | F-16 Weapons Delivery Flight |
| SY 7213C | F-16 Weapons Delivery Control Room |
| SY 7214Y | F-16 Weapons Delivery Oral Report |
| SY 7220M | F-16 Weapons Delivery Domain Integration MIB |
| SY 7221W | F-16 Weapons Delivery Domain Integration Working Group |
| SY 7222F | F-16 Weapons Domain Integration Flight |
| SY 7223C | F-16 Weapons Domain Integration Control Room |
| SY 7224Y | F-16 Weapons Delivery Oral Report |

#### SY 7300 - Platform Mission Systems Testing Evaluations

| MCG Code | MCG Event Name |
|----------|---------------|
| SY 7301M | F-15E Systems Evaluation MIB |
| SY 7302G | F-15E Ground School |
| SY 7303F | F-15E Systems Evaluation Flight |
| SY 7310M | MQ-9 Systems Evaluation MIB |
| SY 7311G | MQ-9 Ground School |
| SY 7312F | MQ-9 Evaluation Flight |

#### SY 7400 - Platform Mission Systems Exams

| MCG Code | MCG Event Name |
|----------|---------------|
| SY 7401E | Platform Mission Systems End-of-Course Exam |
| SY 7402Z | Platform Mission Systems End-of-Course Debrief |
| SY 7410A | SAP/SCI Platform Test Seminar |

#### SY 7500 - Systems Practical Exams

| MCG Code | MCG Event Name |
|----------|---------------|
| SY 7501M | MQ-9 Systems Practical Exam MIB |
| SY 7502S | MQ-9 Systems Practical Exam Sim |
| SY 7503F | MQ-9 Systems Practical Exam |
| SY 7504Y | MQ-9 Systems Practical Exam Oral Report |
| SY 7510M | F-16 Systems Practical Exam MIB |
| SY 7511F | F-16 Systems Practical Exam Flight |
| SY 7512C | F-16 Systems Practical Exam Control Room |
| SY 7513Y | F-16 Systems Practical Exam Oral Report |
| SY 7520M | Space Systems Practical MIB |
| SY 7521O | Space Systems Practical |
| SY 7522Y | Space Systems Practical Oral Report |

#### SY 8100 - Communications and Datalinks

| MCG Code | MCG Event Name |
|----------|---------------|
| SY 8101A | Communications and Datalinks Lecture |
| SY 8102E | Communications and Datalinks Homework |
| SY 8103A | SAP/SCI Communications and Datalinks Lecture |

#### SY 8200 - Multi-Sensor Data Fusion

| MCG Code | MCG Event Name |
|----------|---------------|
| SY 8201A | Multi-Sensor Data Fusion Lecture |
| SY 8202A | SAP/SCI Multi-Sensor Data Fusion |
| SY 8210L | Integrated Systems Lab |

#### SY 8300 - Advanced Weapons

| MCG Code | MCG Event Name |
|----------|---------------|
| SY 8301A | Advanced Weapons Lecture |
| SY 8302A | SAP/SCI Advanced Weapons Lecture |

#### SY 8400 - Electromagnetic Warfare

| MCG Code | MCG Event Name |
|----------|---------------|
| SY 8401A | Electromagnetic Warfare Lecture |
| SY 8402A | SAP/SCI Electromagnetic Warfare Lecture |
| SY 8410S | Electronic Warfare Simulator for Cleared Students (F-22 SIL) |
| SY 8411L | Electronic Warfare Lab for Uncleared Students (Mission Systems Lab) |

#### SY 8500 - Kill Web Mission Systems Exams

| MCG Code | MCG Event Name |
|----------|---------------|
| SY 8501E | Kill Web Mission Systems End-of-Course Exam |
| SY 8502Z | Kill Web Mission Systems End-of-Course Debrief |
| SY 8510A | SAP/SCI Kill Web Test Seminar |

#### SY 9100 - Selected Topics

| MCG Code | MCG Event Name |
|----------|---------------|
| SY 9101A | Classified Briefings |
| SY 9102A | Field Trip Brief |
| SY 9110H | Field Trip |
| SY 9120S | 5th Generation Simulator |
| SY 9130H | Advanced Aircraft Tour |

### TF Phase (MCG 25B)

_Populated by TF sync agent on 2026-02-19. 120 total MCG events._

#### TF 5100 - Systems Engineering

| MCG Code | MCG Event Name |
|----------|---------------|
| TF 5101A | Systems Engineering for Testers Lecture |
| TF 5102A | Systems Modeling Architecture Lecture |
| TF 5103R | Systems Engineering for Testers Project Written Report |

#### TF 5200 - Human Systems Integration

| MCG Code | MCG Event Name |
|----------|---------------|
| TF 5201A | Human Systems Integration Lecture |
| TF 5202S | Human Systems Integration Sim/Lab |
| TF 5203A | Human Machine Interface Lecture |
| TF 5210L | Anthropometric Measurements Lab |
| TF 5220A | Introduction to Workload Rating Scales |
| TF 5230M | Human Systems Evaluation MIB |
| TF 5231S | Human Systems Evaluation Sim |
| TF 5232R | Human Systems Evaluation Modified Technical Report |

#### TF 5300 - Introduction to Test in Acquisition

| MCG Code | MCG Event Name |
|----------|---------------|
| TF 5301A | Introduction to Space Systems Testing |
| TF 5310Y | Test Policy Oral Report |
| TF 5320A | Test and Evaluation Master Plan (TEMP) Development |

#### TF 5400 - Risk Management

| MCG Code | MCG Event Name |
|----------|---------------|
| TF 5401A | Mission Risk Frameworks (MiRF) |
| TF 5410A | Test Safety Principles Lecture |
| TF 5411A | Introduction to Test Safety |
| TF 5412A | X-31 Guest Lecture |
| TF 5420A | Functional Mission Analysis |

#### TF 5500 - Photo/Safety Chase

| MCG Code | MCG Event Name |
|----------|---------------|
| TF 5501M | Photo/Safety Chase Introduction and Familiarization MIB |
| TF 5502F | T-38 Photo/Safety Chase Familiarization |
| TF 5503F | T-38 Photo/Safety Chase Introduction |
| TF 5510M | C-12 Photo/Safety Chase MIB |
| TF 5511F | C-12 Photo/Safety Chase |
| TF 5520F | C-12 Photo/Safety Chase Target |

#### TF 6100 - Plan (PEARS)

| MCG Code | MCG Event Name |
|----------|---------------|
| TF 6101A | PEARS Introduction Lecture |
| TF 6102A | Intro to Managing Tests Lecture |
| TF 6103A | Test Planning Lecture |
| TF 6104Y | Test Planning Oral Report |
| TF 6110A | Program Management Lecture |
| TF 6120A | Introduction to Operational Risk Management |
| TF 6130A | Combat Test Framework Lecture |
| TF 6140A | Operational Test |
| TF 6150A | USSF Integrated Testing |

#### TF 6200 - Execute (Test Conduct)

| MCG Code | MCG Event Name |
|----------|---------------|
| TF 6201A | Test Conduct Lecture |
| TF 6202B | Performance Test Conduct Lecture |
| TF 6210A | Time Safety Margin Lecture |
| TF 6220M | Control Room Test Conduct Primer MIB |
| TF 6221C | Control Room Test Conduct Primer |
| TF 6230M | F-16/Control Room Test Conduct Intro MIB |
| TF 6231C | F-16/Control Room Test Conduct Intro |
| TF 6232F | F-16/Control Room Test Conduct Intro Flight |
| TF 6233C | Sim/Control Room Test Conduct Intro |
| TF 6240M | C-12 Airborne Test Conduct Intro MIB |
| TF 6241F | C-12 Airborne Test Conduct Intro |
| TF 6250M | C-12 Intermediate Airborne Test Conduct MIB |
| TF 6251F | C-12 Intermediate Airborne Test Conduct |
| TF 6260A | Air Vehicle Aerodynamics Lecture |
| TF 6261A | Pitot-Statics Lecture |
| TF 6262A | Low L/D Guest Lecture |
| TF 6263M | Glider Low Lift/Drag (L/D) Exercise MIB |
| TF 6264F | Glider Low Lift/Drag (L/D) Exercise |
| TF 6265R | Glider Low Lift/Drag (L/D) Exercise Report |
| TF 6266M | Glider Low Lift/Drag (L/D) Follow-Up Exercise MIB |
| TF 6267F | Glider Low Lift/Drag (L/D) Follow-Up Exercise |
| TF 6268F | Glider Low Lift/Drag (L/D) Follow-Up Exercise Report |
| TF 6270F | T-38 Low L/D |
| TF 6280A | Secure Flight Test / Special Topics Lecture |

#### TF 6300 - Analyze (Statistics)

| MCG Code | MCG Event Name |
|----------|---------------|
| TF 6301A | Statistics for Testers Lecture |
| TF 6302Y | Statistics for Testers Oral Report |
| TF 6310A | Statistics Based Test Design Lecture |
| TF 6311Y | Statistics Based Test Design Oral Report |
| TF 6320A | Data Presentation Lecture |

#### TF 6400 - Report

| MCG Code | MCG Event Name |
|----------|---------------|
| TF 6401A | Test Reporting Lecture |
| TF 6402R | Test Reporting Written Report |
| TF 6410A | Deficiency Reports Lecture |
| TF 6420A | Oral Reporting Lecture |

#### TF 6500 - Special Subjects

| MCG Code | MCG Event Name |
|----------|---------------|
| TF 6501A | Space Acquisition and Test Lecture |
| TF 6502A | US Only Space Acquisition and Test Lecture |
| TF 6510A | Joint Test and Evaluation (JT&E) |
| TF 6520A | All Weather Testing Lecture |

#### TF 7100 - Graded Qualitative Evaluations

| MCG Code | MCG Event Name |
|----------|---------------|
| TF 7101A | Qual Eval Program Intro Lecture |
| TF 7102A | Contractor Interaction Lecture |
| TF 7110M | Graded Qual Eval 1 MIB |
| TF 7111G | Graded Qual Eval 1 Ground School |
| TF 7112F | Graded Qual Eval 1 Flight |
| TF 7113R | Graded Qual Eval 1 Report |
| TF 7120M | Graded Qual Eval 2 MIB |
| TF 7121G | Graded Qual Eval 2 Ground School |
| TF 7122F | Graded Qual Eval 2 Flight |
| TF 7123R | Graded Qual Eval 2 Report |
| TF 7130M | Graded Qual Eval 3 MIB |
| TF 7131G | Graded Qual Eval 3 Ground School |
| TF 7132F | Graded Qual Eval 3 Flight |
| TF 7133R | Graded Qual Eval 3 Report |

#### TF 7200 - Experience Broadening

| MCG Code | MCG Event Name |
|----------|---------------|
| TF 7201M | Experience Broadening Qual Eval MIB |
| TF 7210-15G | Experience Broadening Qual Eval Ground School 1-6 |
| TF 7220-25F | Experience Broadening Qual Eval Flight 1-6 |
| TF 7230G | C-17 Experience Broadening Qual Eval Ground School |
| TF 7231F | C-17 Experience Broadening Qual Eval Flight |
| TF 7240S | Heavy Aircraft Sim Evals |
| TF 7250G | Navy TPS Fixed Wing Qual Eval Ground School |
| TF 7251F | Navy TPS Fixed Wing Qual Eval Flight |

#### TF 7300 - Rotary Wing

| MCG Code | MCG Event Name |
|----------|---------------|
| TF 7301M | Intro to Rotary Wing Flight MIB |
| TF 7302G | Intro to Rotary Wing Ground School |
| TF 7303F | Intro to Rotary Wing Flight |
| TF 7310G | Advanced Rotary Wing Qual Eval Ground School |
| TF 7311F | Advanced Rotary Wing Qual Eval Flight |

#### TF 7400 - Additional Broadeners

| MCG Code | MCG Event Name |
|----------|---------------|
| TF 7401C | Real-World Control Room Observation |

#### TF 7500 - Capstone Qualitative Evaluation

| MCG Code | MCG Event Name |
|----------|---------------|
| TF 7501M | Capstone Qual Eval MIB |
| TF 7502R | Capstone Qual Eval Test Plan |
| TF 7503F | Capstone Qual Eval Flight |
| TF 7504Y | Capstone Qual Eval Oral Report |

#### TF 7600 - WGS

| MCG Code | MCG Event Name |
|----------|---------------|
| TF 7601A | Wideband Global SATCOM (WGS) Intro |

#### TF 8100-8300 - Test Management Project (TMP)

| MCG Code | MCG Event Name |
|----------|---------------|
| TF 8101A | TMP Assignments and Intro Lecture |
| TF 8102W | TMP Resources Workshop |
| TF 8103W | TMP Core Team Meeting |
| TF 8104W | TMP Test Plan Working Group 1 |
| TF 8105W | TMP Test Plan Working Group 2 |
| TF 8106R | TMP Test Plan and Safety Package |
| TF 8107W | TMP Technical Review Board/Safety Review Board |
| TF 8108Y | TMP Test Approval Briefing |
| TF 8201F | TMP Data Flights/Events |
| TF 8301Y | TMP Program Assessment Review 1 |
| TF 8302W | TMP Pre-Writers Meeting |
| TF 8303Y | TMP Program Assessment Review 2 |
| TF 8304W | TMP Data Working Group |
| TF 8305W | TMP Report Coordination Meeting |
| TF 8306R | TMP Final Written Report (TIM) |
| TF 8307Y | TMP Final Oral Report |

#### TF 9100 - Comprehensive Exams

| MCG Code | MCG Event Name |
|----------|---------------|
| TF 9101M | Comprehensive Written Exam MIB |
| TF 9102E | Comprehensive Written Exam |
| TF 9110M | Comprehensive Oral Exam MIB |
| TF 9111E | Comprehensive Oral Exam |

### AN Phase (MCG 25B)
_Pending — populated on demand for cross-phase prereqs_

### AS Phase (MCG 25B)
_Pending — populated on demand for cross-phase prereqs_

### SO Phase (MCG 25B)
_Pending — populated on demand for cross-phase prereqs_

### TL Phase (MCG 25B)
_Pending — populated on demand for cross-phase prereqs_

## Cross-Phase Requests

Format: `[FROM: XX] Looking for MCG code for "event name" referenced in YY continuity`
Responses: `[TO: XX] MCG code is ZZ 1234A = "Official Name"`

_Requests will be added here by agents_

### CF Phase Cross-Phase Requests (added 2026-02-19)

`[FROM: CF] Looking for MCG code for "AN 5130A - Check Flight Introduction" referenced in CF continuity prerequisites (external prereq from AN phase)`
`[FROM: CF] Looking for MCG code for "SY 7911 - Weapons Lecture" referenced in CF continuity event CF 6356FM (T-38 Weapons Fam)`

### FQ Phase Cross-Phase Requests (added 2026-02-19)

`[FROM: FQ] Looking for MCG code for "TF 6351F - C-12 Airborne Test Conduct Intro" referenced in FQ continuity prereqs (Learjet flights FQ 6351FA/6352FA/6353FN). Continuity uses "TF 6351F". MCG 25B FQ phase uses "TF 6241F = C-12 Airborne Test Conduct Intro" as prereq for FQ 6220M/6221F/6222F/6223F.`
`[FROM: FQ] Looking for MCG code for "TF 6361CE - F-16 Propulsion Intro" referenced in FQ continuity prereqs (F-16 Structures EE FQ 7553FH/CE, F-16 High AOA FQ 9775FH/CE). Need TF phase confirmation of code "TF 6361CE" or its MCG equivalent.`
`[FROM: FQ] Looking for MCG code for "PF 8357CE - F-16/T-38 Turn Perf Control Room" referenced in FQ continuity prereqs (F-16 Structures EE, F-16 High AOA). PF MCG 25B has "PF 8221C = T-38 Level Accel/Turn Perf Control Room" which may be the match.`
`[FROM: FQ] Looking for MCG code for "CF 6551 - T-38 Chase Fam" referenced in FQ continuity prereqs (T-38 HQ Flight FQ 8753FA). CF MCG 25B has "CF 6551F = C-12 Flight Training (non-DG pilot)" which is NOT a match. Need CF phase confirmation -- this may be CF 6701F T-38 CF-Form or similar.`
`[FROM: FQ] Looking for MCG code for "AN 5160A - Flight Sciences Phase Introduction" referenced in MCG 25B as prereq for FQ 6101A/6102E/6103Z. Need AN phase confirmation.`

### PF Phase Cross-Phase Requests (added 2026-02-19)

`[FROM: PF] Looking for MCG code for "TF 6351F - C-12 Airborne Test Conduct Intro" referenced in PF continuity prereqs (events #9, 13, 14, 15, 23, 25). Continuity uses "TF 6351F" but MCG 25B uses "TF 6241F = C-12 Airborne Test Conduct Intro"`
`[FROM: PF] Looking for MCG code for "TF 6314A - Performance Test Conduct Lecture" referenced in PF continuity prereqs (events #13, 14, 24). MCG 25B uses "TF 6202B = Performance Test Conduct Lecture"`
`[FROM: PF] Looking for MCG code for "CF 6351FP - T-38 CF-1 (PILOT)" referenced in PF continuity prereqs. MCG 25B CF phase has "CF 6360F = T-38 CF-1"`
`[FROM: PF] Looking for MCG code for "CF 6354FP - T-38 CF-4 (PILOT)" referenced in PF continuity prereqs. MCG 25B CF phase goes up to CF-3 (CF 6362F); no CF-4 exists`
`[FROM: PF] Looking for MCG code for "CF 6355FN - T-38 TRAINING FLIGHT (FTE)" referenced in PF continuity prereqs. MCG 25B has "CF 6370F = T-38 Flight Training (ABM/CSO/FTE)"`
`[FROM: PF] Looking for MCG code for "CF 6553FP - C-12 CF-3 (PILOT)" referenced in PF continuity prereqs. MCG 25B has "CF 6542F = C-12 CF-3"`
`[FROM: PF] Looking for MCG code for "CF 6754FP - F-16 CF-4 (PILOT)" referenced in PF continuity prereqs. MCG 25B has "CF 6673F = F-16 CF-4"`
`[FROM: PF] Looking for MCG code for "CF 6755FJ - F-16 TRAINING (FTE)" referenced in PF continuity prereqs. MCG 25B has "CF 6680F = F-16 Flight Training (ABM/CSO/FTE/RPA)"`
`[FROM: PF] Looking for MCG code for "CF 6452FB - LEARJET CF-2 (CSO/RPA)" referenced in PF continuity prereqs. MCG 25B has "CF 6403F = Learjet CF-2"`
`[FROM: PF] Looking for MCG code for "CF 6751FP - F-16 CF-1 (P)" referenced in PF continuity prereqs. MCG 25B has "CF 6670F = F-16 CF-1"`

### SY Phase Cross-Phase Requests (added 2026-02-19)

`[FROM: SY] Looking for MCG code for "TF 6713A - Deficiency Reports Lecture" referenced in SY continuity prereq for SY 5711L. MCG 25B SY phase uses "TF 6410A = Deficiency Reports Lecture" as prereq for SY 5101A/5102L/5103R.`
`[FROM: SY] Looking for MCG code for "TF 6111A - Test Planning Lecture" referenced in SY continuity prereq for SY 6551F. MCG 25B SY phase uses "TF 6103A = Test Planning Lecture" as prereq for SY 6130M.`
`[FROM: SY] Looking for MCG code for "TF 6361CE/FO - F-16 Propulsion Intro" referenced in SY continuity prereq for SY 7561FH (F-16 Weapons Delivery Intro). Need TF phase MCG code confirmation.`
`[FROM: SY] Looking for MCG code for "CF 6356FM - T-38 Weapons Fam" referenced in SY continuity prereq for SY 7561FH. MCG 25B CF phase has "CF 6381F = T-38 Weapons Familiarization".`
`[FROM: SY] Looking for MCG code for "SY 9601AU - US Only Briefings" referenced in SY continuity prereq for SY 8221LU. MCG 25B has "SY 9101A = Classified Briefings".`
`[FROM: SY] Looking for MCG code for "SY 8211A - Introduction to Data Fusion Lecture" referenced in SY continuity prereq for SY 8221LU. MCG 25B has "SY 8201A = Multi-Sensor Data Fusion Lecture".`
`[FROM: SY] Looking for MCG code for "SY 8311 - Electronic Warfare Lecture" referenced in SY continuity prereq for SY 8521SU. MCG 25B has "SY 8401A = Electromagnetic Warfare Lecture".`
`[FROM: SY] Looking for MCG code for "SY 8511A - Electronic Warfare Lecture" referenced in SY continuity prereq for SY 8521LF. MCG 25B has "SY 8401A = Electromagnetic Warfare Lecture".`
`[FROM: SY] Looking for MCG code for "SY 8611AU - US Only Cybernetic Systems Vulnerabilities and Threats Lecture" referenced in SY continuity prereq for SY 9221LU. No direct MCG match found - likely a renamed/removed event.`
`[FROM: SY] Looking for MCG code for "SY 9211A - US Only Cybernetic Systems Vulnerabilities and Threats Lecture" referenced in SY continuity (2nd instance) prereq for SY 9221LU. No direct MCG match found.`
`[FROM: SY] Responding to CF request: "SY 7911 - Weapons Lecture" -- MCG 25B has "SY 7201A = Weapons Integration and Testing Lecture" which is the closest match.`

### TF Phase Cross-Phase Requests (added 2026-02-19)

`[FROM: TF] Confirming for PF/FQ: Continuity "TF 6351F - C-12 Airborne Test Conduct Intro" maps to MCG 25B "TF 6241F = C-12 Airborne Test Conduct Intro"`
`[FROM: TF] Confirming for PF: Continuity "TF 6314A - Performance Test Conduct Lecture" maps to MCG 25B "TF 6202B = Performance Test Conduct Lecture"`
`[FROM: TF] Continuity "TF 6331SE - Sim/CR Test Conduct Primer" maps to MCG 25B "TF 6221C = Control Room Test Conduct Primer" (code TF 6221C, type C not SE)`
`[FROM: TF] Continuity "TF 6359F - C-12 Intermediate Airborne" maps to MCG 25B "TF 6251F = C-12 Intermediate Airborne Test Conduct"`
`[FROM: TF] Continuity "TF 6361C - F-16 Control Room Test Conduct Intro" maps to MCG 25B "TF 6231C = F-16/Control Room Test Conduct Intro"`
`[FROM: TF] Continuity "TF 7760O - US Only Real-World Control Room Obsv" maps to MCG 25B "TF 7401C = Real-World Control Room Observation" (code TF 7401C, type C not O)`
`[FROM: TF] Confirming for FQ: Continuity "TF 6361CE" does NOT exist as a standalone code. Closest MCG matches are "TF 6231C = F-16/Control Room Test Conduct Intro" or "TF 6232F = F-16/Control Room Test Conduct Intro Flight"`
`[FROM: TF] Looking for MCG code for "CF 6703CE - F-16 Control Room Familiarization (FTE)" referenced in TF continuity prereqs. CF MCG 25B has "CF 6621C = Control Room Familiarization"`
`[FROM: TF] Looking for MCG code for "CF 6552FP - C-12 CF-2 (crew solo P)" referenced in TF continuity prereqs. CF MCG 25B has "CF 6541F = C-12 CF-2"`
`[FROM: TF] Looking for MCG code for "CF 6652FR - C-12 CF-3 (RPA)" referenced in TF continuity prereqs. CF MCG 25B has "CF 6542F = C-12 CF-3"`
`[FROM: TF] Looking for MCG code for "CF 6554FN/FP - C-12 Training Flt (FTE/CSO/non-crew solo P)" referenced in TF continuity prereqs. CF MCG 25B has "CF 6550F = C-12 Flight Training (ABM/CSO/FTE)" and "CF 6551F = C-12 Flight Training (non-DG pilot)"`
`[FROM: TF] Looking for MCG code for "CF 6755FJ - F-16 Flight Training (FTE)" referenced in TF continuity prereqs. CF MCG 25B has "CF 6680F = F-16 Flight Training (ABM/CSO/FTE/RPA)"`
`[FROM: TF] Looking for MCG code for "TF 6313AU - US Only Secure Flight Test Lecture" referenced in TF continuity prereqs for TF 7760O. MCG 25B has "TF 6280A = Secure Flight Test / Special Topics Lecture" (code changed from 6313AU to 6280A)`
`[FROM: TF] Looking for MCG codes for "FQ 6351FA/6352FA/6353FN/6551F" referenced in TF continuity Graded Qual Eval prereqs. Need FQ agent confirmation of MCG equivalents.`
`[FROM: TF] Looking for MCG code for "PF 8355F - Data Group Level Accel/Sawtooth Climb Data Flight 1" referenced in TF continuity prereqs for TF 6359F. PF MCG 25B has "PF 8230F = Data Group Level Accel/Turn Perf Data Flight 1" which may be the match.`
`[FROM: TF] Looking for MCG code for "PF 8358F - Data Group Turn Perf Data Flight 1" referenced in TF continuity prereqs for TF 6359F. PF MCG 25B has "PF 8230F = Data Group Level Accel/Turn Perf Data Flight 1" or "PF 8231F = Data Group Level Accel/Turn Perf Data Flight 2".`

## Matching Rules
1. Match by event code first (ignore trailing letter suffixes like E, P, N after the type letter)
2. Match by event name similarity for remaining
3. Flag any continuity events with NO MCG match as "continuity-only"
4. Flag any significant name differences for human review
