from django.db import models

# Create your models here.
class SoundFeature(models.Model):
    user_pk = models.IntegerField()
    # 컬럼 다 적기...
    harmony_mean = models.FloatField()
    harmony_var = models.FloatField()
    mfcc0_mean = models.FloatField()
    mfcc0_var = models.FloatField()
    mfcc10_mean = models.FloatField()
    mfcc10_var = models.FloatField()
    mfcc11_mean = models.FloatField()
    mfcc11_var = models.FloatField()
    mfcc12_mean = models.FloatField()
    mfcc12_var = models.FloatField()
    mfcc13_mean = models.FloatField()
    mfcc13_var = models.FloatField()
    mfcc14_mean = models.FloatField()
    mfcc14_var = models.FloatField()
    mfcc15_mean = models.FloatField()
    mfcc15_var = models.FloatField()
    mfcc16_mean = models.FloatField()
    mfcc16_var = models.FloatField()
    mfcc17_mean = models.FloatField()
    mfcc17_var = models.FloatField()
    mfcc18_mean = models.FloatField()
    mfcc18_var = models.FloatField()
    mfcc19_mean = models.FloatField()
    mfcc19_var = models.FloatField()
    mfcc1_mean = models.FloatField()
    mfcc1_var = models.FloatField()
    mfcc2_mean = models.FloatField()
    mfcc2_var = models.FloatField()
    mfcc3_mean = models.FloatField()
    mfcc3_var = models.FloatField()
    mfcc4_mean = models.FloatField()
    mfcc4_var = models.FloatField()
    mfcc5_mean = models.FloatField()
    mfcc5_var = models.FloatField()
    mfcc6_mean = models.FloatField()
    mfcc6_var = models.FloatField()
    mfcc7_mean = models.FloatField()
    mfcc7_var = models.FloatField()
    mfcc8_mean = models.FloatField()
    mfcc8_var = models.FloatField()
    mfcc9_mean = models.FloatField()
    mfcc9_var = models.FloatField()
    perceptr_mean = models.FloatField()
    perceptr_var = models.FloatField()
    rolloff_mean = models.FloatField()
    rolloff_var = models.FloatField()
    spectral_bandwidth_mean = models.FloatField()
    spectral_bandwidth_var = models.FloatField()
    spectral_centroid_mean = models.FloatField()
    spectral_centroid_var = models.FloatField()
    tempo = models.FloatField()
    zero_crossing_rate_mean = models.FloatField()
    zero_crossing_rate_var = models.FloatField()

