package org.SetDefinition;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class JvmReport {

	public static void jvmReportGenerate(String s) {

		File f = new File("C:\\Users\\vignesh\\eclipse-workspace\\Maven\\Reports\\jvm");

		Configuration co = new Configuration(f, "login");
		co.addClassifications("jdk", "13.0.2");
		co.addClassifications("tools", "selenium");
		co.addClassifications("ci", "jenkins");

		
		List<String> li = new ArrayList<String>();
		li.add(s);

		
		ReportBuilder b = new ReportBuilder(li, co);
		b.generateReports();

	}

}
