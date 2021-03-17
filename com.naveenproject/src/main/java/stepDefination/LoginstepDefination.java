package stepDefination;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginstepDefination {
	private  static WebDriver driver;

	@Given("^user should have launched telefonica url$")
	public void user_should_have_launched_telefonica_url() throws InterruptedException {
		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\SAMIKSHYA DASH\\Downloads\\chromedriver_win32\\chromedriver.exe\\");
		 driver = new ChromeDriver();
		driver.get("https://www.o2.co.uk/");
		driver.manage().window().maximize();
        Thread.sleep(5000);
	}
	@When("^user validate page title$")
	public void user_validate_page_title() {
		String title=driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("O2 | Mobile Phones, Mobile Broadband and Sim Only Deals on O2", title);

	}




	@Then("^User mouse hover to shop$")
	public void user_mouse_hover_to_shop() {
		System.out.println("driver="+driver);
		Actions act = new Actions(driver);
		WebElement shop= driver.findElement(By.xpath("//ul[@class='linksDesktop']//li[@name='Shop']//a"));
		act.moveToElement(shop).build().perform();
	}

	@And("^User select phones$")
	public void user_select_phones() throws InterruptedException{
		driver.findElement(By.xpath("//a[@data-href='/shop/phones']")).click();
		Thread.sleep(5000);
		

	}

	@Then("^user enters \"(.*)\" in searchbar$")
	public void user_enters_phoneName_in_searchbar(String phoneName) throws InterruptedException  {
		driver.findElement(By.xpath("//input[@id='listing-search']")).sendKeys(phoneName);
		Thread.sleep(3000);
		driver.findElement(By.xpath( 
				"//div[@class='header-search-xxl-results']//a[@href='/shop/apple/iphone-11#contractType=paymonthly']")).click();
	  
	   driver.navigate().refresh();
	}


	@Then("^User validate the iphone$")
	public void user_validate_the_iphone() throws InterruptedException {
		
		String phonename =driver.findElement(By.xpath("//div[@title='iPhone 11']")).getText();
		System.out.println(phonename);
		
		Assert.assertEquals("iPhone 11", phonename);
		Thread.sleep(8000);

	}
	
	@And("^user clicks select this plan button$")
	public void user_clicks_select_this_plan_button() {
		
		driver.findElement(By.xpath("//span[contains(text(),'Select this plan')]")).click();
		
	}
	@Then("^user select choose later button$")
	public void user_select_choose_later_button() {
		
		driver.findElement(By.xpath("//button[@class='btn-link toggle-button']//div[contains(text(),'Choose later')]")).click();
		
	}
	
	
	
	
	
	
	
	

}