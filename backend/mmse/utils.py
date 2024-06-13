# utils.py

def calculate_scores(responses):
    # Define item indices
    anxiety_stress_items = [0, 3, 5, 6, 7, 8]
    depression_items = [1, 2, 4, 9]

    # Calculate raw scores
    anxiety_stress_score = sum(responses[i] for i in anxiety_stress_items)
    depression_score = sum(responses[i] for i in depression_items)
    total_score = anxiety_stress_score + depression_score

    # Calculate average scores
    anxiety_stress_avg = anxiety_stress_score / len(anxiety_stress_items)
    depression_avg = depression_score / len(depression_items)
    total_avg = total_score / len(responses)

    # Determine severity
    severity = classify_severity(total_score, total_avg)

    return {
        'anxiety_stress_score': anxiety_stress_score,
        'depression_score': depression_score,
        'total_score': total_score,
        'anxiety_stress_avg': anxiety_stress_avg,
        'depression_avg': depression_avg,
        'total_avg': total_avg,
        'severity': severity
    }

def classify_severity(raw_score, avg_score):
    if raw_score <= 6 and avg_score <= 0.6:
        return 'Mild/subclinical'
    elif 7 <= raw_score <= 12 and 0.7 <= avg_score <= 1.2:
        return 'Moderate'
    elif raw_score >= 13 and avg_score >= 1.3:
        return 'Severe'
    return 'Unknown'
