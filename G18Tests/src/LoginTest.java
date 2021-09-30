import static org.junit.Assert.assertEquals;
import java.util.concurrent.TimeUnit;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class LoginTest {

	static WebDriver driver;

//	Change your selenium driver path here
	static String pathChromeDriver="/Users/micha/Downloads/chromedriver_mac64/chromedriver";
	static String pathLoginPage="file:///Users/micha/Downloads/Lab06-TestPlatforms-SampleCodes/Lab06-TestPlatforms-SampleCodes/login.html";
	
	String txtUsername="txtUsername";
	String txtPassword="txtPassword";
	String btnLogin="btnLogin";
	String txtMessageLogin="txtMessageLogin";

	@BeforeClass
	public static void openBrowser()
	{
		System.setProperty("webdriver.chrome.driver", pathChromeDriver);
		driver= new ChromeDriver() ;
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
	}

	@AfterClass
	public static void closeBrowser() {
//		driver.quit();
	}

	@Test
	public void loginSuccessTest() throws InterruptedException {
		driver.get(pathLoginPage);
		driver.manage().window().maximize();
		driver.findElement(By.xpath("//input[@id='"+txtUsername+"']")).sendKeys("coms319");
		driver.findElement(By.xpath("//input[@id='"+txtPassword+"']")).sendKeys("lab10");

		Thread.sleep(1000);
		driver.findElement(By.xpath("//input[@id='"+btnLogin+"']")).click();

		String strMessage=driver.findElement(By.xpath("//label[@id='"+txtMessageLogin+"']")).getText();
		assertEquals("Failed test case", strMessage, "Login Success!");
	}

	@Test
	public void loginFailedTest() throws InterruptedException {
		driver.get(pathLoginPage);
		driver.manage().window().maximize();
		driver.findElement(By.id(txtUsername)).sendKeys("test");
		driver.findElement(By.id(txtPassword)).sendKeys("lab10");

		Thread.sleep(1000);
		driver.findElement(By.id(btnLogin)).click();
		String strMessage=driver.findElement(By.xpath("//label[@id='"+txtMessageLogin+"']")).getText();
		assertEquals("Failed test case", strMessage, "Login Failed!");
	}




}
