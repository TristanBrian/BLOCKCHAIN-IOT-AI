from sklearn.ensemble import RandomForestClassifier
import pandas as pd
import joblib

# Load IoT data
data = pd.read_csv('iot_data.csv')
X = data.drop('quality', axis=1)
y = data['quality']

# Train AI model
model = RandomForestClassifier()
model.fit(X, y)

# Save the model
joblib.dump(model, 'produce_quality_model.pkl')
