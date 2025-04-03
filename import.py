import pandas as pd

# Load the spreadsheet
file_path = "/C:\Users\helle\Senior Project\Public.Movie Spreadsheet"
xls = pd.ExcelFile(file_path)

# Display sheet names to determine where movie data might be stored
xls.sheet_names
# Load the potential sheets to inspect their structure
dataset_sheet = xls.parse("DataSet")
data_sheet = xls.parse("Data")

# Display the first few rows of each sheet to analyze their contents
dataset_sheet.head(), data_sheet.head()
# Extract movie titles from the "DataSet" sheet
movie_titles = dataset_sheet["Title"].dropna().unique().tolist()


# Select a subset of movies to use as fallback recommendations (limit to 10 for now)
fallback_recommendations = movie_titles[:10]
fallback_recommendations
