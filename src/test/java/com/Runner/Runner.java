package com.Runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)

@CucumberOptions(features="src/test/resources/Features",glue={"com.stepDefinition"},
monochrome=false,
plugin= {"html:Reports\\HTMLReports1","json:Reports\\JsonReports\\Cucumber.json",
		"junit:Reports\\JUnitReports\\Cucumber.xml"} ,
dryRun=true



)

public class Runner {

}
