package dating.service.common;

import dating.service.MatchingManagementContextApplication;
import io.cucumber.spring.CucumberContextConfiguration;
import org.springframework.boot.test.context.SpringBootTest;

@CucumberContextConfiguration
@SpringBootTest(classes = { MatchingManagementContextApplication.class })
public class CucumberSpingConfiguration {}
