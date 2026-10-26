---
title: AI
description: Afyra's crop-residue image classification model, training, evaluation and backend integration.
---

# Artificial Intelligence

Afyra integrates computer vision into its crop-residue listing workflow to help assess the quality of agricultural residues submitted by farmers.

The AI component uses **YOLO26n-cls**, an image-classification model, to analyze photographs and produce quality predictions that inform backend listing decisions.

## AI Overview

The AI component focuses on one primary task: **crop-residue quality classification**.

When a farmer submits a crop-residue listing, the photographs are processed by the backend and evaluated by the classification model.

The resulting predictions are used to determine whether the submitted residue satisfies the application's quality requirements.

| Component      | Description                            |
| -------------- | -------------------------------------- |
| Model          | YOLO26n-cls                            |
| AI technique   | Computer vision                        |
| Task           | Image classification                   |
| Input          | Crop-residue photographs               |
| Output         | Predicted quality class and confidence |
| Integration    | FastAPI backend                        |
| Model artifact | `ml/weights/residue_cls.pt`            |

## Problem Being Addressed

Crop residues can vary in condition, and photographs may provide useful visual evidence of that condition.

Without an automated assessment process, checking every submitted listing would require additional manual effort.

Afyra's model is intended to support a more consistent initial screening process.

However, visual classification alone cannot establish the full nutritional value, moisture content or safety of agricultural feed material.

---

## Model Selection

### YOLO26n-cls

Afyra uses the classification variant of YOLO26n.

Unlike an object-detection model, which identifies objects and their positions within an image, the classification model predicts a category for the input image.

The model was selected for its relatively small size and suitability for integration into the image-processing workflow.

### Model Characteristics

| Property                | Reported Value                                 |
| ----------------------- | ---------------------------------------------- |
| Architecture            | YOLO26n-cls                                    |
| Parameters              | Approximately 1.5 million                      |
| Model size              | Approximately 3.2 MB                           |
| Input image size        | 224 × 224                                      |
| Reported inference time | Approximately 4.5 ms per image on an NVIDIA T4 |

The inference time is a reported benchmark and should not be interpreted as the complete API response time or expected CPU performance.

---

## Dataset

The model development report describes a dataset of crop-residue photographs, particularly maize stalk imagery.

Images were sourced from:

- DuckDuckGo image searches.
- Kaggle datasets.

### Image Perspectives

The dataset design considered three photographic views.

| View  | Purpose                                       |
| ----- | --------------------------------------------- |
| Macro | General appearance of the residue             |
| Core  | Internal condition of the material            |
| Base  | Condition near the lower portion of the stalk |

These views provide different visual information about the submitted material.

### Data Preparation

Model development involves preparing photographs for classification, organizing them by their assigned labels and separating training and evaluation data.

The reliability of the resulting model depends on image quality, labeling accuracy and how well the dataset represents real farm conditions.

---

## Quality Classification

The classification workflow uses two quality outcomes.

| Quality | Interpretation                                                              |
| ------- | --------------------------------------------------------------------------- |
| Good    | The photograph is classified as meeting the model's visual quality criteria |
| Bad     | The photograph is classified as not meeting those criteria                  |

**Implementation note:** The backend model integration uses `GOOD` and `POOR` terminology internally, with `POOR` mapped to the lower-quality outcome. The documentation uses **Good** and **Bad** as Afyra's two business-facing quality categories.

The model's prediction is a visual assessment, not a laboratory-quality certification.

---

## Model Evaluation

The AI model report provides the following evaluation results.

| Evaluation              | Reported Accuracy | Dataset Size |
| ----------------------- | ----------------: | -----------: |
| Validation              |               96% |    26 images |
| Held-out web-image test |               92% |    36 images |

These results provide initial evidence of classification performance.

However, the evaluation datasets are small and may not represent the diversity of real-world agricultural conditions.

The reported results should therefore not be presented as guaranteed accuracy in production.

### Evaluation Considerations

Further evaluation should consider:

- Different crop-residue varieties.
- Lighting conditions.
- Camera quality.
- Background variation.
- Partially obscured materials.
- Images captured in actual farm environments.
- Incorrect classifications and their operational consequences.

---

## AI Inference Workflow

The AI model is integrated into the backend listing process.

### Processing Sequence

1. A farmer submits crop-residue information and photographs.
2. The backend validates the submitted images.
3. Images are prepared for model inference.
4. The YOLO26n-cls model evaluates the photographs.
5. Classification results and confidence values are returned.
6. Backend rules interpret the results.
7. The listing workflow proceeds according to the quality decision.

### Image Processing

The documented backend integration includes:

| Setting                           | Documented Value |
| --------------------------------- | ---------------- |
| Maximum image size                | 10 MB            |
| Maximum processed image dimension | 1600 px          |
| Classification input size         | 224 × 224        |
| Default confidence threshold      | 0.60             |
| Model execution                   | CPU              |
| Metadata handling                 | EXIF removal     |

Image validation and preprocessing help ensure that submitted photographs are suitable for processing.

### Confidence Handling

The documented backend behavior rejects a listing when the model produces a low-confidence result or identifies unacceptable quality.

This is an automated decision rather than a confirmed human-review workflow.

---

## Backend Integration

The model is used through the FastAPI backend rather than being executed directly in the Flutter application.

This allows the backend to coordinate:

- Image validation.
- Model inference.
- Classification interpretation.
- Listing acceptance or rejection.
- Storage of relevant assessment results.

The model artifact is documented at:

`ml/weights/residue_cls.pt`

The exact service implementation and API endpoint should be verified against the current backend repository.

---

## Model Limitations

The AI component has several important limitations.

### Visual Assessment Only

The model analyzes image appearance. It does not directly measure moisture, contamination, nutritional content or chemical composition.

### Limited Evaluation Data

The reported evaluation datasets are small. Results may change when the model encounters new locations, crop varieties or photographic conditions.

### Image Quality Dependence

Blurry photographs, poor lighting and unusual viewing angles can affect classification reliability.

### Classification Errors

The model can incorrectly classify acceptable material as unacceptable, or vice versa.

### Need for Field Validation

Performance should be evaluated using representative photographs captured by intended users under realistic operating conditions.

---

## AI and Other Platform Algorithms

Afyra's AI model should not be confused with the platform's other decision-making components.

| Component              | Approach                          | Responsibility                                              |
| ---------------------- | --------------------------------- | ----------------------------------------------------------- |
| Quality Classification | Computer vision model             | Assess crop-residue photographs                             |
| Pricing                | Rule-based estimation             | Estimate value using reference prices, quality and quantity |
| Matching               | Business rules and matching logic | Identify eligible supply                                    |
| Pooling                | Allocation and proximity logic    | Group eligible supply                                       |

For the other components, see:

- [Pricing Algorithm](/platform/pricing)
- [Matching Algorithm](/platform/matching)
- [Pooling Algorithm](/platform/pooling)

---

## Future Evaluation and Improvement

Potential improvements include collecting more representative farm photographs, expanding evaluation datasets and measuring model performance across different conditions.

Any model update should be evaluated before replacing the existing model artifact.

Important evaluation measures include classification accuracy, precision, recall, confusion matrices and the operational impact of incorrect decisions.

---

## Related Documentation

- [Backend](/backend/)
- [System Architecture Diagram](/architecture/sad)
- [ERD & Data Models](/architecture/data-models)
- [Security](/security/)
- [QA](/qa/)

## References & Live Docs

- [Afyra API Documentation](https://afyra-def6d466c54b.herokuapp.com/docs)
