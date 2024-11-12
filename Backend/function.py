from datetime import datetime, timedelta

def calculate_price(date, num_people, option):

    pricing = {
        1: {'price_per_day': 20, 'duration': 1},
        2: {'price_per_day': 15, 'duration': 7},
        3: {'price_per_day': 30, 'duration': 30}
    }

    if option not in pricing:
        raise ValueError("Invalid option. Please choose 1, 2 or 3.")
    
    price_per_day = pricing[option]['price_per_day']
    duration = pricing[option]['duration']

    start_date = datetime.strptime(date, "%d/%m/%Y")
    end_date = start_date + timedelta(days=duration)

    total_bill = num_people * price_per_day * duration

    return end_date.strftime("%d/%m/%Y"), total_bill

start_date = "10/11/2024"
num_people = 5
option = 3

end_date, total_bill = calculate_price(start_date, num_people, option)
print("End Date:", end_date)
print("total Bill: RM", total_bill)