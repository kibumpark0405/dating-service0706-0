package dating.service.common;

import dating.service.MemberManagementContextApplication;
import io.cucumber.spring.CucumberContextConfiguration;
import org.springframework.boot.test.context.SpringBootTest;

@CucumberContextConfiguration
@SpringBootTest(classes = { MemberManagementContextApplication.class })
public class CucumberSpingConfiguration {}
