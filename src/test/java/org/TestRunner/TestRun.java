package org.TestRunner;

import org.SetDefinition.JvmReport;
import org.junit.AfterClass;
import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features="C:\\Users\\vignesh\\eclipse-workspace\\Maven\\src\\test\\resources",
dryRun=false,glue="org.SetDefinition",monochrome = true,strict = true,
plugin={"rerun:C:\\Users\\vignesh\\eclipse-workspace\\Maven\\Rerun\\failed_case.txt",
		"html:C:\\Users\\vignesh\\eclipse-workspace\\Maven\\Reports\\html",
		"junit:C:\\Users\\vignesh\\eclipse-workspace\\Maven\\Reports\\junit\\log.xml",
		"json:C:\\Users\\vignesh\\eclipse-workspace\\Maven\\Reports\\json\\login.json"}
		)

public class TestRun {
	
	@AfterClass
	
	public static void jvmReport() {
     JvmReport.jvmReportGenerate
     ("C:\\Users\\vignesh\\eclipse-workspace\\Maven\\Reports\\json\\login.json");
		
	}

}
