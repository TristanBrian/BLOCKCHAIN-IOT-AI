import joblib
import pandas as pd

# Load the model
model = joblib.load('produce_quality_model.pkl')

# New data for prediction
new_data = pd.DataFrame({
    'moisture': [12],
    'temperature': [22]
})

# Predict quality
def predict_quality(new_data):
    return model.predict(new_data)

# Example usage
print(predict_quality(new_data))
