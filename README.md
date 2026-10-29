# Trusted Relationship

## Introduction to Trusted Relationship

A trusted relationship attack is a cyberattack where attackers target organizations that have access to the intended victim of the attack. They use the connection between the intended target and the associated third party company in order to accomplish their goals.

## Why Trusted Relationship?

Large organizations often rely on complex systems to manage operations, interact with users, and maintain their business. This often makes them a target for cyber attacks. Because these organizations know that they are a possible target for cybercriminals, they often employ strict cybersecurity measures in an attempt to protect their company. Because these organizations are so large, though, they also often rely on other companies to help manage the company and system. These external organizations could include IT services, cloud service providers, software vendors, network providers, payroll management, and more. These external companies need elevated access to internal systems in order to accomplish their job within the system. Gaining access to these associated companies can be the easiest way to gain unauthorized access to the larger, target company, which is why attackers would perform a trusted relationship attack.

## Prerequisites and Assumptions

In order for a trusted relationship attack to be effective, the target organization must have a relationship with an external company and they must have given this third party organization elevated access to their system. There must also be a possible exploit in the third party company that the attacker can exploit to gain access to the target business.

## How Trusted Relationship Works

An attacker would use a trusted relationship attack to get initial access to their target organization. The attacker could target the third party organization in a variety of ways, most common of which are exploiting vulnerabilities in common software applications, utilizing compromised credentials, and targeted phishing attacks. Once they have access to the service provider's system, they can collect information and credentials about the target organization. Attackers can also use the services provided to the target to gain entrance to their system. In a trusted relationship attack, attackers will use the relationship between the target organization and third party service provider to accomplish their goals.

## 2013 Target Data Breach

One real-life example of a trusted relationship attack is the Target Data Breach that took place in 2013. In this instance, attackers were able to exploit the relationship Target had with Fazio Mechanical Services, a small third party HVAC company in Pennsylvania. This small company had not invested many resources in cybersecurity and was extremely vulnerable to an attack. Because Target gave this company hightened access within their network, attackers were easily able to take advantage of the vulnerabilities in the HVAC company and weaponize them against Target.
<br><br>
The attackers utilized a phishing email to gain access to the HVAC company, and then used used Target's trusted relationship between the organizations to gain access to Target's network. They then moved laterally through Target's network and installed malware on Target's Point of Sale (POS) terminals. This malware, a discrete RAM-scraping program, was activated during Thanksgiving / Black Friday shopping week in 2013. This malware would copy payment information as it passed through the machine's memory, collecting credit card and personal information of millions of customers. In total, up to 110 million customers had their financial or personal information stolen in this attack. This attack cost Target over $200 million and is an excellent example of the importance of securing and limiting trusted relationships between associated organizations.

## MITRE ATT&CK

Trusted Relationship attacks are classified as MITRE ATT&CK T1199 under Initial Access. Although there are no listed sub-techniques, the MITRE ATT&CK page explains that these relationships between organizations often allow attackers to use existing accounts with extended access to attack their target company. The MITRE ATT&CK page also lists multiple exapmles of this attack and how it was carried out.

## Detection Opportunities

Trusted relationship attacks are difficult to identify because they often occur from legitimate networks using valid credentials. The main way for a company to detect a trusted relationship attack is through detecting suspicious behavior from trusted organizations. It is important to monitor these trusted groups for unusual behavior and log elevated privilege use. If these accounts access information that they do not need or move through a system atypically, it can be an indication that they were compromised and a trusted relationship attack is taking place. These accounts making multiple high privilege calls in quick succession, requesting higher access, or suddenly establishing a remote session can also indicate a trusted relationship attack. It is important to keep and monitor logs of all third party organizations in order to have the best chance at quickly detecting a trusted relationship attack. Closely monitoring these logs and any activity within the system is important both inside and outside of normal work hours. It is also possible to identify a trusted relationship attack through monitoring VPN connections and the IP addresses of third party companies for abnormalities.

## Mitigations and Defenses

There are multiple ways to preemptively mitigate and defend against trusted relationship attacks. One way to do this is requiring Multi-Factor Authentication (MFA) for third party organizations. This means necessitating these companies to confirm their identity with more than just their password before accessing sensitive information or high privilege accounts. Another way to mitigate the effects of a trusted relationship attack is through network segmentation, which means isolating different parts of the network from each other. This would make it more difficult for an attacker to move laterally throughout the network once they gain access to the system. An organization could use network segmentation to separate the parts of a network that third party accounts need to access from the rest of the network, preventing these other companies from seeing and accessing sensitive information outside of the scope of their job.

## Key Takeaways

## Sources

* [MITRE ATT&CK T1199](https://attack.mitre.org/techniques/T1199/)
* [MITRE ATT&CK Playbook](https://xsoar.pan.dev/docs/reference/playbooks/mitre-attck-co-a---t1199---trusted-relationship)
* [Trusted Relationship Attack and Counters](https://encyclopedia.kaspersky.com/glossary/trusted-relationship-attack/)
* [Trusted Relationship Progression and Prevention](https://securelist.com/trusted-relationship-attack/112731/)
* [Analysis of 2013 Target Data Breach](https://www.commerce.senate.gov/wp-content/uploads/media/doc/2014%200325%20Target%20Kill%20Chain%20Analysis.pdf)