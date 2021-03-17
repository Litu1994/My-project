package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="C:\\Users\\SAMIKSHYA DASH\\eclipse-workspace\\com.naveenproject\\src\\main\\java\\Features\\login.feature"
                 ,glue= {"stepDefination"},
                 format= {"pretty","html:test-output","json:json_output/cucumber.json","junit:junit_xml/cucumber.xml"},
                 monochrome= true,
                 dryRun = false
                 )
                
public class TestRunner {													

}
