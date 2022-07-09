from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
import time
import random

options=[1,2,3,4]
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))

driver.get("http://localhost:3000/quiz")
time.sleep(2)
driver.find_element("id","finish_button").click()
time.sleep(2)
driver.switch_to.alert.accept();
time.sleep(2)

for i in range(1,19):
    num=random.randint(1,4)
    driver.find_element("id","q"+str(i)+"option"+str(num)).click()
    time.sleep(0.5)
    driver.find_element("id",("q"+str(i)+"flag_Button")).click()
    time.sleep(0.5)
    driver.find_element("id",("q"+str(i)+"error_Button")).click()
    

driver.find_element("id","finish_button").click()
time.sleep(5)
driver.switch_to.alert.accept();
print(1)
