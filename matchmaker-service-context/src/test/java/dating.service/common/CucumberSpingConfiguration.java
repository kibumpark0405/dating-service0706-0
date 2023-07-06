package dating.service.common;

import dating.service.MatchmakerServiceContextApplication;
import io.cucumber.spring.CucumberContextConfiguration;
import org.springframework.boot.test.context.SpringBootTest;

@CucumberContextConfiguration
@SpringBootTest(classes = { MatchmakerServiceContextApplication.class })
public class CucumberSpingConfiguration {}
