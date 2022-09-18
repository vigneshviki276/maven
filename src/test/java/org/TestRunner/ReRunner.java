package org.TestRunner;

import org.SetDefinition.JvmReport;
import org.junit.AfterClass;
import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features=
"C:\\Users\\vignesh\\eclipse-workspace\\Maven\\Rerun\\failed_case.txt",
dryRun=false,
glue="org.SetDefinition",plugin=
("rerun:C:\\Users\\vignesh\\eclipse-workspace\\Maven\\Rerun\\failed_case.txt"),monochrome = true,strict = true)
public class ReRunner {


	@AfterClass
	
	public static void jvmReport() {
     JvmReport.jvmReportGenerate
     ("C:\\Users\\vignesh\\eclipse-workspace\\Maven\\Reports\\json\\login.json");
		
	}
	
}
