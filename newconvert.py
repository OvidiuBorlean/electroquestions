import pandas as pd
import json

def excel_to_questions():
    # Read the Excel file, setting index_col=0 to skip the first column (index)
    df = pd.read_excel('legislatie.xlsx', index_col=0)
    
    # Print the column names to see what they actually are
    print("Available columns in Excel file:", df.columns.tolist())
    
    # Initialize the questions list
    questions = []
    
    # Iterate through each row
    for _, row in df.iterrows():
        question = {
            'question': str(row[df.columns[0]]),  # First column (after index)
            'options': [
                str(row[df.columns[1]]),  # Second column
                str(row[df.columns[2]]),  # Third column
                str(row[df.columns[3]])   # Fourth column
            ],
            'answer': str(row[df.columns[1]]),  # Assuming first option is correct
            'reference': 'https://example.com/reference'
        }
        questions.append(question)
    
    # Create the JavaScript output
    js_output = 'const BASE_QUESTIONS = ' + json.dumps(questions, indent=4, ensure_ascii=False) + ';\n\n'
    js_output += '// Export the questions array so it can be used in other files\n'
    js_output += 'export { BASE_QUESTIONS };'
    
    # Write to questions.js file
    with open('legislatie.js', 'w', encoding='utf-8') as f:
        f.write(js_output)

if __name__ == '__main__':
    try:
        excel_to_questions()
        print("Successfully converted Excel to questions.js")
    except Exception as e:
        print(f"Error: {str(e)}")
